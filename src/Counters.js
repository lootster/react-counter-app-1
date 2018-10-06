import React from "react";
import Counter from "./Counter";
const Counters = ({ counters, deleteHandler, addHandler, minusHandler }) => {
  console.log('Counter list rendered');
  return (
    <div className="App">
      {counters.map(counter => (
        <Counter
          key={counter.id}
          counter={counter}
          deleteHandler={deleteHandler}
          addHandler={addHandler}
          minusHandler={minusHandler}
        />
      ))}
    </div>
  );
};
export default Counters;
