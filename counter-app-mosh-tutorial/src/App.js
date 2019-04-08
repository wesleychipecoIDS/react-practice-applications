import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  // If you need to set the state directly, you can do it in the constructor
  // Constructor is only called once and best place to initialize properties in this class
  // props has to be passed as arguments to constructor() and super()
  constructor() {
    super();
    console.log("App - constructor");
  }

  componentDidMount() {
    console.log("App - mounted");
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters }); // or { counters } because key and value (variable) are the same name
  };

  totalCount() {
    let totalCounter = 0;
    for (const index in this.state.counters) {
      totalCounter += this.state.counters[index].value;
    }
    return totalCounter;
  }

  render() {
    console.log("App - rendered");

    return (
      <React.Fragment>
        <Navbar
          totalCount={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            key="counters"
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onReset={this.handleReset}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
