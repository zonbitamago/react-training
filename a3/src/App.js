import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }
  render() {
    return (
      <div className="App">
        <h2>Hello React World!</h2>
        <input
          type="text"
          onChange={e => {
            this.setState({ text: e.target.value });
          }}
        />
        <br />
        表示箇所:{this.state.text}
      </div>
    );
  }
}

export default App;
