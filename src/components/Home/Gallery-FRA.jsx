import React from 'react';
import Gallery from '../../pages/Gallery';
import DataFRA from '../../data/data-flag-regions-france.json';

function GalleryFRA() {
  return (
    <Gallery 
      country="FRANCE"
      data={DataFRA}
      description="In this gallery you can choose among the many regions of France."
      navigatePath="region"
    />
  )
}

export default GalleryFRA