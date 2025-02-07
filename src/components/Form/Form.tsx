import axios from "axios";
import React, { useEffect, useReducer, useRef, useState } from "react";
import { toast } from "react-toastify";
import Input from "../Shared/Input/Input";
import Button from "../Shared/button/button";
import TaskList from "../Task-List/TaskList";

function reducerFn(state, action) {
  switch (action.type) {
    case "getData":
      return action.payload;
    case "addData":
      return [...state, action.payload];

    default:
      break;
  }
}

export default function Form() {
  const [newTask, setNewTask] = useState({
    taskName: "",
    taskDeadLine: "",
    taskStatus: "",
  });
  // const [tasks, setTasks] = useState([]);
  const [tasks, dispatch] = useReducer(reducerFn, []);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        `https://676d4ea00e299dd2ddff1999.mockapi.io/Tasks`
      );
      console.log(response);
      // setTasks(response.data);
      dispatch({ type: "getData", payload: response.data });
    }
    getData();
  }, []);

  const btnHandler = async () => {
    const response = await axios.post(
      `https://676d4ea00e299dd2ddff1999.mockapi.io/Tasks`,
      {
        name: newTask.taskName,
        deadLine: newTask.taskDeadLine,
        status: newTask.taskStatus,
      }
    );
    console.log(response.data);
    if (response.status === 201) {
      dispatch({
        type: "addData",
        payload: response.data,
      });
    }

    toast.success("Task Added Successfully!");
    setNewTask({
      taskName: "",
      taskDeadLine: "",
      taskStatus: "",
    });
  };

  const inputRef = useRef(null);
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-5 bg-purple-400 my-5 p-10 rounded-xl">
        <h1 className="text-purple-900 text-center font-medium text-[30px]">
          Add New Task
        </h1>
        <div className="flex gap-5 justify-around px-10 text-purple-950">
          <Input
            ref={inputRef}
            type={"text"}
            placeholder="type here ..."
            label="Task Name"
            name="taskName"
            value={newTask.taskName}
            onchange={(e) =>
              setNewTask({ ...newTask, taskName: e.target.value })
            }
            className="input"
          />
          <Input
            ref={inputRef}
            type={"date"}
            label="Task DeadLine"
            name="taskDeadLine"
            value={newTask.taskDeadLine}
            onchange={(e) =>
              setNewTask({ ...newTask, taskDeadLine: e.target.value })
            }
            className="input"
          />
          <Input
            ref={inputRef}
            type={"text"}
            placeholder="type here ..."
            label="Task status"
            name="taskStatus"
            value={newTask.taskStatus}
            onchange={(e) =>
              setNewTask({ ...newTask, taskStatus: e.target.value })
            }
            className="input"
          />
        </div>
        <Button
          className="w-[20%] bg-purple-950 text-white rounded-xl p-5 self-center"
          content="SEND"
          onclick={btnHandler}
        />
      </div>
      <TaskList data={tasks} />
    </div>
  );
}
