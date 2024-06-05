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

//post todo
export async function POST (request:NextRequest) {
    console.log("from POST")
    const {title,description}= await request.json();

    await connectMongoDb();
    await todoModel.create({title,description});
    return NextResponse.json({
        message:"todo Created"
    }, {
        status:201
    })
    
}

