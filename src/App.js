import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "fxghj", name: "Tanisha", age: 21 },
      { id: "cvbnm", name: "Isha", age: 22 },
      { id: "asdf", name: "Mishi", age: 32 }
    ],
    showPersons: false
  };

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
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={this.deletePersonHandler.bind(this, index)}
                key={person.id}
                changed={event =>
                  this.nameChangedEventHandler(event, person.id)
                }
              />
            );
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <h1>hi im react app</h1>
        <p>This is working</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>

        {persons}
      </div>
    );
  }
}

export default App;
