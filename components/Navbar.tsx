
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
    <Link className="text-white font-bold" href={"/"}>
      crud in next
    </Link>
    <Link className="bg-white p-2" href={"/addTodo"}>
      Add Topic
    </Link>
  </nav>
  )
}
