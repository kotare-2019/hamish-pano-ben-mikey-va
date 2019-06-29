import React from 'react'

import { getSingleBeer } from '../api/api'

const DoubleBrown = { id: 1, brewery_id: 1, name: 'Double Brown', style: 'beer', abv: 4, descript: 'Slithers deliciously down the throat when drinken via a puncture in the side of the can - refered to as a shotgun or torpedo. Go for the 440ml can for a double barrel shotgun. Almost indistinguisable from Tui, but without the stigma of the sexist yeah right adverts. ', rating: 1, loc_available: '[1]', url: 'images/DoubleBrown.jpeg' }

export default class Slider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      beer: DoubleBrown
    }
  }

  update = (e) => {
    const id = e.target.id[1]
    getSingleBeer(id, beer => this.setState({ beer }))
  }

  render() {
    return (
      <React.Fragment>
        <section id='slider'>
          {this.props.beers.map((beer, i) => {
            // console.log(beer)
            return <React.Fragment>
              <input onChange={this.update} type="radio" name="slider" key={i} id={`s${beer.id}`} />
            </React.Fragment>
          })}
          <label htmlFor="s1" id="slide1"></label>
          <label htmlFor="s2" id="slide2"></label>
          <label htmlFor="s3" id="slide3"></label>
          <label htmlFor="s4" id="slide4"></label>
          <label htmlFor="s5" id="slide5"></label>
          <label htmlFor="s6" id="slide6"></label>
          <label htmlFor="s7" id="slide7"></label>
        </section>
        <div className="beerdetails">
          <p>Name: {this.state.beer.name}</p>
          <p>Rating: {this.state.beer.rating}</p>
          <p>Description: {this.state.beer.descript}</p>
        </div>
      </React.Fragment >
    )
  }
}


