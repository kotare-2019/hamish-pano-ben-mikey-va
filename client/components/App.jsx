import React from 'react'
import Slider from './Slider'


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  
  render() {
    return (
      <div>
        <h1>Un-Beer-Able</h1>
        <Slider />
      </div>
    )
  }
}

export default App
