import React from "react";
import { TodoForm, TodoList } from "./components/index";
import "./assets/css/reset.css";
import "./assets/css/style.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "",
      list: [],
      open: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.addItems = this.addItems.bind(this);
    this.deleteItems = this.deleteItems.bind(this);
  }

  handleChange = (event) => {
    this.setState({
      item: event.target.value,
    });
  };

  addItems = () => {
    const item = this.state.item;
    const list = this.state.list;
    list.push(item);
    this.setState({
      list: list,
      item: "",
    });
  };

  deleteItems = (i) => {
    const list = this.state.list;
    list.splice(i, 1);
    this.setState({
      list: list,
    });
  };

  render() {
    return (
      <section className="todo">
        <div className="inner">
          <h1 className="todo-title">Todo List</h1>
          <TodoForm
            item={this.state.item}
            addItems={this.addItems}
            handleChange={this.handleChange}
          />
          <TodoList list={this.state.list} deleteItems={this.deleteItems} />
        </div>
      </section>
    );
  }
}
