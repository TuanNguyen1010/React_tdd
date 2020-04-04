import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Nav() {
  return (
    <nav> 
      <h3> Tuan Logo's</h3>
      <Link to='/'> React TDD</Link>
      <ul className='nav-links'> 
      <Link to='/counter'> Counter Game</Link>
        <li> Lotto game</li>
      </ul>
    </nav>
  )
}

export default Nav