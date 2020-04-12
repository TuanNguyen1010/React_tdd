import React, {Component} from 'react';
import PropTypes from 'prop-types';

const Win = (props) => {
  if (props.success) {
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
  success: PropTypes.bool.isRequired,
};

export default Win;