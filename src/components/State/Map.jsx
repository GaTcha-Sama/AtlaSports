import React from 'react'
import '../../styles/Map.scss'
import MapArizona from '../../assets/arizona-test.jpg'

function Map() {
  return (
    <div className='map'>
      <img src={MapArizona} alt="" className='map__style' />
    </div>
  )
}

export default Map