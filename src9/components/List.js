import React from "react";

function List(props) {
  const newArr = props.groceries.filter(e => e.purchased === false);
  return (
    <ul className="list-group">
      Using the map method, render one li element displaying the text property
      of each grocery object.
      {/* {props.groceries.map(e => (
        <li key={e.id}>{e.name}</li>
      ))} */}
      {newArr.map(e => (
        <li key={e.id}>{e.name}</li>
      ))}
    </ul>
  );
}

export default List;
