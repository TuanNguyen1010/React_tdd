import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state={
      counter: 0,
      error: true,
    }
  }

  render() {
    return (
      <div data-test='HomePage'>
          <h1> This is the Home page</h1>
      </div>
    );
  }
}

export default Home;
