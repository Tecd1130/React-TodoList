import React from "react";
import { TodoCheck, TodoText, DeleteButton } from "./index";

const TodoList = (props) => {
  return (
    <ul className="todo-list">
      {props.list.map((value, index) => {
        return (
          <li className="todo-item" key={index.toString()}>
            <TodoCheck listId={props.listId} onCheck={props.onCheck} />
            <TodoText value={value} />
            <DeleteButton index={props.index} deleteItems={props.deleteItems} />
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
