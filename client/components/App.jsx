import React from 'react'
import Slider from './Slider'
import Instagram from './instagram'
import Facebook from './facebook'
import Twitter from './twitter'
import BeerDetails from './BeerDetails'
import { getBeers } from '../api/api'


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      beers: [],
    }
    this.getAllBeerData = this.getAllBeerData.bind(this)
    this.renderBeer = this.renderBeer.bind(this)
  }

  componentDidMount() {
    this.getAllBeerData()
  }

  renderBeer(beers) {
    this.setState({
      beers: beers || []
    })
  }

  getAllBeerData() {
    getBeers(this.renderBeer)
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
      <BeerDetails />
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
        <Slider beers={this.state.beers} />
>>>>>>> 6f73fc6c29be2d4c0c6fe1c138ce8fc2b7e6fbda
      </React.Fragment>
    )
  }
}

export default App
