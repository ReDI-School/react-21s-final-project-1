import React from 'react';
import { Icon } from '@iconify/react';
import locationIcon from '@iconify-icons/mdi/restaurant-menu';

const LocationMarker = ({ lat, lng }) => {
  return (
    <div>
      <Icon icon={locationIcon} className='location-icon' />
    </div>
  );
};

export default LocationMarker;
