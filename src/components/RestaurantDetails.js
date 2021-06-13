import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// I have to target the id of each restaurant

function RestaurantDetails() {
  const { id } = useParams();

  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    async function loadData() {
      const response = await fetch(
        "https://redi-final-restaurants.herokuapp.com/restaurants/"
      );
      const responseJson = await response.json();
      setRestaurant(responseJson.results.find((rest) => rest.id === id));
    }
    loadData();
  }, []);

  /// here you can show the restaurant data, you can apply your styles here.
  return restaurant ? (
    <div>
      {restaurant && restaurant.name && <h3>Name: {restaurant.name}</h3>}
      {restaurant && restaurant.cuisine && (
        <h4>Cuisine: {restaurant.cuisine} </h4>
      )}
      {restaurant && restaurant.formatted_address && (
        <h5>Address: {restaurant.formatted_address}</h5>
      )}
      {restaurant && restaurant.social && (
        <h5>
          Email: {restaurant.social.email} Phone: {restaurant.social.phone}
        </h5>
      )}
      {restaurant.photos &&
        restaurant.photos[0] &&
        restaurant.photos[0].links &&
        restaurant.photos[0].links[0] && (
          <img src={restaurant.photos[0].links[0]} alt="icon" />
        )}
      {restaurant && restaurant.price_level && (
        <h6>Price level {restaurant.price_level}</h6>
      )}
      {restaurant && restaurant.rating && <h6>Rating: {restaurant.rating}</h6>}

      {restaurant &&
        restaurant.opening_hours &&
        restaurant.opening_hours.open_now && (
          <div>{restaurant.opening_hours.open_now ? "open" : "closed"}</div>
        )}
      {restaurant &&
        restaurant.opening_hours &&
        restaurant.opening_hours.hours &&
        restaurant.opening_hours.hours.open &&
        restaurant.opening_hours.hours.close && (
          <div>
            <h4>{restaurant.opening_hours.hours.open}</h4>
            <h4>{restaurant.opening_hours.hours.close}</h4>
          </div>
        )}

      {restaurant && restaurant.pickup && (
        <div>{restaurant.pickup ? "pickup" : null} </div>
      )}
      {restaurant && restaurant.delivery && (
        <div>{restaurant.delivery ? "delivery" : null}</div>
      )}
    </div>
  ) : null;
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
