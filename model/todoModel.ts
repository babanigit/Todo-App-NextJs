import mongoose, { Schema, Document } from "mongoose";
import { Key } from "react";

// Define the TypeScript interface that represents the document returned by Mongoose
// interface ITodo extends Document {
//   _id: Key | null | undefined;
// title: string;
// description: string;
// createdAt: Date;
// updatedAt: Date;
// }

// Define the Mongoose schema
const todoSchema = new Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
);



// Define the Mongoose model
const todoModel = mongoose.models.Topic || mongoose.model("todo", todoSchema);

export default todoModel