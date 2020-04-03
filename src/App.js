import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      counter: 0,
      error: true,
    }
    this.decreaseCounter = this.decreaseCounter.bind(this)
    this.increaseCounter = this.increaseCounter.bind(this)
  }
  
  decreaseCounter() {
    if (this.state.counter > 0)
    this.setState({ counter: this.state.counter - 1})
    else
    // this.setState({error: true})
    this.setState({ error: false })
    console.log('testing')
    console.log(this.state.error)
    // this.setState({ showing: !showing })
  }

  increaseCounter() {
    this.setState({error: true})
    this.setState({ counter: this.state.counter + 1})
    console.log(this.state.error)
  }

  render() {
    const errorClass = this.state.error
    return (
      <div data-test='App'>
        <h1 data-test='counter-value'> 
        Current counter is {this.state.counter}
        </h1>

        <div data-test='error-message' 
        style={{ display: (errorClass ? 'none' : 'block')}}
        > 
        Error, can't go below 0 
        </div>
        <button 
        data-test='increase-button'
        onClick={this.increaseCounter}
        >
        Increase temperature
        </button>
        <button 
        data-test='decrease-button'
        onClick={this.decreaseCounter}
        >
        Decrease temperature
        </button>
      </div>
    );
  }
}

export default App;
