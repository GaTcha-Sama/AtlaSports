import React from 'react'
import '../styles/State.scss'
import Map from '../components/State/Map'
import Logos from '../components/State/Logos'
import Stadiums from '../components/State/Stadiums'
import Players from '../components/State/Players'

function State() {
  return (
    <div className='state'>
      <h1 className='state__title'>ARIZONA</h1>
      <div className='state__map'>
        <Map/>
      </div>
      <div className='state__logos'>
        <Logos />
      </div>
      <div className='state__stadiums'>
        <Stadiums />
      </div>
      <div className='state__players'>
        <Players />
      </div>
    </div>
  )
}

export default State