import React from 'react'
import Slider from './Slider'
import Instagram from './instagram'
import Facebook from './facebook'
import Twitter from './twitter'
import { getBeers, getPubs } from '../api/api'
import PubsMap from './PubsMap'


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      beers: [],
      pubs: [],
    }
    this.getAllBeerData = this.getAllBeerData.bind(this)
    this.getAllPubsData = this.getAllPubsData.bind(this)
    this.renderBeer = this.renderBeer.bind(this)
    this.renderPubs = this.renderPubs.bind(this)
  }

  componentDidMount() {
    this.getAllBeerData()
    this.getAllPubsData()
  }

  renderBeer(beers) {
    this.setState({
      beers: beers || [],
    })
  }

  renderPubs(pubs) {
    this.setState({
      pubs: pubs || [],
    })
  }

  getAllBeerData() {
    getBeers(this.renderBeer)
  }

  getAllPubsData() {
    getPubs(this.renderPubs)
  }

  render() {
    console.log(this.state)
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
        <Slider beers={this.state.beers} />
        <PubsMap pubs={this.state.pubs} />
      </React.Fragment>
    )
  }
}

export default App
