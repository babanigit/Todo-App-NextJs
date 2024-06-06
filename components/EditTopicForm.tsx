"use client";

import React, { Key, useState } from "react";

interface IProps {
  id: Key | null | undefined;
  title: string;
  description: string;
}

const EditTopicForm = ({ id, title, description }: IProps) => {
  const [formData, setFormData] = useState({});

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    console.log(formData);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {


    

  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          onChange={handleChange}
          id="newTitle"
          className="border border-slate-500 px-8 py-2 text-black "
          type="text"
          placeholder="Topic Title"
        />

        <input
          onChange={handleChange}
          id="newDescription"
          className="border border-slate-500 px-8 py-2 text-black "
          type="text"
          placeholder="Topic Description"
        />

        <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
          Update Topic
        </button>
      </form>
    </div>
  );
};

export default EditTopicForm;
