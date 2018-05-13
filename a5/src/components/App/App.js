import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./App.css";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Status from "../Status/Status";
import List from "../List/List";
import { STATUS } from "../../utils/Constants";

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
    return (
      <div className="App">
        <h2>React TODO App</h2>
        <Input
          value={this.state.input}
          change={this.changeInput}
          click={this.addToDo}
        />
        <Status ToDos={this.state.ToDos} />
        <List
          ToDos={this.state.ToDos}
          change={this.changeStatus}
          click={this.removeToDo}
        />
      </div>
    );
  }
}

App.propTypes = {};

App.defaultProps = {};

export default App;
