import React, { PureComponent } from 'react';

class Calculator extends PureComponent {
  constructor() {
    super()
    this.state = {
      input: ""
    }
  }

  render() {
    const { input } = this.state

    return (
      <div className="viewport">
        <input type='text' value={input} />
        <div className="Buttons">
          {['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/'].map(val => this.renderButton(input, val))}
          <button onClick={() => this.setState({ input: eval(input) })}>
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
      <button onClick={() => this.setState({ input: input + val })} >
        {val}
      </button>)
  }

}
export default Calculator;