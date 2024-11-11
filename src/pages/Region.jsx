import React from 'react'
import { useParams, Link } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPeopleGroup, faUser, faKaaba, faTable } from '@fortawesome/free-solid-svg-icons'
import '../styles/State.scss'
import Map from '../components/State/Map'
import Logos from '../components/State/Logos'
import Stadiums from '../components/State/Stadiums'
import Players from '../components/State/Players'
import DataFRA from '../data/data-flag-regions-france.json'

function Region() {
  const { id } = useParams()
  const stateInfo = DataFRA.find(state => state.id === parseInt(id))

  if (!stateInfo) {
    return <div>Location not found</div>
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
          <li className='state__navbar__title'><a href="#teams"><FontAwesomeIcon icon={faPeopleGroup} className='state__navbar__title__logo'/>Teams</a></li>
          <li className='state__navbar__title'><a href="#stadiums"><FontAwesomeIcon icon={faKaaba} className='state__navbar__title__logo'/>Stadiums</a></li>
          <li className='state__navbar__title'><a href="#players"><FontAwesomeIcon icon={faUser} className='state__navbar__title__logo'/>Players</a></li>
          <li className='state__navbar__gallery-title'>
            {/* Link to go back to the gallery */}
            <Link to="/gallery-fra"><FontAwesomeIcon icon={faTable} className='state__navbar__title__logo'/>Back to gallery</Link>
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

      {/* TEAMS SECTION */}
      <div id='teams' className='state__logos' style={gradientStyle}>
        <h1 className='state__title-container'>TEAMS</h1>
        <Logos footballLeague={stateInfo.football_league} 
                basketLeague={stateInfo.basket_league} 
                rugbyLeague={stateInfo.rugby_league} 
                handballLeague={stateInfo.handball_league} 
                icehockeyLeague={stateInfo.icehockey_league}
                volleyLeague={stateInfo.volley_league} 
                footusLeague={stateInfo.footus_league}
                baseballLeague={stateInfo.baseball_league} 
                gaelicLeague={stateInfo.gaelic_league}
        />
      </div>

      {/* STADIUMS & ARENAS Section */}
      <div id='stadiums' className='state__stadiums'>
        <h1 className='state__title-container'>BIGGESTS STADIUMS & ARENAS</h1>
        <Stadiums stadiums={stateInfo.stadiums} />
      </div>

      {/* PLAYERS Section */}
      <div id='players' className='state__players' style={gradientStyle}>
        <h1 className='state__title-container' >FAMOUS PLAYERS OF ALL TIME</h1>
        <Players players={stateInfo.players} />
      </div>
    </div>
  )
}

export default Region