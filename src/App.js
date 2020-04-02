import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div data-test='App'>
        <h1 data-test='counter-value'> Current counter is </h1>
        <button data-test='increase-button'>
        Increase temperature
        </button>
      </div>
    );
  }
}

export default App;
