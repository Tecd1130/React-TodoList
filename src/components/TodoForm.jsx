import React from "react";
import { TextInput, AddButton } from "./index";

const TodoForm = (props) => {
  return (
    <div className="todo-form">
      <TextInput item={props.item} handleChange={props.handleChange} />
      <AddButton addItems={props.addItems} />
    </div>
  );
};

export default TodoForm;
