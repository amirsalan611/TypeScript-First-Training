import axios from "axios";
import { Pencil, Trash2 } from "lucide-react";
import React from "react";
import Swal from "sweetalert2";

export default function TaskCard({ task }) {
  async function handelDelete(id: string) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        const response = await axios.delete(
          `https://676d4ea00e299dd2ddff1999.mockapi.io/Tasks/${id}`
        );
      }
    });
  }

  async function handelEdit(id: string) {
    const response = await axios.put(
      `https://676d4ea00e299dd2ddff1999.mockapi.io/Tasks/${id}`
    );
    console.log(response);
  }
  return (
    <>
      <section className="flex justify-around px-10 py-2 border border-purple-800 rounded-lg ">
        <h2>{task.name}</h2>
        <p>{task.deadLine}</p>
        <p>{task.status}</p>
        <div className="flex gap-2">
          <button onClick={() => handelDelete(task.id)}>
            <Trash2 />
          </button>
          <button onClick={() => handelEdit(task.id)}>
            <Pencil />
          </button>
        </div>
      </section>
    </>
  );
}
