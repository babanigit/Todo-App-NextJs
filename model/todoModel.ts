import mongoose, { Schema, Document } from "mongoose";

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

// Check if the model exists, if not, define it
const Todo = mongoose.models.Todo || mongoose.model("Todo", todoSchema);

export default Todo;
