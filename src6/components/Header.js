import React from "react";
import "../styles/Header.css";

// By importing the Header.css file, it is added to the DOM whenever this component loads

const divStyle = {
  backgroundColor: "red"
};

const h1Style = {
  fontSize: "100px"
};

function Header() {
  return (
    <header style={divStyle} className="header">
      <h1 style={h1Style}>Welcome</h1>
    </header>
  );
}

export default Header;
