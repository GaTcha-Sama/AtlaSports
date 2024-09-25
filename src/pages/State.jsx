import React from 'react'
import { useParams, Link } from 'react-router-dom'
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

  const gradientStyle = {
    background: stateInfo.backgroundGradient
  };

  return (
    <div className='state'>
      
      <h1 className='state__title'>{stateInfo.nom}</h1>

      {/* Navbar for navigation */}
      <nav className="state__navbar">
        <ul className='state__navbar__list'>
          <li className='state__navbar__title'><a href="#teams">TEAMS</a></li>
          <li className='state__navbar__title'><a href="#stadiums">STADIUMS</a></li>
          <li className='state__navbar__title'><a href="#players">PLAYERS</a></li>
          <li className='state__navbar__gallery-title'>
            {/* Link to go back to the gallery */}
            <Link to="/gallery-usa">Gallery</Link>
          </li>
        </ul>
      </nav>

      {/* MAP Section */}
      <div className="state__map">
        <Map 
          map={stateInfo.carte} 
          city={{ latitude: stateInfo.latitude, longitude: stateInfo.longitude }} 
        />
      </div>

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
