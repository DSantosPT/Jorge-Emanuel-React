import React from 'react'

import PropTypes from 'prop-types'

import './map.css'

const Map = (props) => {
  return (
    <div
      id="map"
      data-lat="41.010035618871754"
      data-lng="-8.641739259541081"
      data-type="Map"
      className="map-map"
    >
      <iframe
        src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Espinho+(Correia%20de%20Castro%20Advogados)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        className="map-iframe"
      ></iframe>
    </div>
  )
}

Map.defaultProps = {
  initMap: () => {},
}

Map.propTypes = {
  initMap: PropTypes.func,
}

export default Map
