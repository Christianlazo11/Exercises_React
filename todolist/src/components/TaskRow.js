import React from "react";

const TaskRow = (props) => {
  return (
    <tr>
      <td>{props.task.name}</td>
      <td>
        <input
          type="checkbox"
          checked={props.task.done}
          onChange={() => {
            props.toggleTask(props.task);
          }}
        />
      </td>
    </tr>
  );
};

export default TaskRow;
