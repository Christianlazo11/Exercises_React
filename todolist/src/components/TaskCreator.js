import React from "react";
import { useState } from "react";

const TaskCreator = (props) => {
  const [newTaskName, setNewTaskName] = useState("");

  const createNewTask = () => {
    props.createNew(newTaskName);
    setNewTaskName("");
  };
  return (
    <div className="my-1">
      <input
        type="text"
        className="form-control"
        value={newTaskName}
        onChange={(e) => {
          setNewTaskName(e.target.value);
        }}
      />
      <button className="btn btn-primary mt-1" onClick={createNewTask}>
        Add
      </button>
    </div>
  );
};

export default TaskCreator;
