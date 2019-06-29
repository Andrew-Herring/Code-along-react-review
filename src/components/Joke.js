import React from 'react'

export default class Joke extends React.Component {
  render() {
  return (
    <div>
     <h5 style={{display: this.props.question ? "block" : "none"}}>Question: {this.props.question}</h5>
     <h5>Answer: {this.props.punchLine}</h5>
    </div>
  )
}
}

