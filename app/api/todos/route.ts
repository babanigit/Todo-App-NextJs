// import connectDb from "@/libs/mongodbConnect";



import connectMongoDb from "@/libs/mongodbConnect";
import todoModel from "@/model/todoModel";

import { NextRequest, NextResponse } from "next/server";



// get todos
export async function GET() {

    console.log("from GET")

    await connectMongoDb();

    const todos= await todoModel.find();

    return NextResponse.json({todos}, {status:200})
}