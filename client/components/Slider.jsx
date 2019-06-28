import React from 'react'

export default function Slider(props) {
  return (
    <React.Fragment>
      <section id='slider'>
        {props.beers.map(beer => {
          console.log(beer)
          return <input type="radio" name="slider" id={`s${beer.id}`} />
        })}
        <label for="s1" id="slide1"></label>
        <label for="s2" id="slide2"></label>
        <label for="s3" id="slide3"></label>
        <label for="s4" id="slide4"></label>
        <label for="s5" id="slide5"></label>
      </section>
    </React.Fragment >
  )
}


