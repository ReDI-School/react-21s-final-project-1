import GoogleMapReact from 'google-map-react';
import React from 'react';
// import LocationMarker from './LocationMarker';

const Map = ({ eventData, center, zoom }) => {
  // const marker = eventData.map((rest) => {
  //   if (rest.id) {
  //     return (
  //       <LocationMarker
  //         key={rest.id}
  //         lat={rest.geometry.location.lat}
  //         lng={rest.geometry.location.lng}
  //       />
  //     );
  //   }
  //   return null;
  // });
  return (
    <div className='map'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={center}
        defaultZoom={zoom}>
        {/* {marker} */}
      </GoogleMapReact>
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 52.514503,
    lng: 13.459959,
  },
  zoom: 12,
};

export default Map;
