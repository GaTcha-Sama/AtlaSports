import React from 'react'
import '../../styles/Map.scss'

function Map({ map, city }) {
  return (
    <div className='map'>
      <img src={map} alt="State Map" />
      {city && <img src={city} alt="City Map" />}
    </div>
  )
}

export default Map