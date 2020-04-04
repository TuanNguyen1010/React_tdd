import React, {Component} from 'react';
import PropTypes from 'prop-types';

const Win = (props) =>{
  if (props.win) {
  return (
  <div data-test='win-component'> Win condition</div>
  )
  } else {
    return (
      <h1 data-test='win-component'> error</h1>
    )
  }
};

export default Win;