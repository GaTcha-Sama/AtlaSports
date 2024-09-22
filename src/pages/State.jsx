import React from 'react'
import { useParams } from 'react-router-dom'
import '../styles/State.scss'
// import Map from '../components/State/Map'
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

  const gradientStyle = {
    background: stateInfo.backgroundGradient
  };

  return (
    <div className='state'>
      
      <h1 className='state__title'>{stateInfo.nom}</h1>

      {/* Navbar for navigation */}
      <nav className="state__navbar">
        <ul>
          <li><a href="#teams">TEAMS</a></li>
          <li><a href="#stadiums">STADIUMS & ARENAS</a></li>
          <li><a href="#players">PLAYERS</a></li>
        </ul>
      </nav>

      {/*<div className='state__map'>
        {/*  <Map map={stateInfo.map} city={stateInfo.city} /> A FAIRE EN DERNIER 
      </div> */}

      {/* TEAMS Section */}
      <div id='teams' className='state__logos' style={gradientStyle}>
        <h1 className='state__title-container'>TEAMS</h1>
        <Logos majorLeague={stateInfo.major_league} 
                minorLeague={stateInfo.minor_league} 
                juniorLeague={stateInfo.junior_league} />
      </div>

      {/* STADIUMS & ARENAS Section */}
      <div id='stadiums' className='state__stadiums'>
        <h1 className='state__title-container'>BIGGEST STADIUMS & ARENAS</h1>
        <Stadiums stadiums={stateInfo.stadiums} />
      </div>

      {/* PLAYERS Section */}
      <div id='players' className='state__players' style={gradientStyle}>
        <h1 className='state__title-container'>FAMOUS PLAYERS OF ALL TIME</h1>
        <Players players={stateInfo.players} />
      </div>
    </div>
  )
}

export default State;
