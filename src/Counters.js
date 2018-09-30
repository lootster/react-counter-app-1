import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: [
        { id: 0, value: 1, name: "Xi Fang" },
        { id: 1, value: 2, name: "Brian" },
        { id: 2, value: 3, name: "Calvin" },
        { id: 3, value: 4, name: "Sebastian" },
        { id: 4, value: 5, name: "Sheldon" },
        { id: 5, value: 6, name: "Kai Xin" },
        { id: 6, value: 7, name: "Delphine" },
        { id: 7, value: 8, name: "Hui Min" },
        { id: 8, value: 9, name: "Tim" },
        { id: 9, value: 2, name: "Shun" }
      ]
    };
  }

  add(counter) {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({
      counters
    });
  }

  minus(counter) {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({
      counters
    });
  }

  delete(id) {
    console.log("Event handler called");
    const filteredCounters = this.state.counters.filter(
      counter => counter.id !== id
    );
    this.setState({
      counters: filteredCounters
    });
  }

  handleReset() {
    const counters = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    });

    this.setState({ counters });
  }

  render() {
    const { counters } = this.state;
    return (
      <React.Fragment>
        <button
          onClick={this.handleReset.bind(this)}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        <div className="App">
          {counters.map(counter => (
            <Counter
              key={counter.id}
              counter={counter}
              onDelete={this.delete.bind(this)}
              onAdd={this.add.bind(this)}
              onMinus={this.minus.bind(this)}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Counters;
