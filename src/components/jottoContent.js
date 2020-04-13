import React, {Component} from 'react';
import GuessWords from './guessWords'
import Win from './win'
import Form from './form'
import { getSecretWord } from '../actions';
import {connect} from 'react-redux'

class Jotto extends Component {
  componentDidMount() {
    this.props.getSecretWord()
  }
  render() {
    return (
      <div data-test='Jotto-page'>
        <h2> This is Jotto</h2>
        <Win successReducer={false}/> 
        <Form/> 
        <GuessWords guessedWords={[]}/> 
      </div>
    );
}}
const mapStateToProps = (state) => {
  const {successReducer, guessedWordsReducer} = state
  return {successReducer, guessedWordsReducer}
}

export default connect(mapStateToProps, {getSecretWord})(Jotto);
  