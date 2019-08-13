import React, { Component } from "react";
import withClass from "../../../higherorder/withClass";
import classes from "./Person.css";
import Aux from "../../../higherorder/Auxilary";
import PropTypes from "prop-types";
class Person extends Component {
  constructor(props) {
    super(props);
    console.log("[Person.js] inside constructor", props);
  }
  componentWillMount() {
    console.log("[Person.js] inside componentWillMount()");
  }

  componentDidMount() {
    console.log("[Person.js] inside componentDidMount()");
    if (this.props.position === 0) {
      this.inputElement.focus();
    }
  }
  render() {
    console.log("[Person.js]  inside render()");
    return (
      <Aux>
        <p onClick={this.props.click}>
          im a person.My name is {this.props.name}.I'm {this.props.age} year old
        </p>
        <p>{this.props.children}</p>
        <input
          ref={inp => {
            this.inputElement = inp;
          }}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}
Person.propTypes = {
  click: PropTypes.func,
  age: PropTypes.string,
  name: PropTypes.number,
  changed: PropTypes.func
};
export default withClass(Person, classes.Person);
