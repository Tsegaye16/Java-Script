import { Component } from "react";
class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
    //this.increment = this.increment.bind(this);
  }
  increment = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render() {
    return (
      <div>
        <h1>Counter: {this.state.counter}</h1>
        <button onClick={this.increment}>Inc</button>
      </div>
    );
  }
}
export default Counter;
