import React from 'react'
import '../../styles/Players.scss'

function Players({ players }) {
  return (
    <section className='players'>
      {players.map(player => (
        <div key={player.name} className='players__container'>
          <img src={player.picture} alt={player.name} className='players__container__img'/>
          <p className='players__container__title'>{player.name}</p>
        </div>
      ))}
    </section>
  )
}

export default Players
