import React from 'react'

import Navbar from './components/Header'
import TodoItem from './components/TodoItem'
import Footer from './components/Footer'
import Joke from './components/Joke'
import DataBank from './DataBank'

// import practice components here
import EventPractice from './components/EventHandlers'


// declares a class component, use export default in the same line to save yourself typing it at the bottom, creates and export in one go!
export default class App extends React.Component {
  // Only class based components can have state, initialize state with constructor, use super to access React.Component.  State is always an object.
  constructor(){
    super()
    this.state = {
      myList: DataBank
    }
  }
  render() {
    // iterate over items in the data base and call up your component with the props they need, this allows you to call from a data base to populate your dom 
    const todoItems = this.state.myList.map(item => <TodoItem item = {item} key = {item.id}/>)

    return(
      <div>
        <Navbar />
        <div className="todo-list">
          {todoItems}
          <hr />
          <Joke 
          question = "What's the best thing about Switzerland?"
          punchLine = "I don't know but the flag is a big plus" 
          />
          <EventPractice />
        </div> 
        <br/>
        <Footer />
      </div>
    )
  }
}

