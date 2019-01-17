import React, { Component } from "react";

import "./App.css";
import New from "./New";

class Hello extends Component {
  render() {
    return (
      <div className="wrapper">
        <p>Hello from this other thing</p>
        <New />
      </div>
    );
  }
}

export default Hello;
