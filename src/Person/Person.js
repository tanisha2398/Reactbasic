import React from "react";
import "./Person.css";
const Person = props => {
  return (
    <div className="Person">
      <p onClick={props.click}>
        im a person.My name is {props.name}.I'm {props.age} year old
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Person;
