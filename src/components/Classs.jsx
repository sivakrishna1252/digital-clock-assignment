import React from "react";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  increase = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div className="app">
        <h2>Class Example: Counter</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increase}>+ Increase</button>
      </div>
    );
  }
}

export default Counter;
