import { ITodo } from "@/model/todoModel";

import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import RemoveBtn from "./RemoveBtn";


export const getTodo = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/todos", {
      cache: "no-store",
    });

    if (!res.ok) {
      console.log("failed to fetch");
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

const TodoList = async () => {
  const { todo } = await getTodo();

  console.log(todo)

  return (
    <>
      <div> todo lists </div>
      
      {
        todo == false
        ?( <div> no todo list</div> )
        :( 
            <div>
            {todo.map((t: ITodo) => (
              <div
                key={t._id}
                className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
              >
                <div>
                  <h2 className="font-bold text-2xl">{t.title}</h2>
                  <div>{t.description}</div>
                </div>
    
                <div className="flex gap-2">
                  <RemoveBtn id={t._id} />
                  <Link href={`/editTopic/${t._id}`}>
                    <HiPencilAlt size={24} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )
      }
     
    </>
  );
};

export default TodoList;
