import React, { Component } from "react";
import Label from './Label';
import Button from './Button';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.counter.value
    };
    this.add = this.add.bind(this);
    this.minus = this.minus.bind(this);
  }

  add() {
    this.setState(prevState => {
      return {
        value: prevState.value + 1
      };
    });
  }

  minus() {
    this.setState(prevState => {
      return {
        value: prevState.value - 1
      };
    });
  }

  render() {
    const {value} = this.state;
    const {counter:{name}} = this.props;
    return (
      <div className="border border-warning rounded center">
        <span className="badge badge-info">{name}</span>
        <Label value={value}/>
        <h1 className="big">{this.state.value}</h1>
        <Button classType="primary" clickHandler={this.add}>+</Button>
        <Button classType="danger" clickHandler={this.minus}>-</Button>
      </div>
    );
  }
}

export default Counter;
