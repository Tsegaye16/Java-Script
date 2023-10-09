import React, { Component } from "react";

class Increment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  handle() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  render() {
    return (
      <div>
        <div>Increment: {this.state.count}</div>
        <button onClick={() => this.handle()}>Go</button>;
      </div>
    );
  }
}

export default Increment;
