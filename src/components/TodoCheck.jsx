import React from "react";

const TodoCheck = (props) => {
  return (
    <div className="todo-check">
      <input type="checkbox" id={props.id} />
      <label htmlFor={props.id} onClick={props.onCheck}></label>
    </div>
  );
};

export default TodoCheck;
