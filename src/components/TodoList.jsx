import React from "react";
import { TodoCheck, TodoText, DeleteButton } from "./index";

const TodoList = (props) => {
  return (
    <ul className="todo-list">
      {props.list.map((value, id) => {
        return (
          <li className="todo-item" key={id.toString()}>
            <TodoCheck id={id} onCheck={props.onCheck} />
            <TodoText value={value} />
            <DeleteButton id={id} deleteItems={props.deleteItems} />
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
