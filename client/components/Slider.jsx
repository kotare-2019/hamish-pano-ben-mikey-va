import React from 'react'

import { getSingleBeer } from '../api/api'

const NZLager = {
  abv: 4,
  brewery_id: 2,
  descript: "The under-appreciated canterbury cousin of speights. Drunk in vigourous quantities at Lincoln Uni student parties before acts of valor, such as running into fences, cow tipping, and running into cows. The lords of Valhalla would approve.",
  id: 5,
  loc_available: "[1]",
  name: "Ranfurly",
  rating: 1,
  style: "beer",
  url: "images/Ranfurly.jpeg"
}

export default class Slider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      beer: NZLager
    }
  }

  update = (e) => {
    const id = e.target.id[1]
    console.log('woo!', id)
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


