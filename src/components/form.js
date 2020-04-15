import React, { Component } from "react";
import {connect} from 'react-redux'
import Jotto from "./jottoContent";
import {guessWord} from '../actions'

export class UnconnectedForm extends Component {
render() {
  const contents = this.props.successReducer ? null : 
  (
    <form >
      <input data-test='input' type="text" name='name'/> 
      <br></br>
      <input 
      onClick={() => this.props.guessWord()}
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