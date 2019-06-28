import React from 'react'

export default function Slider(props) {
  return (
    <React.Fragment>
      <section id='slider'>
        {props.beers.map((beer, i) => {
          // console.log(beer)
          return <React.Fragment>
            <input type="radio" name="slider" key={i} id={`slide${beer.id}`} />
          </React.Fragment>
        })}
        <label htmlFor="slide1" id="slide1"></label>
        <label htmlFor="slide2" id="slide2"></label>
        <label htmlFor="slide3" id="slide3"></label>
        <label htmlFor="slide4" id="slide4"></label>
        <label htmlFor="slide5" id="slide5"></label>
      </section>
      <div className="beerdetails">
        <p>Name: {props.beers[2] && props.beers[2].name}</p>
        <p>Rating: {props.beers[2] && props.beers[2].rating}</p>
        <p>Description: {props.beers[2] && props.beers[2].descript}</p>
      </div>
    </React.Fragment >
  )
}


