import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import {z} from "zod";

const prismaClient=new PrismaClient();
const eventSchema=z.object({
    title:z.string().min(10).max(300),
    description:z.string(),
    startTime:z.string().date(),
    endTime:z.string().date(),
})
export async function POST(req:NextRequest){
    try{
        const body=await req.json();
        console.log(body);
        const parsedResponse=eventSchema.safeParse(body);
        if(!parsedResponse.success){
            return NextResponse.json({msg:parsedResponse.error},{status:401});
        }
        const {title,description,startTime,endTime}=parsedResponse.data;
        await prismaClient.event.create({
            data:{title,description,endTime:new Date(endTime),startTime:new Date(startTime)}
        });
        return NextResponse.json({msg:"Event created successfully"},{status:201});
    }catch(e){
        console.error(e);
        return NextResponse.json({msg:"Internal Server error",error:e},{status:501});
    }
}

export async function GET(req:NextRequest){
    try{
        const url=new URL(req.url);
        const eventId=url.searchParams.get("eventId");
        if(!eventId){
            return NextResponse.json({msg:"Event ID is required"},{status:400});
        }
        const event=await prismaClient.event.findUnique({where:{id:Number(eventId)}});
        if(!event){
            return NextResponse.json({msg:"Event not found"},{status:404});
        }
        return NextResponse.json({event},{status:200});
    }catch(e){
        console.error(e);
        return NextResponse.json({msg:"Internal Server error",error:e},{status:501});
    }
}
