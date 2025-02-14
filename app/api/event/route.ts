import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import {z} from "zod";

const prismaClient=new PrismaClient();

const eventSchema=z.object({
    title:z.string().min(10).max(300),
    description:z.string(),
    startTime:z.string().date(),
    endTime:z.string().date(),
    imageUrl:z.string().url(),
    sourceOfTruth:z.string().max(100)
})

//create event endpoint
export async function POST(req:NextRequest){
    try{
        const body=await req.json();
        console.log(body);
        const parsedResponse=eventSchema.safeParse(body);
        if(!parsedResponse.success){
            return NextResponse.json({msg:parsedResponse.error},{status:401});
        }
        const {title,description,startTime,endTime,imageUrl,sourceOfTruth}=parsedResponse.data;
        await prismaClient.event.create({
            data:{
                title,description,endTime:new Date(endTime),startTime:new Date(startTime),imageUrl,sourceOfTruth
            }
        });
        return NextResponse.json({msg:"Event created successfully"},{status:201});
    }catch(e){
        console.error(e);
        return NextResponse.json({msg:"Internal Server error",error:e},{status:501});
    }
}



//get all events endpoint
export async function GET() {
  try {
    const events = await prismaClient.event.findMany({
        include:{_count:{select:{bettings:true}}}
    });
    return NextResponse.json({ events }, { status: 200 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ msg: "Internal Server error", error: e }, { status: 501 });
  }
}