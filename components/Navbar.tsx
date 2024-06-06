
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
    <Link className="text-white font-bold" href={"/"}>
      Todo App
    </Link>
    <Link className="bg-white text-black p-2" href={"/addTodo"}>
      Add Todo
    </Link>
  </nav>
  )
}
