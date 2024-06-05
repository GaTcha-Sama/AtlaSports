import React from 'react'
import '../../styles/Stadiums.scss'

function Stadiums({ stadiums }) {
  return (
    <div>
      {stadiums.map(stadium => (
        <div key={stadium.name}>
          <h3>{stadium.name}</h3>
          {stadium.pictures.map((picture, index) => (
            <img key={index} src={picture} alt={stadium.name} />
          ))}
        </div>
      ))}
    </div>
  )
}

export default Stadiums