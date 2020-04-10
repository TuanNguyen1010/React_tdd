import React, {Component} from 'react';
import PropTypes from 'prop-types'

const GuessWords = (props) => {
  let content

  if (props.guessedWords.length === 0) {
    content = (
      <span data-test='guess_instructions'> Guess the hidden 5 letter word word</span>
    )} 
    else {
      const guessedWordsRow = props.guessedWords.map((word, index) => (
         <tr data-tes='previous_guess' key={index}> 
           <td>{word.guessedWord}</td>
           <td> {word.letterMatch}</td>
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
        <td> {guessedWordsRow}</td>
      </table>
      </div>
      )
    } 

  return <div data-test='guess_component'> 
  {content}
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