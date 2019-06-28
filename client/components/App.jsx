import React from 'react'
import Slider from './Slider'
import Instagram from './instagram'
import Facebook from './facebook'
import Twitter from './twitter'
import { getBeers } from '../api/api'
import PubsMap from './PubsMap'


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
    this.getAllBeerData = this.getAllBeerData.bind(this)
  }

  componentDidMount() {
    this.getAllBeerData()
  }

  getAllBeerData() {
    getBeers()
  }

  render() {
    return (
      <React.Fragment>
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
        <PubsMap />
      </React.Fragment>
    )
  }
}

export default App
