import React, { Component } from "react";
import "./App.css";
import Counters from "./Counters";
import NavBar from "./NavBar";
import Gif from "./Gif";

class App extends Component {
  constructor(props) {
    console.log('Constructor');
    super(props);
    this.state = {
      counters: [
        { id: 0, value: 5, name: "Timothy" },
        { id: 1, value: 3, name: "Calvin" },
        { id: 2, value: 2, name: "Brian" },
        { id: 3, value: 6, name: "Shun" },
        { id: 4, value: -1, name: "Kai Xin" },
        { id: 5, value: 0, name: "Hui Min" },
        { id: 6, value: -6, name: "Delph" },
        { id: 7, value: 4, name: "Sebastian" },
        { id: 8, value: 7, name: "Xin Fang" },
        { id: 9, value: -4, name: "Sheldon" }
      ]
    };
  }

  componentDidMount(){
    console.log('Component did mount')
  }

  delete = id => {
    const { counters } = this.state;
    const updatedCounterList = counters.filter(counter => counter.id !== id);
    this.setState({
      counters: updatedCounterList
    });
  };

  add = counter => {
    const { counters } = this.state;
    const updatedTodoListWithIncrement = [...counters];

    const index = updatedTodoListWithIncrement.indexOf(counter)
    updatedTodoListWithIncrement[index].value++;

    this.setState({
      counters: updatedTodoListWithIncrement
    });
  };

  minus = counter => {
    const { counters } = this.state;
    const updatedTodoListWithIncrement = [...counters];

    const index = updatedTodoListWithIncrement.indexOf(counter)
    updatedTodoListWithIncrement[index].value--;

    this.setState({
      counters: updatedTodoListWithIncrement
    });
  };

  reset = () => {
    const resetValueCounter = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    });

    this.setState({
      counters: resetValueCounter
    });
  };

  render() {
    console.log('App - Component rendered')
    const { counters } = this.state;
    return (
      <React.Fragment>
        <NavBar number={counters.length} />
        <div className="center">
          <h1 className="big">Jumpstarter Counters</h1>
          <button onClick={this.reset} className="btn btn-primary">
            Reset
          </button>
          <Counters
            counters={counters}
            deleteHandler={this.delete}
            addHandler={this.add}
            minusHandler={this.minus}
          />
          <Gif />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
