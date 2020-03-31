import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div data-test='App'>
        <h1 data-type='counterValue'> Current counter is </h1>
        Hello World

        <button data-type='button'>
        Increase temperature
        </button>
      </div>
    );
  }
}

export default App;
