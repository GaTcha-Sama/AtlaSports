import React from 'react'
import '../../styles/Players.scss'

function Players({ players }) {
  return (
    <section className='players'>
      {players.map(player => (
        <div key={player.name}>
          <img src={player.picture} alt={player.name} />
          <p>{player.name}</p>
        </div>
      ))}
    </section>
  )
}

export default Players
