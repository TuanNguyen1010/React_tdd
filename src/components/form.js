import React, { Component } from "react";
import {connect} from 'react-redux'
import Jotto from "./jottoContent";
import {guessWord} from '../actions'

export class UnconnectedForm extends Component {
  constructor(props){
  super(props)
  this.state = {
    currentGuess: ''
  }
  }

  submitCurrentGuess(e){
    e.preventDefault()
    this.props.guessWord(this.state.currentGuess)
  }
render() {
  const contents = this.props.successReducer ? null : 
  (
    <form >
      <input data-test='input' type="text"
      onChange={(e) => this.setState({currentGuess: e.target.value})}/> 
      <br></br>
      <input 
      onClick={(e) => this.submitCurrentGuess(e)}
      data-test='submit' 
      type="submit" 
      ></input>
    </form>
  )
  return(
    <div data-test='inputComponent'>
      {contents}
      </div>
  )
  }}
  const mapStateToProps = ({successReducer}) => {
    return {successReducer}
  }

  export default connect(mapStateToProps, {guessWord})(UnconnectedForm  );