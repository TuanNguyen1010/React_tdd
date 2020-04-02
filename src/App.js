import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      counter: 0
    }
  }
  
  render() {
    return (
      <div data-test='App'>
        <h1 data-test='counter-value'> Current counter is {this.state.counter}</h1>
        <button 
        data-test='increase-button'
        onClick={() => {this.setState({ counter: this.state.counter + 1})}}
        >
        Increase temperature
        </button>
        <button 
        onClick={() => {this.setState({counter: this.state.counter-1})}}
        data-test='decrease-button'
        >
        Decrease temperature
        </button>
      </div>
    );
  }
}

export default App;
