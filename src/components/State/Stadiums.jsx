import React, { useEffect, useState } from 'react';
import Carroussel from '../Caroussel';
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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSortToggle = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const sortedStadiums = sortStadiums([...stadiums], sortOrder); 

  const showCarroussel = windowWidth <= 1200 && windowWidth > 580;

  return (
    <section className='stadium'>
      <button onClick={handleSortToggle} className='stadium__capacity'>
        Sort by capacity ({sortOrder === 'asc' ? 'Ascending' : 'Descending'})
      </button>

      {sortedStadiums.map(stadium => (
        <div key={stadium.name} className='stadium__container'>
          {
            showCarroussel ? (
              <Carroussel pictures={stadium.pictures} />
            ) : (
          <div className='stadium__photo'>
            {stadium.pictures.map((picture, index) => (
              <img key={index} src={picture} alt="stadium" className='stadium__img'/>
            ))}
          </div>
            )}
          <h3 className='stadium__title'>{stadium.name}</h3>
          <h2 className='stadium__subtitle'>Located in {stadium.city} - {stadium.capacity}</h2>
          <h2 className='stadium__subtitle'>Residents : {stadium.residents}</h2>
        </div>
      ))}
    </section>
  );
}

export default Stadiums;
