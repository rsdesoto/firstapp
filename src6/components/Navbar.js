import React from "react";
import "../styles/Navbar.css";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

const divStyle = {
  backgroundColor: "green",
  display: "flex",
  justifyContent: "flex-end"
};

function Navbar() {
  return (
    <nav style={divStyle} className="navbar">
      <a href="/">Welcome</a>
    </nav>
  );
}

export default Navbar;
