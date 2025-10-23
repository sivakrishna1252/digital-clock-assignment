import React from "react";

class User extends React.Component {
  constructor() {
    super();
    this.state = {
      user: { name: "Shiva", age: 21, city: "Vijayawada" },
    };
  }

  updateAge = () => {
    this.setState({
      user: { ...this.state.user, age: 22 }, 
    });
  };

  render() {
    const { name, age, city } = this.state.user;

    return (
      <div className="app">
        <h2>Spread Operator Example</h2>
        <p>
          Name: {name} <br />
          Age: {age} <br />
          City: {city}
        </p>
        <button onClick={this.updateAge}>Update Age</button>
      </div>
    );
  }
}

export default User;
