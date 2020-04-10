import React, {Component} from 'react';
import PropTypes from 'prop-types';

const Win = (props) => {
  if (props.win) {
  return (
  <div data-test='win-component'> congratulations you win</div>
  )
  } else {
    return (
      <h1 data-test='win-component'> Game still on-going </h1>
    )
  }
};

Win.propTypes = {
  win: PropTypes.bool.isRequired,
};

export default Win;