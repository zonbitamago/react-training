import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="App">Hello React World!</div>;
  }
}

App.propTypes = {};

App.defaultProps = {};

export default App;
