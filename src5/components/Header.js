import React from "react";
import "../styles/Header.css";

const divStyle = {
  backgroundColor: "green"
};

function Header() {
  return (
    <header style={divStyle} className="header">
      <h1>Home</h1>
    </header>
  );
}

export default Header;
