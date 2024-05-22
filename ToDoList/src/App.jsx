import { useState } from "react";
import Input from "./components/Input";

function App() {
  const [taskList, setTaskList] = useState([]);

  console.log(taskList);
  return (
    <div className="flex flex-col items-center justify-center py-12 gap-4">
      <h1 className="text-xl font-semibold">ToDo List</h1>
      <Input taskList={taskList} setTaskList={setTaskList}></Input>
      <div>
        {taskList.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </div>
    </div>
  );
}

export default App;
