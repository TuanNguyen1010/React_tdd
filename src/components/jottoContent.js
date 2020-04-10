import React, {Component} from 'react';
import GuessWords from './guessWords'
import Win from './win'

function Jotto() {
    return (
      <div data-test='Jotto-page'>
        <h2> This is Jotto</h2>
        <Win win={false}/> 
        <GuessWords guessedWords={[{guessedWord:'hello', letterMatch:2}]}/> 
      </div>
    );
  }

export default Jotto;
 