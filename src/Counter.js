import React, { Component } from "react";
import Button from "./Button";
import Label from "./Label";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.counter.value
    };
  }

  add = () => {
    let newValue = this.state.value;
    newValue++;
    this.setState({
      value: newValue
    });
  };

  minus = () => {
    let newValue = this.state.value;
    newValue--;
    this.setState({
      value: newValue
    });
  };

  render() {
    const { value } = this.state;
    const {counter:{name}} = this.props
    return (
      <div className="border border-warning rounded mb-3">
        <Label value={value} name={name} />
        <h1 className="big">{value}</h1>
        <Button classType="primary" handleClick={this.add}>
          +
        </Button>
        <Button classType="danger" handleClick={this.minus}>
          -
        </Button>
      </div>
    );
  }
}

export default Counter;
