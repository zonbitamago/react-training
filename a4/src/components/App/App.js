import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./App.css";

var STATUS = {
  NOT_YET: "未着手",
  DOING: "着手",
  DONE: "完了"
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      ToDos: []
    };
    this.changeInput = this.changeInput.bind(this);
    this.addToDo = this.addToDo.bind(this);
    this.removeToDo = this.removeToDo.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
  }

  changeInput(e) {
    this.setState({ input: e.target.value });
  }

  addToDo() {
    if (this.state.input == "") return;
    if (
      this.state.ToDos.filter(item => item.name === this.state.input).length > 0
    ) {
      alert("Registed!");
      return;
    }

    var pushToDos = this.state.ToDos;
    pushToDos.push({ name: this.state.input, status: STATUS.NOT_YET });
    this.setState({ ToDos: pushToDos });
    this.setState({ input: "" });
  }

  removeToDo(val) {
    var removedToDos = this.state.ToDos.filter(item => item.name != val);
    this.setState({ ToDos: removedToDos });
  }

  changeStatus(val, e) {
    this.setState({
      ToDos: this.state.ToDos.map(item => {
        if (item.name == val) {
          item.status = e.target.value;
          return item;
        } else {
          return item;
        }
      })
    });
  }

  render() {
    var ToDoList = this.state.ToDos.map((item, idx) => {
      return (
        <li>
          {item.name}
          <select
            value={item.status}
            onChange={this.changeStatus.bind(this, item.name)}
          >
            <option value={STATUS.NOT_YET}>{STATUS.NOT_YET}</option>
            <option value={STATUS.DOING}>{STATUS.DOING}</option>
            <option value={STATUS.DONE}>{STATUS.DONE}</option>
          </select>
          <button onClick={this.removeToDo.bind(this, item.name)}>
            Remove
          </button>
        </li>
      );
    });
    var ToDoCount = this.state.ToDos.length;
    var NotYetCount = this.state.ToDos.filter(
      item => item.status == STATUS.NOT_YET
    ).length;
    var DoingCount = this.state.ToDos.filter(
      item => item.status == STATUS.DOING
    ).length;
    var DoneCount = this.state.ToDos.filter(item => item.status == STATUS.DONE)
      .length;
    return (
      <div className="App">
        <h2>React TODO App</h2>
        <div className="Input">
          <div>New Task :</div>
          <input
            type="text"
            value={this.state.input}
            onChange={this.changeInput}
          />
          <button onClick={this.addToDo}>ADD!</button>
        </div>
        <div className="Status">
          <div>ToDo : {ToDoCount}</div>
          <div>
            {STATUS.NOT_YET} : {NotYetCount}
          </div>
          <div>
            {STATUS.DOING} : {DoingCount}
          </div>
          <div>
            {STATUS.DONE} : {DoneCount}
          </div>
        </div>
        <div className="List">
          <ul>{ToDoList}</ul>
        </div>
      </div>
    );
  }
}

App.propTypes = {};

App.defaultProps = {};

export default App;
