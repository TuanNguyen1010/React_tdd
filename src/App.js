import React, { Component } from 'react';
import './App.css';
import Nav from './Nav/Nav'
import Home from './pages/home'
import Jotto from './pages/jotto'
import Counter from './pages/counter'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component {

  render() {
    return (
      <Router>
      <div data-test='App'>
              <Nav/> 
      </div>
      <Switch>
      <Route path='/' exact component={Home}></Route>
      <Route path='/counter' component={Counter}></Route>
      <Route path='/Jotto' component={Jotto}></Route>
      </Switch>
      </Router>
    );
  }
}

export default App;
