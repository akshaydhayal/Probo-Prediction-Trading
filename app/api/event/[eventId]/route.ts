import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";
import { z } from "zod";
import { cookies } from "next/headers";

const prismaClient = new PrismaClient();

const bettingSchema = z.object({
  amount: z.number(),
  prediction: z.enum(["YES", "NO", "PENDING"]),
});


//create a betting endpoint
export async function POST(req: Request, { params }: { params: Promise<{ eventId: string }> }) {
  try {
    const body = await req.json();
    const parsedResponse = bettingSchema.safeParse(body);
    if (!parsedResponse.success) {
      return NextResponse.json({ msg: parsedResponse.error }, { status: 401 });
    }
    const { amount, prediction } = parsedResponse.data;
    console.log(body);
    const { eventId } = await params;

    const cookieStore=await cookies();
    const token=cookieStore.get("auth-cookie")?.value;
    // const token = req.headers.get("token");
    if (!token) {
      return NextResponse.json({ msg: "Provide a JWT Token" }, { status: 401 });
    }
    if (!process.env.JWT_SECRET) {
      return NextResponse.json({ msg: "NO JWT SECRET providede" }, { status: 401 });
    }
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET) as { userId: number };
    if (!decodedToken) {
      return NextResponse.json({ msg: "Wong Jwt token credentials!!" }, { status: 401 });
    }
    const userId = decodedToken?.userId;
    console.log(`userId : ${userId} eventId : ${eventId}`);
    const event = await prismaClient.event.findUnique({ where: { id: Number(eventId) } });
    if (!event) {
      return NextResponse.json({ msg: "Event not found" }, { status: 404 });
    }
    if(event.result!='PENDING'){
        return NextResponse.json({ msg: "Event is already closed" }, { status: 404});
    }

    const user = await prismaClient.user.findUnique({ where: { id: userId } });
    if (!user) {
      return NextResponse.json({ msg: "User not found" }, { status: 404 });
    }
    if (user.balance < amount) {
      return NextResponse.json({ msg: "Insufficient balance" }, { status: 400 });
    }
    
    await prismaClient.$transaction([
        prismaClient.betting.create({
          data: { amount, prediction, eventId: Number(eventId), userId },
        }),
        prismaClient.user.update({
          where: { id: userId },
          data: { balance:{decrement:amount}},
        }),
        prismaClient.event.update({
          where: { id: Number(eventId) },
          data: {
            totalBetting: event.totalBetting + amount,
            yesBetting: prediction == "YES" ? event.yesBetting + amount : event.yesBetting,
            noBetting: prediction == "NO" ? event.noBetting + amount : event.noBetting,
          },
        })
    ]);

    return NextResponse.json({ msg: "Betting created successfully" }, { status: 201 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ msg: "Internal Server error", error: e }, { status: 501 });
  }
}


//get a speciifc event endpoint
export async function GET(req: NextRequest, { params }: { params: Promise<{ eventId: string }> }) {
  try {
    const { eventId } = await params;
    if (!eventId) {
      return NextResponse.json({ msg: "Event ID is required" }, { status: 400 });
    }
    const event = await prismaClient.event.findUnique({
      where: { id: Number(eventId) },
      include: { bettings: true },
    });
    if (!event) {
      return NextResponse.json({ msg: "Event not found" }, { status: 404 });
    }
    return NextResponse.json({ event }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ msg: "Internal Server error", error: e }, { status: 501 });
    console.error(e);
  }
}



//declare event result endpoint
export async function PUT(req: NextRequest, { params }: { params: Promise<{ eventId: string }> }) {
  try {
    const body = await req.json();
    const { eventId } = await params;
    const parsedResponse = z.object({ result: z.enum(["YES", "NO", "PENDING"]) }).safeParse(body);
    if (!parsedResponse.success)  return NextResponse.json({ msg: parsedResponse.error }, { status: 400 });
    
    const { result } = parsedResponse.data;
    if (result == "PENDING")  return NextResponse.json({ msg: "Result cannot be PENDING" }, { status: 400 });

    //to check if user has adminrole to decalre result
    // const token=req.headers.get("token");
    const cookieStore=await cookies();
    const token=cookieStore.get("auth-cookie")?.value;
    if(!token) return NextResponse.json({msg:"JWT not provided!!"},{status:401});
    if(!process.env.JWT_SECRET) return NextResponse.json({msg:"JWT SECRET not provided!!"},{status:401});
    const decodedToken=jwt.verify(token,process.env.JWT_SECRET);
    const userId=(decodedToken as JwtPayload).userId as number;
    const user=await prismaClient.user.findUnique({where:{id:userId}});
    if(!user) return NextResponse.json({msg:"User not found!!"},{status:401});
    if(user.role!='ADMIN'){
        return NextResponse.json({msg:"You are not authorized to declare result!!"},{status:401});
    }

    //getting the event
    const event = await prismaClient.event.findUnique({
      where: { id: Number(eventId) },
      include: { bettings: true },
    });
    if (!event) {
      return NextResponse.json({ msg: "Event not found" }, { status: 404 });
    }
    if (event.result !== "PENDING") {
      return NextResponse.json({ msg: "Event result already set" }, { status: 400 });
    }

    //transaction- evern result update and even money distribution
    const allWinBettings = event.bettings.filter((b) => b.prediction == result);
    const winOdds: number = event.totalBetting / (result == "YES" ? event.yesBetting : event.noBetting);

    const txs = allWinBettings.map((bet) => {
      return prismaClient.user.update({
        where: { id: bet.userId },
        data: { balance: { increment: winOdds * bet.amount } },
      });
    });
    await prismaClient.$transaction([
      prismaClient.event.update({
        where: { id: Number(eventId) },
        data: { result: result },
      }),
      ...txs,
    ]);

    return NextResponse.json({ msg: "Event result decalred!!" }, { status: 200 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ msg: "Internal Server error", error: e }, { status: 501 });
  }
}
