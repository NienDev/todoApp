import React from "react";

export default function ({
  task,
  index,
  isCompleted,
  addCompletedTask,
  deleteTask,
}) {
  return (
    <div className={`flex flex-row justify-between mb-2`}>
      <div className={`mt-2 ${isCompleted && "line-through"}`}>{task}</div>
      <div className="flex flex-row gap-2">
        <button
          id={index}
          onClick={(e) => {
            addCompletedTask(index);
          }}
        >
          Done
        </button>
        <button
          id={index}
          className=""
          onClick={(e) => {
            deleteTask(index);
          }}
        >
          X
        </button>
      </div>
    </div>
  );
}
