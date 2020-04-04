import React, {Component} from 'react';

export default (props) =>{
  if (props.win) {
  return (
  <div data-test='win-component'> </div>
  )
  } else {
    return (
      <h1 data-test='win-component'> error</h1>
    )
  }
};
