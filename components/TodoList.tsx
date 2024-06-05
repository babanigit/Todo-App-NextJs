import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import RemoveBtn from "./RemoveBtn";

interface Itodo {
  _id: string | null | undefined;
  title: string;
  description: string;
}

export const getTodo = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/todos", {
      cache: "no-store",
    });

    if (!res.ok) {
      console.log("failed to fetch");
      throw new Error("Failed to fetch todos");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading todos: ", error);
  }
};

const TodoList = async () => {
  try {
    const  { todoResponse } = await getTodo();

    console.log(" the todoResponse is  ", todoResponse);

    if (!todoResponse || !todoResponse.todo) {
      // Handle case where todo data is not available
      return <div>No todo list available</div>;
    }

    const { todo } = todoResponse;

    return (
      <>
        <div> todo lists </div>

        {/* {todo ? ( */}
          <div>
            {todo.map((t: Itodo) => (
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
        {/* ) : (
          <div> no todo list</div>
        )} */}
      </>
    );
  } catch (error) {
    console.log("Error in fetching todos:", error);
    return <div>Error occurred while loading todos</div>;
  }
};

export default TodoList;
