import React from 'react';
import Gallery from '../../pages/Gallery';
import DataCAN from '../../data/data-flag-provinces-canada.json';

function GalleryCAN() {
  return (
    <Gallery 
      country="CANADA"
      data={DataCAN}
      description="In this gallery you can choose among the 10 provinces of Canada, the 3 territories are just here because they exist but there are no professional or junior teams in them."
      navigatePath="province"
    />
  );
}

export default GalleryCAN;