import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Hello from "./Hello";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Hello world!</p>
          <Hello />
        </header>
      </div>
    );
  }
}

export default App;
