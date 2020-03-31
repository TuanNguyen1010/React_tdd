import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div data-test='App'>
        Hello World

        <button data-type='button'>
        Increase temperature
        </button>
      </div>
    );
  }
}

export default App;
