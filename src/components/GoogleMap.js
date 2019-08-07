import React, { Component } from 'react'

import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        containerStyle={{ width: '100%', height: '600px', position: 'relative' }}
        initialCenter={{
          lat: 55.6778125,
          lng: 12.5741511
        }}
      >
        <Marker name={'Current location'} />
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyA3PztM7pqvcMu-LP5zjHU07exD_01XFCw'
})(MapContainer)
