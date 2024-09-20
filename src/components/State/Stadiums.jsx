import React from 'react'
import '../../styles/Stadiums.scss'

function Stadiums({ stadiums }) {
  return (
    <section className='stadium'>      
      {stadiums.map(stadium => (
        <div className='stadium__container'>
          <div key={stadium.name} className='stadium__photo'>          
            {stadium.pictures.map((picture, index) => (
              <img key={index} src={picture} alt="stadium" className='stadium__img'/>
            ))}          
          </div>
          <h3 className='stadium__title'>{stadium.name}</h3>
          <h2 className='stadium__subtitle'>Located in {stadium.city} - {stadium.capacity}</h2>
          <h2 className='stadium__subtitle'>Residents : {stadium.residents}</h2>
        </div>
      ))}      
    </section>
  )
}

export default Stadiums