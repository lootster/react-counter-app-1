import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: [
        { id: 0, value: 1, name: 'Xi Fang' },
        { id: 1, value: 2, name: 'Brian' },
        { id: 2, value: 3, name: 'Calvin' },
        { id: 3, value: 4, name: 'Sebastian' },
        { id: 4, value: 5, name: 'Sheldon' },
        { id: 5, value: 6, name: 'Kai Xin' },
        { id: 6, value: 7, name: 'Delphine' },
        { id: 7, value: 8, name: 'Hui Min' },
        { id: 8, value: 9, name: 'Tim' },
        { id: 9, value: 2, name: 'Shun' },
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
