import React, { Component } from "react";
import Label from "./Label";
import Button from "./Button";

class Counter extends Component {
  render() {
    const {
      counter,
      counter: { name, value },
      onDelete,
      onAdd,
      onMinus
    } = this.props;
    return (
      <div className="border border-warning rounded center">
        <span className="badge badge-info">{name}</span>
        <Label value={value} />
        <h1 className="big">{value}</h1>
        <Button classType="primary" onAdd={onAdd} counter={counter}>
          +
        </Button>
        <Button classType="danger" onMinus={onMinus} counter={counter}>
          -
        </Button>
        <Button classType="danger" onDelete={onDelete} counter={counter}>
          Delete
        </Button>
      </div>
    );
  }
}

export default Counter;
