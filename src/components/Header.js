import React from 'react'

export default class Header extends React.Component {
  render() {
    
  const date = new Date()
  const hours = date.getHours()
  let timeOfDay
  const styles = {
    fontSize: 30
  }

  if (hours < 12) {
    timeOfDay = 'Morning'
    styles.color = "#06F1F9"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "Afternoon"
    styles.color = "#F98006"
  } else {
    timeOfDay = "Evening"
    styles.color = "#9806F9"
  }

  return (
    <div>
    <header style={styles} className="navbar">Good {timeOfDay}!</header>
    </div>
  )
}
}

