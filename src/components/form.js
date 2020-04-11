import React, { Component } from "react";
import {connect} from 'react-redux'
import Jotto from "./jottoContent";

class Form extends Component {

render() {
  const contents = this.props.sucess ? null : 
  (
    <form>
      <input data-test='input' type="text" name='name'/> 
      <br></br>
      <input data-test='submit' type="submit" value="Submit"></input>
    </form>
  )
  return(
    <div data-test='inputComponent'>
      {contents}
      </div>
  )
  }}
  const mapStateToProps = ({sucess}) => {
    return {sucess}
  }

  export default connect(mapStateToProps)(Form  );