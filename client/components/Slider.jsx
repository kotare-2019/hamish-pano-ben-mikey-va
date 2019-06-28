import React from 'react'

export default function Slider(props) {
  console.log(props)
  return (
    <React.Fragment>
      <section id='slider'>
        {this.props.beers.map(beer => {
          return <input type="radio" name="slider" id={beer.id} />
        })}
        {/* <section id="slider">
          <input type="radio" name="slider" id="s1" />
          <input type="radio" name="slider" id="s2" />
          <input type="radio" name="slider" id="s3" />
          <input type="radio" name="slider" id="s4" />
          <input type="radio" name="slider" id="s5" /> */}
        <label for="s1" id="slide1"></label>
        <label for="s2" id="slide2"></label>
        <label for="s3" id="slide3"></label>
        <label for="s4" id="slide4"></label>
        <label for="s5" id="slide5"></label>
      </section>
    </React.Fragment >
  )
}


