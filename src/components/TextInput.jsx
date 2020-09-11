import React from "react";

const TextInput = (props) => {
  return (
    <input
      className="todo-input"
      type="text"
      value={props.item}
      placeholder="タスクを入力してください"
      onChange={props.handleChange}
    />
  );
};

export default TextInput;
