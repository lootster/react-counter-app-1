import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: [
        { id: 0, value: 0 },
        { id: 1, value: 0 },
        { id: 2, value: 5 },
        { id: 3, value: 6 }
      ]
    };
  }

  render() {
    const { counters } = this.state;
    return (
      <div className="App">
        {counters.map(counter => (
          <Counter key={counter.id} counter={counter} />
        ))}
      </div>
    );
  }
}

export default Counters;
