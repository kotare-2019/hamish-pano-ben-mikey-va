import React from 'react'
import Slider from './Slider'
import Instagram from './instagram'
import Facebook from './facebook'
import Twitter from './twitter'
import { getBeers } from '../api/api'


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  handleClick() {
    getBeers()
  }

  render() {
    return (
      <React.Fragment>
<<<<<<< HEAD
        <div className="logo">  
        <ul className="social">
          <li><Instagram /></li>
          <li><Facebook /></li>
          <li><Twitter /></li>
        </ul>
      </div>
      <h1>Un-Beerable</h1>
      <h2>"for all the best bad beers"</h2><br/>
      <h2>Choose a beer to rate</h2>
      <Slider />
  
||||||| merged common ancestors
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
  
=======
        <a href="#" onClick={this.handleClick}>Click this bitch</a>

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

>>>>>>> f2245646e86fa7b9c02725174460b4ba469eea3d
      </React.Fragment>
    )
  }
}

export default App
