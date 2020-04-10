import React, { Component } from "react";

class Form extends Component {

render() {

  return(
    <div data-test='input'>
      <form>
      <input type="text" name='name'/> 
      <br></br>
      <input type="submit" value="Submit"></input>
      </form>
      </div>
  )
  }}

  export default Form;