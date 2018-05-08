import React, { PureComponent } from 'react';

class Calculator extends PureComponent {
  constructor() {
    super()
    this.state = {
      input: "",
      done: "0"
    }
  }

  render() {
    const { input, done } = this.state

    return (
      <div className="viewport">
        <input type='text' value={input} />
        <div className="Buttons">
          {['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].map(val => this.renderNumbers(input, done, val))}
          {['+', '-', '*', '/'].map(val => this.renderButton(input, val))}
          <button onClick={() => this.setState({ input: eval(input), done: "1" })}>
            =
          </button>
          <button onClick={() => this.setState({ input: "" })}>
            clr
          </button>
        </div>
      </div>
    );
  }

  renderButton(input, val) {
    return (
      <button onClick={() => this.setState({ input: input + val, done: "0" })} >
        {val}
      </button>)
  }

  renderNumbers(input, done, val) {
    if (done === "0") {
      return (
        <button onClick={() => this.setState({ input: input + val })} >
          {val}
        </button>)
    }
    return (
      <button onClick={() => this.setState({ input: val, done: "0" })} >
        {val}
      </button>)
  }

}
export default Calculator;