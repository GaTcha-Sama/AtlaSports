import React, { useState, useEffect } from 'react';
import '../../styles/Players.scss';

function Players({ players }) {
  // State pour gérer le filtre courant
  const [filter, setFilter] = useState('All');
  const [sports, setSports] = useState([]);

  // Extraction des sports uniques à partir des joueurs
  useEffect(() => {
    const uniqueSports = Array.from(
      new Set(players.map(player => player.sport).filter(Boolean)) // Évite les valeurs falsy
    );
    setSports(uniqueSports);
  }, [players]);

  // Fonction de filtrage des joueurs
  const filteredPlayers = players.filter(player => 
    filter === 'All' || (player.sport && player.sport.toLowerCase() === filter.toLowerCase())
  );

  return (
    <section className='players'>
      {/* Boutons de filtre dynamiques */}
      <div className='players__filters'>
        <button 
          onClick={() => setFilter('All')} 
          className={filter === 'All' ? 'active' : ''}
        >
          Show all
        </button>
        {sports.map(sport => (
          <button 
            key={sport} 
            onClick={() => setFilter(sport)} 
            className={filter === sport ? 'active' : ''}
          >
            {sport}
          </button>
        ))}
      </div>

      {/* Liste des joueurs */}
      <div className='players__list'>
        {filteredPlayers.map(player => (
          <div key={player.name} className='players__container'>
            <img 
              src={player.picture} 
              alt={player.name} 
              className='players__container__img' 
            />
            <p className='players__container__title'>{player.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Players;
