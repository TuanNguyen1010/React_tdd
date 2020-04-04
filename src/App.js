import React, { Component } from 'react';
import './App.css';
import Nav from './Nav/Nav'
import CounterPage from './pages/counter'
import Home from './pages/home'
import HomeContent from './components/homeContent'
import CounterContent from './components/counterContent'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
      <Router>
      <div data-test='App'>
              <Nav/> 
      </div>
      <Switch>
      <Route path='/' exact component={HomeContent}></Route>
      <Route path='/counter' component={CounterContent}></Route>
      </Switch>
      </Router>
    );
  }
}

export default App;
