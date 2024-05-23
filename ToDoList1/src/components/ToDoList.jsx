import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const handleDelete = (index) => {
    const newTasks = tasks.filter((task, taskIndex) => taskIndex !== index);
    setTasks(newTasks);
  };

  return (
    <div className="container mx-auto p-4 max-w-md">
      <h1 className="text-2xl font-bold text-center mb-4">To-Do List</h1>
      <form onSubmit={handleFormSubmit} className="flex mb-4">
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Add a new task"
          required
          className="flex-1 p-2 border rounded-l"
        />
        <button type="submit" className="p-2 bg-green-500 text-white rounded-r">
          Add
        </button>
      </form>
      <ul className="list-none p-0">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex justify-between items-center p-2 mb-2 bg-gray-100 rounded"
          >
            <span>{task}</span>
            <button
              onClick={() => handleDelete(index)}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
