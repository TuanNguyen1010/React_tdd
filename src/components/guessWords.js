import React, {Component} from 'react';
import PropTypes from 'prop-types'

const GuessWords = (props) => {
  return <div data-test='guessing'> 
      <div data-test='guess_instructions'> Guess a five letter word</div>
  </div>
}

GuessWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
       guessedWord: PropTypes.string.isRequired ,
       letterMatch: PropTypes.number.isRequired
    })
  ).isRequired
}

export default GuessWords;