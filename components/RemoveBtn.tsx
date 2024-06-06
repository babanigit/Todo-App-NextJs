"use client";
import { Key } from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

interface IProps {
  id: Key | null | undefined;
}

const RemoveBtn = ({ id }: IProps) => {

  const router = useRouter();

  const removeTopic = async () => {

    const confirmed = confirm("Are you sure?"); //we are confirming here

    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/todos?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh();
      }
    }
  };

  return (
    <button onClick={removeTopic} className="text-red-400">
      <HiOutlineTrash size={24} />
    </button>
  );
};

export default RemoveBtn;
