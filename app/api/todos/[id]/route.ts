// get todo by id

import connectMongoDb from "@/libs/mongodbConnect";
import todoModel from "@/model/todoModel";
import { NextRequest, NextResponse } from "next/server";

interface IProps {
    params: { id: string };
  }


  // get by id
export async function GET(request: NextRequest, { params }:IProps) {
    const { id } = params;
    await connectMongoDb();
    const todo = await todoModel.findOne({ _id: id });
    if (!todo) {
      return NextResponse.json({ message: "todo not found" }, { status: 404 });
    }
    return NextResponse.json({ todo }, { status: 200 });
  }

// update
export async function PUT(request:NextRequest, { params }:IProps) {
    const { id } = params;
    // const {title, description } = await request.json();
    const { newTitle: title, newDescription: description } = await request.json();

    await connectMongoDb();
    await todoModel.findByIdAndUpdate(id, { title, description });
    
    return NextResponse.json({ message: "Topic updated" }, { status: 200 });
  }