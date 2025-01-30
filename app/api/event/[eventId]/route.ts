import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";
import {z} from "zod";

const prismaClient=new PrismaClient();

const bettingSchema=z.object({
    amount:z.number(),
    prediction:z.enum(['YES','NO','PENDING'])
})

export async function POST(req:NextRequest,{params}:{params:{eventId:number}}){
    try{
        const body=await req.json();
        const parsedResponse=bettingSchema.safeParse(body);
        if(!parsedResponse.success){
            return NextResponse.json({msg:parsedResponse.error},{status:401});
        }
        const {amount,prediction}=parsedResponse.data;
        console.log(body);
        const {eventId}=await params;
        const token=req.headers.get("token");
        if(!token){
            return NextResponse.json({msg:"Provide a JWT Token"},{status:401});
        }
        if(!process.env.JWT_SECRET){
            return NextResponse.json({msg:"NO JWT SECRET providede"},{status:401});
        }
        const decodedToken=jwt.verify(token,process.env.JWT_SECRET) as {userId:number};
        if(!decodedToken){
            return NextResponse.json({msg:"Wong Jwt token credentials!!"},{status:401});
        }
        const userId=decodedToken?.userId;
        console.log(`userId : ${userId} eventId : ${eventId}`);
        const event=await prismaClient.event.findUnique({where:{id:Number(eventId)}});
        if(!event){
            return NextResponse.json({msg:"Event not found"},{status:404});
        }
        const user=await prismaClient.user.findUnique({where:{id:userId}});
        if(!user){
            return NextResponse.json({msg:"User not found"},{status:404});
        }
        await prismaClient.betting.create({
            data:{amount,prediction,eventId:Number(eventId),userId}
        })
        return NextResponse.json({msg:"Betting created successfully"},{status:201});
    }catch(e){
        console.error(e);
        return NextResponse.json({ msg: "Internal Server error", error: e }, { status: 501 });
    }
}

export async function GET(req: NextRequest,{params}:{params:{eventId:number}}) {
  try {
    // const url = new URL(req.url);
    // const eventId = url.searchParams.get("eventId");
    const {eventId}=params;
    if (!eventId) {
      return NextResponse.json({ msg: "Event ID is required" }, { status: 400 });
    }
    const event = await prismaClient.event.findUnique({ where: { id: Number(eventId) } });
    if (!event) {
      return NextResponse.json({ msg: "Event not found" }, { status: 404 });
    }
    return NextResponse.json({ event }, { status: 200 });
  } catch (e) {
      return NextResponse.json({ msg: "Internal Server error", error: e }, { status: 501 });
    console.error(e);
  }
}
