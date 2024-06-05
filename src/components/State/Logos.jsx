import React from 'react'
import '../../styles/Logos.scss'


function Logos({ majorLeague, minorLeague }) {
  return (
    <div>
      <h2>Major League Teams</h2>
      {majorLeague.map(team => (
        <div key={team.name}>
          <img src={team.logo} alt={team.name} />
          <p>{team.name}</p>
        </div>
      ))}
      <h2>Minor League Teams</h2>
      {minorLeague.map(team => (
        <div key={team.name}>
          <img src={team.logo} alt={team.name} />
          <p>{team.name}</p>
        </div>
      ))}
    </div>
  )
}

export default Logos