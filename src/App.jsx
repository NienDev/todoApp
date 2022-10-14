import { useState, useRef } from "react";
import Item from "./components/Item";
function App() {
  const [list, setList] = useState([]);
  const [task, setTask] = useState("");
  const [doneTask, setDoneTask] = useState([]);

  const addNewTask = () => {
    const newTask = {
      id: list.length === 0 ? 1 : list[list.length - 1].id + 1,
      title: task,
      isCompleted: false,
    };
    setList((prevList) => [...prevList, newTask]);
    setTask("");
  };

  const deleteTask = (id) => {
    setList((list) => list.filter((item) => item.id != id));
  };

  const addCompletedTask = (id) => {
    // const delTask = list.filter((item, index) => index == id);
    console.log(id);
    setList((list) =>
      list.map((item) =>
        item.id === id ? { ...item, isCompleted: true } : item
      )
    );
    // deleteTask(id);
    // setDoneTask((prevTasks) => [...prevTasks, delTask]);
  };
  console.log(list);
  return (
    <div className="min-w-[480px] border-4 p-8 rounded-xl border-emerald-300">
      <h1 className="text-center mb-4">Todo App</h1>
      <div className="flex flex-row justify-between gap-8">
        <input
          type="text"
          className="rounded-md w-full px-4"
          onChange={(e) => setTask(e.target.value)}
          value={task}
          onKeyDown={(e) => {
            if (e.key === "Enter") addNewTask();
          }}
        />
        <button onClick={() => addNewTask()}>Add</button>
      </div>
      <div className="mt-8">
        {list.map((task) => (
          <Item
            key={task.id}
            task={task.title}
            index={task.id}
            addCompletedTask={addCompletedTask}
            deleteTask={deleteTask}
            isCompleted={task.isCompleted}
          />
        ))}
      </div>
      {
        <div>
          {doneTask.length > 0 && (
            <h2 className="mb-4 mt-4">Completed Task:</h2>
          )}
          <div className="">
            {doneTask.map((task, i) => (
              <div className="mt-2" key={i}>
                {task}
              </div>
            ))}
          </div>
        </div>
      }
    </div>
  );
}

export default App;
