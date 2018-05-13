import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Status.css";
import { STATUS } from "../../utils/Constants";

class Status extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var ToDoCount = this.props.ToDos.length;
    var NotYetCount = this.props.ToDos.filter(
      item => item.status == STATUS.NOT_YET
    ).length;
    var DoingCount = this.props.ToDos.filter(
      item => item.status == STATUS.DOING
    ).length;
    var DoneCount = this.props.ToDos.filter(item => item.status == STATUS.DONE)
      .length;

    return (
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
    );
  }
}

Status.propTypes = { ToDos: PropTypes.array.isRequired };

Status.defaultProps = {};

export default Status;
