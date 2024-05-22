import { useState } from "react";
import Input from "./components/Input";
import Board from "./components/Board";

function App() {
  const [taskList, setTaskList] = useState([]);

  console.log(taskList);
  return (
    <>
      <div className="px-12">
        <div className="flex flex-col items-center justify-center py-12 gap-4">
          <h1 className="text-xl font-semibold">ToDo List</h1>
          <Input taskList={taskList} setTaskList={setTaskList}></Input>
        </div>
        <div className="grid grid-cols-3 px-4 lg:px-12 gap-10">
          {taskList.map((task, index) => (
            <Board
              key={index}
              index={index}
              task={task}
              taskList={taskList}
              setTaskList={setTaskList}
            ></Board>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
