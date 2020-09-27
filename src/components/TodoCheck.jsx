import React from "react";

const TodoCheck = (props) => {
  return (
    <div className="todo-check">
      <input type="checkbox" id={props.listId} />
      <label htmlFor={props.listId} onClick={props.onCheck}></label>
    </div>
  );
};

export default TodoCheck;
