import React from "react";
import TaskCard from "../Shared/Task-Card/TaskCard";

export default function TaskList({ data }) {
  return (
    <div className="flex flex-col gap-4 py-4 ">
      {data.map((item) => {
        return <TaskCard key={item.id} task={item} />;
      })}
    </div>
  );
}
