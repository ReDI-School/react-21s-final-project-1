import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

// I have to target the id of each restaurant

function RestaurantDetails() {
  const { data } = useLocation();
  let history = useHistory();
  if (!data) {
    history.push('/ListOfRestaurants');
  }
  useEffect(() => {
    async function loadRest() {}
    loadRest();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  /// here you can show the restaurant data, you can apply your styles here.
  return (
    <div>
      {data && data.name && <h3>Name: {data.name}</h3>}
      {data && data.cuisine && <h4>Cuisine: {data.cuisine} </h4>}
      {data && data.formatted_address && (
        <h5>Address: {data.formatted_address}</h5>
      )}
      {data && data.social && (
        <h5>
          Email: {data.social.email} Phone: {data.social.phone}
        </h5>
      )}
      {data.photos &&
        data.photos[0] &&
        data.photos[0].links &&
        data.photos[0].links[0] && (
          <img src={data.photos[0].links[0]} alt='icon' />
        )}
      {data && data.price_level && <h6>Price level {data.price_level}</h6>}
      {data && data.rating && <h6>Rating: {data.rating}</h6>}

      {data && data.opening_hours && data.opening_hours.open_now && (
        <div>{data.opening_hours.open_now ? 'open' : 'closed'}</div>
      )}
      {data &&
        data.opening_hours &&
        data.opening_hours.hours &&
        data.opening_hours.hours.open &&
        data.opening_hours.hours.close && (
          <div>
            <h4>{data.opening_hours.hours.open}</h4>
            <h4>{data.opening_hours.hours.close}</h4>
          </div>
        )}

      {data && data.pickup && <div>{data.pickup ? 'pickup' : null} </div>}
      {data && data.delivery && <div>{data.delivery ? 'delivery' : null}</div>}
    </div>
  );
}

// --------------------------------------------------------
//   return (
//     <div style={{ color: 'red' }}>
//       <h1>{data?.name || 'there is no id'}</h1>
//       <h2>{data?.cuisine || 'there is no id'}</h2>
//       <h5>{data?.formatted_address || 'there is no id'}</h5>
//       {/* <h5>
//         {data?.social.email || 'there is no id'}
//         {data?.social.phone || 'there is no id'}
//       </h5> */}
//       <img src={data?.photos[0].links[0] || 'there is no id'} alt='icon' />
//       <h6>
//         {data?.price_level || 'there is no id'} ||{' '}
//         {data?.rating || 'there is no id'}
//       </h6>
//       <div>
//         {data?.opening_hours.open_now ? 'open' : 'closed' || 'there is no id'}{' '}
//       </div>
//       <div>{data?.pickup ? 'pickup' : null || 'there is no id'} </div>
//       <div>{data?.delivery ? 'delivery' : null || 'there is no id'}</div>
//     </div>
//   );
// }

export default RestaurantDetails;

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
