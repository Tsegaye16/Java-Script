import { Component } from "react";
class ClassEvent extends Component {
  handleClick() {
    console.log("Gonna to me");
  }
  render() {
    return (
      <div>
        <h3>This is class event handler</h3>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}
export default ClassEvent;
