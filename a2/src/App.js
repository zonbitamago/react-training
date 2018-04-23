import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true
    };
  }
  render() {
    return (
      <div className="App">
        <h2 className={this.state.isShow ? "show" : "hide"}>
          Hello React World!
        </h2>
        <button
          type="button"
          name="display"
          onClick={() => {
            this.setState({ isShow: !this.state.isShow });
          }}>
          {this.state.isShow ? "hide" : "show"}
        </button>
      </div>
    );
  }
}

export default App;
