import React, { Component } from "react";
import classes from "./App.css";
import Cockpit from "../components/Cockpit/Cockpit";
import Persons from "../components/Persons/Persons";
import withClass from "../higherorder/withClass";
import Aux from "../higherorder/Auxilary";
class App extends Component {
  constructor(props) {
    super(props);
    console.log("App.js inside constructor", props);
    this.state = {
      persons: [
        { id: "fxghj", name: "Tanisha", age: 21 },
        { id: "cvbnm", name: "Isha", age: 22 },
        { id: "asdf", name: "Mishi", age: 32 }
      ],
      showPersons: false
    };
  }
  componentWillMount() {
    console.log("in app.js inside componentWillMount()");
  }

  componentDidMount() {
    console.log("in app.js inside componentDidMount()");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "[UPDATE App.js] inside   shouldComponentUpdate()",
      nextProps,
      nextState
    );
    return (
      nextState.showPersons !== this.state.showPersons ||
      nextState.persons !== this.state.persons
    );
  }
  componentWillUpdate(nextProps, nextState) {
    console.log(
      "[UPDATE App.js] inside componentWillUpdate()",
      nextProps,
      nextState
    );
  }

  componentDidUpdate() {
    console.log("[UPDATE App.js] inside componentDidUpdate()");
  }

  // state = {
  //   persons: [
  //     { id: "fxghj", name: "Tanisha", age: 21 },
  //     { id: "cvbnm", name: "Isha", age: 22 },
  //     { id: "asdf", name: "Mishi", age: 32 }
  //   ],
  //   showPersons: false
  // };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  };

  nameChangedEventHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  };

  render() {
    console.log("in app.js inside render()");
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedEventHandler}
          />
        </div>
      );
    }

    return (
      <Aux>
        <button
          onClick={() => {
            this.setState({ showPersons: true });
          }}
        >
          Show Persons
        </button>
        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
