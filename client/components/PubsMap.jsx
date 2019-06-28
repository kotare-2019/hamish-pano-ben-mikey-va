import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { key } from '../../server/config'

const Markers = ({ text }) => <div>{text}</div>;

class PubsMap extends Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.map = {
      center: {
        lat: -41.2962181,
        lng: 174.7823331
      },
      zoom: 14
    }
  }


  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '40vh', width: '60%', marginTop: 50, marginLeft: 'auto', marginRight: 'auto' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAvfWB1UvnfnIYv85YHcVaA7cvE4jwtzJk' }}
          defaultCenter={this.map.center}
          defaultZoom={this.map.zoom}
        >
          {this.props.pubs.length && this.props.pubs.map((marker, i) => (<Markers key={i}
            lat={JSON.parse(marker.lat_long_wsg84)[0]}
            lng={JSON.parse(marker.lat_long_wsg84)[1]}
          // text="X"
          />))}
        </GoogleMapReact>
      </div>
    );
  }
}

export default PubsMap;