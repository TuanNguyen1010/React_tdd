import React, {Component} from 'react';
import GuessWords from './guessWords'
import Win from './win'
import Form from './form'

function Jotto() {
    return (
      <div data-test='Jotto-page'>
        <h2> This is Jotto</h2>
        <Win win={false}/> 
        <Form/> 
        <GuessWords guessedWords={[]}/> 
      </div>
    );
  }

export default Jotto;
 