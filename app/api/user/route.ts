import { NextRequest, NextResponse } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();
export async function GET(req: NextRequest) {
  try {
    const token = req.headers.get("token");
    if (!token) {
      return NextResponse.json({ error: "Token is required" }, { status: 401 });
    }
    if (!process.env.JWT_SECRET) {
      return NextResponse.json({ error: "JWT Secret is required" }, { status: 500 });
    }
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const userId = (decodedToken as JwtPayload).userId as number;
    if (!decodedToken) {
      return NextResponse.json({ msg: "Wong Jwt token credentials!!" }, { status: 401 });
    }
    const user = await prismaClient.user.findUnique({
      where: { id: userId },
      select: {
        name: true,
        balance: true,
        bettings: {
            select:{
                amount:true,prediction:true,id:true,
                event:{
                    select: { title: true, imageUrl: true, result: true,totalBetting:true,yesBetting:true,noBetting:true },
                }
            }
        },
      },
    });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    return NextResponse.json({ user }, { status: 200 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ msg: "Internal server error", error: e }, { status: 501 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const amount = Number(url.searchParams.get("deposit"));

    const token = req.headers.get("token");
    if (!token) {
      return NextResponse.json({ error: "Token is required" }, { status: 401 });
    }
    if (!process.env.JWT_SECRET) {
      return NextResponse.json({ error: "JWT Secret is required" }, { status: 500 });
    }
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET) as { userId: number };
    if (!decodedToken) {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }
    const user = await prismaClient.user.findUnique({ where: { id: decodedToken.userId } });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    await prismaClient.user.update({
      where: { id: decodedToken.userId },
      data: { balance: user.balance + amount },
    });
    return NextResponse.json({ msg: "Deposit successful" }, { status: 200 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ msg: "Internal server error" }, { status: 501 });
  }
}
