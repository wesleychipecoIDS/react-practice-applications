import React, { Component } from "react";

class Counter extends Component {
  /*
  state = {
    value: this.props.counter.value
  };
  */

  componentDidUpdate(prevProps, prevState) {
    console.log("prev props: ", prevProps);
    console.log("prev state: ", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      // Ajax call and get new data from the server
    }
  }

  componentWillUnmount() {
    console.log("counter - unmount");
  }

  // The state includes data that is local or private to the component. Other components cannot access this state
  // Props include data that we give to a component. PROPS ARE READ ONLY
  // State is only called once when an instance of the component is initialized

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? <h1>Zero</h1> : value;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  render() {
    console.log("Counter! - rendered");
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>{" "}
      </div>
    );
  }
}

export default Counter;
