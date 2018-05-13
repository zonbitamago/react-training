import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Input.css";
import Button from "../Button/Button";

class Input extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Input">
        <div>New Task :</div>
        <input
          type="text"
          value={this.props.value}
          onChange={this.props.change}
        />
        <Button click={this.props.click}>ADD!</Button>
      </div>
    );
  }
}

Input.propTypes = {
  value: PropTypes.object.isRequired,
  change: PropTypes.func.isRequired
};

Input.defaultProps = {};

export default Input;
