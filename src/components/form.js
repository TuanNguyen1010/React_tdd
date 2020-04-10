import React, { Component } from "react";
import {connect, MapStateToProps} from 'react-redux'
import Jotto from "./jottoContent";

class Form extends Component {

render() {

  return(
    <div data-test='inputComponent'>
      <form>
      <input data-test='input' type="text" name='name'/> 
      <br></br>
      <input data-test='submit' type="submit" value="Submit"></input>
      </form>
      </div>
  )
  }}
  const mapStateToProps = (state) => {
    return {}
  }

  export default connect(mapStateToProps)(Form  );