import React from 'react'

import PropTypes from 'prop-types'

import './map.css'

const Map = (props) => {
  return (
    <div
      id="map"
      data-lat="41.010035618871754"
      data-type="Map"
      className="map-map"
    ></div>
  )
}

Map.defaultProps = {
  initMap: () => {},
}

Map.propTypes = {
  initMap: PropTypes.func,
}

export default Map
