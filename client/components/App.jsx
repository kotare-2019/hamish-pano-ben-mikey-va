import React from 'react'
import Slider from './Slider'
import Instagram from './instagram'
import Facebook from './facebook'
import Twitter from './twitter'

const App = () => {
  return (
    <div>
    <h1>Un-Beerable</h1>
    <h2>Choose a beer to rate</h2>
    <h2>"for all the best bad beers"</h2>
    <Slider />
    <Instagram />
    <Facebook />
    <Twitter />
    </div>
  )
}

export default App
