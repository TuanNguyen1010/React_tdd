import React, {Component} from 'react';
import GuessWords from './guessWords'
import Win from './win'
import Form from './form'
import { getSecretWord } from '../actions';
import {connect} from 'react-redux'

export class Jotto extends Component {
  componentDidMount() {
    this.props.getSecretWord()
  }
  render() {
    return (
      <div data-test='Jotto-page'>
        <h2> This is Jotto</h2>
        <Win successReducer={this.props.successReducer}/> 
        <Form/> 
        <GuessWords guessedWordsReducer={this.props.guessedWordsReducer}/> 
      </div>
    );
}}
const mapStateToProps = (state) => {
  const {successReducer, guessedWordsReducer, secretWordReducer } = state
  return {successReducer, guessedWordsReducer, secretWordReducer}
}

export default connect(mapStateToProps, {getSecretWord})(Jotto);
  