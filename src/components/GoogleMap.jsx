import React, { Component } from 'react'

import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'
import { func } from 'prop-types'

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        containerStyle={{ width: '100%', height: '600px', position: 'relative' }}
        initialCenter={{
          lat: 55.677406,
          lng: 12.578024
        }}
        disableDefaultUI={true}
      >
        <Marker name={'Københavns Rådhus'} position={{ lat: 55.67594, lng: 12.56553 }} />

        <Marker name={'Apollo Kantine'} position={{ lat: 55.68333, lng: 12.58333 }} />
      </Map>
    )
  }

  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    })

  onMapClicked = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyA3PztM7pqvcMu-LP5zjHU07exD_01XFCw'
})(MapContainer)
