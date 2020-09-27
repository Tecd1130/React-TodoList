import React, { useState } from "react";
import { TodoForm, TodoList } from "./components/index";
import "./assets/css/reset.css";
import "./assets/css/style.css";

const App = () => {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);
  const [listId, setListId] = useState(["0"]);

  const handleChange = (event) => {
    setItem(event.target.value);
  };

  const addItems = () => {
    if (item !== "") {
      const lastId = listId.slice(-1)[0];
      listId.push(lastId + 1);
      list.push(item);
      setListId(listId);
      setList(list);
      setItem("");
    }
  };

  const deleteItems = (i) => {
    const lastList = list.splice(i, 1);
    console.log(lastList);
    setList(list.splice(i, 1));
  };

  return (
    <section className="todo">
      <div className="inner">
        <h1 className="todo-title">Todo List</h1>
        <TodoForm item={item} addItems={addItems} handleChange={handleChange} />
        <TodoList listId={listId} list={list} deleteItems={deleteItems} />
      </div>
    </section>
  );
};

export default App;
