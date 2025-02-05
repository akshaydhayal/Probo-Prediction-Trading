import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import {z} from "zod";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";


const prismaClient=new PrismaClient();

const signinSchema=z.object({
    email:z.string().email(),
    password:z.string().min(5).max(30),
})

export async function POST(req:NextRequest){
    try{
        const body=await req.json();
        const parsedResponse=signinSchema.safeParse(body);
        if(!parsedResponse.success){
            return NextResponse.json({msg:parsedResponse.error},{status:401});
        }
        const {email,password}=parsedResponse.data;
        const user=await prismaClient.user.findFirst({where:{email}});
        if(!user){
            return NextResponse.json({msg:"User not found"},{status:401});
        }
        const isPasswordMatched=await bcrypt.compare(password,user.password);
        if(!isPasswordMatched){
            return NextResponse.json({msg:"Invalid password"},{status:401});
        }
        if(!process.env.JWT_SECRET){
            return NextResponse.json({msg:"JWT secret is not defined"},{status:401});
        }
        const jwtToken=jwt.sign({userId:user.id},process.env.JWT_SECRET);
        const cookieStore=await cookies();
        cookieStore.set('auth-cookie',jwtToken,{
            httpOnly:true,
            sameSite:"lax"
        });
        return NextResponse.json({msg:"User signed in!!",jwtToken},{status:200});
    }catch(e){
        console.log(e);
        return NextResponse.json({msg:"Internal server error",error:e},{status:501});
    }
}