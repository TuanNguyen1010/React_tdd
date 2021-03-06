import React, {Component} from 'react';
import PropTypes from 'prop-types'

const GuessWords = (props) => {
  let content
  if (props.guessedWordsReducer.length === 0) {
    content = (
      <span data-test='guess_instructions'> Guess the hidden 5 letter word word</span>
    )} 
    else {
      const guessedWordsRow = props.guessedWordsReducer.map((word, index) => (
         <tr data-tes='previous_guess' key={index}> 
           <td>{word.guessedWord}</td>
           <td> {word.letterMatchCount}</td>
          </tr>
      ))
      content = (  
      <div data-test='previous_guess'> 
      <span> Try another 5 letter word</span>
      <h3> Guessed</h3>
      <table> 
        <thead>
          <tr>
            <th> Guess</th>
            <th> Matching letters</th>
          </tr>
        </thead>
        <tbody> {guessedWordsRow}</tbody>
      </table>
      </div>
      )
    } 

  return <div data-test='guess_component'> 
  {content}
  </div>
}

GuessWords.propTypes = {
  guessedWordsReducer: PropTypes.arrayOf(
    PropTypes.shape({
       guessedWord: PropTypes.string.isRequired ,
       letterMatchCount: PropTypes.number.isRequired
    })
  ).isRequired
}

export default GuessWords;