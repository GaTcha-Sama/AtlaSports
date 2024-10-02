import React, { useState } from 'react';
import ArrowNext from '../assets/arrow-next.png';
import ArrowPrev from '../assets/arrow-prev.png';
import '../styles/Carroussel.scss';

const Caroussel = ({ pictures }) => {
  const [currentPicture, setCurrentPicture] = useState(0);

  function changePicture(direction) {
    if (direction === 'next') {
      setCurrentPicture((prevPicture) => (prevPicture + 1) % pictures.length);
    } else if (direction === 'previous') {
      setCurrentPicture((prevPicture) => (prevPicture === 0 ? pictures.length - 1 : prevPicture - 1));
    }
  }

  return (
    <div className="carroussel">
      {pictures.length > 1 && (
        <img
          className="carroussel__previous-arrow carroussel__arrow-img"
          src={ArrowPrev}
          alt="Previous"
          onClick={() => changePicture('previous')}
        />
      )}

      <img
        className="carroussel__picture"
        src={pictures[currentPicture]}
        alt="Current"
      />

      {pictures.length > 1 && (
        <img
          className="carroussel__next-arrow carroussel__arrow-img"
          src={ArrowNext}
          alt="Next"
          onClick={() => changePicture('next')}
        />
      )}

      {pictures.length > 1 && (
        <p className="carroussel__numbers">
          {currentPicture + 1} / {pictures.length}
        </p>
      )}
    </div>
  );
};

export default Caroussel;
