import React, { Component } from 'react'

class Marker extends Component {
  constructor(props) {
    super(props)
    this.handleMouseHover = this.handleMouseHover.bind(this)
    this.state = {
      isHovering: false
    }
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState)
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering
    }
  }

  render() {
    return (
      <div>
        <div onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
          <img src="http://29diner.com/wp-content/uploads/2015/02/google-map-marker.png" width="40px" height="40px" />
        </div>
        {this.state.isHovering && <div>{this.props.text}</div>}
      </div>
    )
  }
}

export default Marker
