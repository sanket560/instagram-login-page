import connectDB from "@/database/dbConfig";
import User from "@/model/User.Model";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req) {
  await connectDB();
  const { username, password } = await req.json();
  const newlyCreatedUser = await User.create({
    username,
    password,
  });
  if (newlyCreatedUser) {
    return NextResponse.json({
        status : true,
        message : "login sucessfull"
    })
  } else {
    return NextResponse.json({
        status : false,
        message : "fail to login"
    })
  }
}
