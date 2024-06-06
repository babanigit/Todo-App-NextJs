import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import RemoveBtn from "./RemoveBtn";

interface Itodo {
  _id: string | null | undefined;
  title: string;
  description: string;
}

const getTodo = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/todos", {
      cache: "no-store",
    });

    if (!res.ok) {
      console.log("failed to fetch");
      throw new Error("Failed to fetch todos");
    }

    return await res.json();
  } catch (error) {
    console.log("Error loading todos: ", error);
  }
};

export default async function TodoList() {
  // try {
  const todo = await getTodo();

  console.log(" the todo is  ", todo);

  return (
    <>
      {todo ? (
        <div>
          {todo.todos.map((t: Itodo) => (
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
                <Link href={`/editTodo/${t._id}`}>
                  <HiPencilAlt size={24} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div> no todo list</div>
      )}
    </>
  );
  // } catch (error) {
  //   console.log("Error in fetching todos:", error);
  //   return <div>Error occurred while loading todos</div>;
  // }
}
