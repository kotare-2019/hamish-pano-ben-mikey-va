import React from 'react'
import Slider from './Slider'
import Instagram from './instagram'
import Facebook from './facebook'
import Twitter from './twitter'

const App = () => {
  return (
    <div>
        <div className="logo">  
        <ul className="social">
          <li><Instagram /></li>
          <li><Facebook /></li>
          <li><Twitter /></li>
        </ul>
      </div>
      <h1>Un-Beerable</h1>
      <h2>"for all the best bad beers"</h2>
      <h2>Choose a beer to rate</h2>
      <Slider />
  
    </div>
  )
}

export default App
