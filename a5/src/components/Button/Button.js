import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Button.css";

class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Button">
        <button onClick={this.props.click}>{this.props.children}</button>
      </div>
    );
  }
}

Button.propTypes = { click: PropTypes.func.isRequired };

Button.defaultProps = {};

export default Button;
