import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { key } from './config'

const Markers = ({ text }) => <div>{text}</div>;

class PubsMap extends Component {
  constructor(props) {
    super(props)
    this.map = {
      center: {
        lat: -41.2962181,
        lng: 174.7823331
      },
      zoom: 8
    }
  }


  render() {

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '40vh', width: '50%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: key }}
          defaultCenter={this.map.center}
          defaultZoom={this.map.zoom}
        >
          {this.props.pubs.length && this.props.pubs.map(marker => (<Markers
            lat={marker.lat_long_wsg84[0]}
            lng={marker.lat_long_wsg84[1]}
            text="X"
          />))}
        </GoogleMapReact>
      </div>
    );
  }
}

export default PubsMap;