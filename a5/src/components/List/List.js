import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./List.css";
import Button from "../Button/Button";
import { STATUS } from "../../utils/Constants";

class List extends Component {
  constructor(props) {
    super(props);
  }

  removeToDo(val) {
    this.props.click(val);
  }

  changeStatus(val, e) {
    this.props.change(val, e);
  }

  render() {
    var ToDoList = this.props.ToDos.map((item, idx) => {
      return (
        <li>
          ・
          {item.name}
          <select
            value={item.status}
            onChange={this.changeStatus.bind(this, item.name)}
          >
            <option value={STATUS.NOT_YET}>{STATUS.NOT_YET}</option>
            <option value={STATUS.DOING}>{STATUS.DOING}</option>
            <option value={STATUS.DONE}>{STATUS.DONE}</option>
          </select>
          <Button click={this.removeToDo.bind(this, item.name)}>Remove</Button>
        </li>
      );
    });
    return (
      <div className="List">
        <ul>{ToDoList}</ul>
      </div>
    );
  }
}

List.propTypes = {
  ToDos: PropTypes.array.isRequired,
  change: PropTypes.func.isRequired,
  click: PropTypes.func.isRequired
};

List.defaultProps = {};

export default List;
