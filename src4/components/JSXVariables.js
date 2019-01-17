import React from "react";

const name = "Ry";

const noVowel = str => {
  //
  let newArr = str.split("");
  let noVowelArr = [];

  newArr.forEach(element => {
    if (
      element.toLowerCase() === "a" ||
      element.toLowerCase() === "e" ||
      element.toLowerCase() === "i" ||
      element.toLowerCase() === "o" ||
      element.toLowerCase() === "u" ||
      element.toLowerCase() === "y"
    ) {
      // do nothing
    } else {
      noVowelArr.push(element);
    }
  });

  let newName = noVowelArr.join("");
  return newName;
};

function JSXVariables() {
  return (
    <div className="main-container">
      <div className="container">
        <div className="jumbotron">
          <h1>Hi! My name is {name}</h1>
          <h2>My name has {name.length} letters</h2>
          <h2>I think React is pretty cool</h2>
          <h2>My name without vowels is: {noVowel(name)}</h2>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
