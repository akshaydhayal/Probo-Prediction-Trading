import { NextRequest, NextResponse } from "next/server";

export function POST(re:NextRequest){
    
    return NextResponse.json({msg:"Hello"},{status:200});
}