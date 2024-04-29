import { connectionStr } from "@/app/lib/db";
import { restaurentSchema } from "@/app/lib/restaurentModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  await mongoose.connect(connectionStr, { useNewUrlParser: true });

  const data = await restaurentSchema.find();
  console.log("dara", data);

  return NextResponse.json({ result: data });
}

export async function POST(request) {
  let payload = await request.json();
  await mongoose.connect(connectionStr, { useNewUrlParser: true });
  let restaurent = new restaurentSchema(payload);
  const result = await restaurent.save();
  return NextResponse.json({ result: result, success: true });
}
