import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: [
        { id: 0, value: 0, name: 'Timothy'},
        { id: 1, value: 0, name: 'Calvin' },
        { id: 2, value: 0, name: 'Brian'},
        { id: 3, value: 0, name: 'Shun' },
        { id: 4, value: 0, name: 'Kai Xin'},
        { id: 5, value: 0, name: 'Hui Min'},
        { id: 6, value: 0, name: 'Delph'},
        { id: 7, value: 0, name: 'Sebastian'},
        { id: 8, value: 0, name: 'Xin Fang'},
        { id: 9, value: 0, name: 'Sheldon'}
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
