import React from 'react';

const Resturant = ({
  details: {
    name,
    cuisine,
    formatted_address,
    social,
    photos,
    price_level,
    opening_hours,
    pickup,
    delivery,
  },
}) => {
  return (
    <div>
      {name && <h3>Name: {name}</h3>}
      {cuisine && <h4>Cuisine: {cuisine} </h4>}
      {formatted_address && <h5>Address: {formatted_address}</h5>}
      {social && (
        <h5>
          Email: {social.email} Phone: {social.phone}
        </h5>
      )}
      {photos && photos[0] && photos[0].links && photos[0].links[0] && (
        <img src={photos[0].links[0]} alt='icon' />
      )}
      {price_level && <h6>Price level {price_level}</h6>}

      {opening_hours && opening_hours.open_now && (
        <div>{opening_hours.open_now ? 'open' : 'closed'} </div>
      )}
      <div>{pickup ? 'pickup' : null} </div>
      <div>{delivery ? 'delivery' : null}</div>
      <h5>--------------------------------------------------</h5>
    </div>
  );
};
export default Resturant;

/* {data.results.map((rest) => (
        <div>
          <h3>{`Name: ${rest.name}`}</h3>
          <h4>{`Cuisine: ${rest.cuisine} `}</h4>
          <h5>{rest.formatted_address}</h5>
          <h5>{`Email: ${rest.social.email}  || Phone: ${rest.social.phone}`}</h5>
          <img src={rest.photos[0].links[0]} alt='icon' />
          <h6>{`Price level ${rest.price_level} ||  Rating ${rest.rating}`}</h6>
          <div>{rest.opening_hours.open_now ? 'open' : 'closed'} </div>
          <div>{rest.pickup ? 'pickup' : null} </div>
          <div>{rest.delivery ? 'delivery' : null}</div>
          <h5>--------------------------------------------------</h5>
        </div>
      ))} */
