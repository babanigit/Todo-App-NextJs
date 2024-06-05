/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, {  useState } from "react";
import { useRouter } from "next/navigation";


const page = () => {
  const [formData, setFormData] = useState({});
  const router = useRouter();

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    console.log(formData);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);

    try {
      const res = await fetch("http://localhost:3000/api/todos", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push("/");
        router.refresh();
      } else {
        throw new Error("Failed to create a topic");
      }

    } catch (error) {}
  };

  try {
    return (
      <>
        <div className=" m-4">
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              onChange={handleChange}
              id="title"
              // value={title}
              className="border rounded-xl text-black border-slate-500 px-8 py-2"
              type="text"
              placeholder="todo Title"
            />

            <input
              onChange={handleChange}
              // value={description}
              id="description"
              className="border rounded-xl text-black border-slate-500 px-8 py-2"
              type="text"
              placeholder="Todo Description"
            />

            <button
              type="submit"
              className="bg-blue-600 rounded-xl font-bold text-white py-3 px-6 w-fit"
            >
              Add Todo
            </button>
          </form>
        </div>
      </>
    );
  } catch (error) {
    console.log(" main try and catch error ", error);
    return <div> main try and catch error </div>;
  }
};

export default page;
