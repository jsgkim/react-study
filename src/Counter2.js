import { Component } from "react";

class Counter2 extends Component {
  state = {
    number: 0,
  };
  render() {
    const { number } = this.state;
    return (
      <>
        <button
          onClick={() => {
            this.setState({ number: number - 10 });
          }}
        >
          -10
        </button>
        <h1>{number}</h1>
        <button
          onClick={() => {
            this.setState({ number: number + 10 });
          }}
        >
          +10
        </button>
        <br />
      </>
    );
  }
}

export default Counter2;
