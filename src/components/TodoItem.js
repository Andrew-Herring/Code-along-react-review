import React from 'react'

export default class TodoItem extends React.Component {
  render() {
  return (
    <div className="todo-item">

      <input type="checkbox" 
      checked = {this.props.item.completed} 
      onChange={() => console.log("clicked")} />

      <p>{this.props.item.text}</p>
      
    </div>
  )
}
}

