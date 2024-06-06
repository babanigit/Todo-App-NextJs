"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  setTheme("");

  const currentTheme = theme === "system" ? "systemTheme" : "theme";

  return (
    <nav className="flex justify-between items-center   px-8 py-3">
      {" "}
      <Link className="font-bold" href={"/"}>
        Todo App
      </Link>
      <div className=" flex gap-3">
        <Link className=" border-2 rounded-xl p-2" href={"/addTodo"}>
          Add Todo
        </Link>
      </div>
    </nav>
  );
};
