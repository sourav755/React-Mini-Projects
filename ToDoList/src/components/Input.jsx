import { useState } from "react";
import React from "react";

function input({ taskList, setTaskList }) {
  const [input, setInput] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    setTaskList([...taskList, input]);
    setInput("");
  };

  return (
    <>
      <form className="flex flex-row items-center gap-3">
        <input
          className="border rounded-lg py-1.5 px-2.5 text-lg"
          type="text"
          placeholder="Add a Task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="bg-violet-400 text-white py-2 px-4 rounded"
          onClick={handleAddTask}
        >
          Add
        </button>
      </form>
    </>
  );
}

export default input;
