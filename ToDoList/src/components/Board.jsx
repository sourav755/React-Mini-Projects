const Board = ({ task, index, taskList, setTaskList }) => {
  const handleDelete = () => {
    let removeIndex = taskList.indexOf(task);
    taskList.splice(removeIndex, 1);
    console.log(removeIndex);
    setTaskList([
      (currentTasks) => currentTasks.filter((todo) => index === removeIndex),
    ]);
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center border">
        <p>{task}</p>
        <button
          className="bg-red-500 text-white rounded-lg py-1 px-2"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default Board;
