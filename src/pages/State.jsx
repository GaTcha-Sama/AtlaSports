import React from 'react'
import { useParams } from 'react-router-dom'
import '../styles/State.scss'
import Map from '../components/State/Map'
import Logos from '../components/State/Logos'
import Stadiums from '../components/State/Stadiums'
import Players from '../components/State/Players'
import stateData from '../data/data-flag-states-usa.json'

function State() {
  const { id } = useParams()
  const stateInfo = stateData.find(state => state.id === parseInt(id))

  if (!stateInfo) {
    return <div>State not found</div>
  }

  return (
    <div className='state'>
      <h1 className='state__title'>{stateInfo.nom}</h1>
      <div className='state__map'>
        <Map src={stateInfo.carte} />
      </div>
      <div className='state__logos'>
        <Logos majorLeague={stateInfo.major_league} minorLeague={stateInfo.minor_league} />
      </div>
      <div className='state__stadiums'>
        <Stadiums stadiums={stateInfo.stadiums} />
      </div>
      <div className='state__players'>
        <Players players={stateInfo.players} />
      </div>
    </div>
  )
}

export default State