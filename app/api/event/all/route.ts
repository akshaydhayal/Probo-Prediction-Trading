import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prismaClient=new PrismaClient();
export async function GET(req: NextRequest) {
  try {
    const events = await prismaClient.event.findMany({});
    return NextResponse.json({ events }, { status: 200 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ msg: "Internal Server error", error: e }, { status: 501 });
  }
}
