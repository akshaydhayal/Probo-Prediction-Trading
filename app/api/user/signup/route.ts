import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import {z} from "zod";
import bcrypt from "bcrypt";

const prismaClient=new PrismaClient();

const signupSchema=z.object({
    name:z.string().min(5).max(30),
    email:z.string().email(),
    password:z.string().min(5).max(30),
})

export async function POST(req:NextRequest){
    try{
        const body=await req.json();
        const parsedResponse=signupSchema.safeParse(body);
        if(!parsedResponse.success){
            return NextResponse.json({msg:parsedResponse.error},{status:401});
        }
        const {name,email,password}=parsedResponse.data;
        const hashedPassword=await bcrypt.hash(password,10);
        await prismaClient.user.create({
            data:{email,name,password:hashedPassword}
        })
        return NextResponse.json({msg:"User signed up!!"},{status:201});
    }catch(e){
        console.log(e);
        return NextResponse.json({msg:"Internal server error",error:e},{status:501});
    }
}