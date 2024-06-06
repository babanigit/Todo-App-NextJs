import EditTopicForm from "@/components/EditTopicForm";
import React, { Key } from "react";

interface IProps {
  params: { id: Key | null | undefined };
}

const getTodoById = async (id: Key | null | undefined) => {
  try {
    const res = await fetch(`http://localhost:3000/api/todos/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return await res.json();
  } catch (error) {
    console.error(error);
  }
};

const editTodo = async ({ params }: IProps) => {
  const { id } = params;
  const { todo } = await getTodoById(id);

  console.log(" get todo ", todo)

  const { title, description } = todo;

  return (
    <div>
      <EditTopicForm id={id} title={title} description={description} />
    </div>
  );
};

export default editTodo;
