import React from 'react';
import Gallery from '../../pages/Gallery';
import DataUSA from '../../data/data-flag-states-usa.json';

function GalleryUSA() {
  return (
    <Gallery 
      country="UNITED STATES OF AMERICA"
      data={DataUSA}
      description="In this gallery you can choose among the 50 states of the US"
      navigatePath="state"
    />
  );
}

export default GalleryUSA;