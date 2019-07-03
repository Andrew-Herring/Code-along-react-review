import React from 'react'

// using state and conditional rendering to display a message

export default class TryLoggin extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: true
    }
  }
  render(){
    // declare a variable
    let wordDisplay
    // use this.state to use the above state.  Conditional statement to tell if a user is logged in or out
    if (this.state.isLoggedIn === true) {
      wordDisplay = "in"
    } else {
      wordDisplay = "out"
    }
    return (
      <div>
        {/* word display is a local variable, so you can call it without this.props */}
        <h1>You are logged {wordDisplay}</h1>
      </div>
    )
  }
  
}