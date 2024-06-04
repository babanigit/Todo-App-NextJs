import mongoose, { Schema, Document } from "mongoose";
import { Key } from "react";

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

// Define the TypeScript interface that represents the document returned by Mongoose
export interface ITodo extends Document {
    _id: Key | null | undefined;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

// Define the Mongoose model
const todoModel = mongoose.models.Topic || mongoose.model<ITodo>("todo", todoSchema);

export default todoModel