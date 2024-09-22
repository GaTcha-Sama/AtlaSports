import React, { useState } from 'react';
import '../../styles/Stadiums.scss';

function parseCapacity(capacityStr) {
  return parseInt(capacityStr.replace('.', '').replace(' seats', ''));
}

function sortStadiums(stadiums, order = 'asc') {
  return stadiums.sort((a, b) => {
    const capacityA = parseCapacity(a.capacity);
    const capacityB = parseCapacity(b.capacity);

    if (order === 'asc') {
      return capacityA - capacityB;
    } else {
      return capacityB - capacityA;
    }
  });
}

function Stadiums({ stadiums }) {
  const [sortOrder, setSortOrder] = useState('desc');

  const handleSortToggle = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const sortedStadiums = sortStadiums([...stadiums], sortOrder); 

  return (
    <section className='stadium'>
      <button onClick={handleSortToggle} className='stadium__capacity'>
        Sort by capacity ({sortOrder === 'asc' ? 'Ascending' : 'Descending'})
      </button>

      {sortedStadiums.map(stadium => (
        <div key={stadium.name} className='stadium__container'>
          <div className='stadium__photo'>
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
  );
}

export default Stadiums;
