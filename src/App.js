import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [{ name: "Tanisha", age: 21 }, { name: "Isha", age: 22 }],
    showPersons: false
  };

  switchNameHandler = newName => {
    // console.log("clickes");
    this.setState({
      persons: [{ name: newName, age: 21 }, { name: "Isha", age: 29 }]
    });
  };

  nameChangedEventHandler = e => {
    this.setState({
      persons: [{ name: "Tanisha", age: 21 }, { name: e.target.value, age: 29 }]
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
    return (
      <div className="App">
        <h1>hi im react app</h1>
        <p>This is working</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {this.state.showPersons === true ? (
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
            />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, "Himmu")}
              changed={this.nameChangedEventHandler}
            >
              My hobbie is plating
            </Person>
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
