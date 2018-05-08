import React, { PureComponent } from 'react';

class Calculator extends PureComponent {
  constructor() {
    super()
    this.state = {
      input: "zf"
    }
  }

  render() {
    const { input } = this.state

    return (
      <div className="Device">
        <input type='text' value={input} />
        <div className="Buttons">
          <button onClick={() => this.setState({ input: "" })}>
            clr
          </button>
        </div>
      </div>
    );
  }

}
export default Calculator;