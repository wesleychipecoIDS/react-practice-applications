import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    console.log("Counters - rendered");
    // Object deconstructuring
    const { onReset, onDelete, onIncrement, counters } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          /> // Attributes here are passed to component as props ("props" object) // Children are passed as specific object in props object // Key is not able to be passed
        ))}
      </div> // Because value and id are in the counter state object, you can just pass the counter object itself (the one that's the input argument)
    );
  }
}

export default Counters;
