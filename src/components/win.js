import React, {Component} from 'react';
import PropTypes from 'prop-types';

const Win = (props) => {
  if (props.successReducer) {
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
  successReducer: PropTypes.bool.isRequired,
};

export default Win;