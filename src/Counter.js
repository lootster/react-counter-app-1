import React from "react";
import Button from "./Button";
import Label from "./Label";

const Counter = ({
  counter,
  counter: { name, value },
  deleteHandler,
  addHandler,
  minusHandler
}) => {
  console.log('Individual counter rendered')
  return (
    <div className="border border-warning rounded mb-3">
      <Label value={value} name={name} />
      <h1 className="big">{value}</h1>
      <Button classType="primary" handleClick={addHandler} counter={counter}>
        +
      </Button>
      <Button classType="danger" handleClick={minusHandler} counter={counter}>
        -
      </Button>
      <Button classType="danger" handleClick={deleteHandler} counter={counter}>
        Delete
      </Button>
    </div>
  );
};

export default Counter;
