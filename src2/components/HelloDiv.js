import React, { Component } from "react";

import "../App.css";

class HelloDiv extends Component {
  render() {
    return (
      <div className="wrapper">
        <img
          src="http://www.petcathealth.info/wp-content/uploads/2014/05/cat-eyes.jpg"
          alt="img"
        />
        <h1>Hello Everyone</h1>
        <ul>
          <li>Cats</li>
          <li>Oranges</li>
          <li>Penguins</li>
        </ul>
      </div>
    );
  }
}

export default HelloDiv;
