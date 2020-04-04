import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Nav() {
  return (
    <nav> 
      <h3> Tuan Logo's</h3>
      <Link to='/'> React TDD</Link>
      <ul className='nav-links'> 
      <Link to='/counter'> Counter</Link>
      <Link to='/Jotto'> Jotto</Link>
      </ul>
    </nav>
  )
}

export default Nav