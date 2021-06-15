import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Map from './Map';

// I have to target the id of each restaurant

function RestaurantDetails() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    async function loadData() {
      const response = await fetch(
        'https://redi-final-restaurants.herokuapp.com/restaurants/'
      );
      const responseJson = await response.json();
      setRestaurant(responseJson.results.find((rest) => rest.id === id));
    }
    loadData();
  }, [id]); // eslint-disable-next-line

  /// here you can show the restaurant data, you can apply your styles here.
  return restaurant ? (
    <div className='singleRestaurant'>
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
          <img src={restaurant.photos[0].links[0]} alt='icon' />
        )}
      {restaurant && restaurant.price_level && (
        <h6>Price level {restaurant.price_level}</h6>
      )}
      {restaurant && restaurant.rating && <h6>Rating: {restaurant.rating}</h6>}

      {restaurant &&
        restaurant.opening_hours &&
        restaurant.opening_hours.open_now && (
          <div>{restaurant.opening_hours.open_now ? 'open' : 'closed'}</div>
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
        <div>{restaurant.pickup ? 'pickup' : null} </div>
      )}
      {restaurant && restaurant.delivery && (
        <div>{restaurant.delivery ? 'delivery' : null}</div>
      )}
      {/* <h1>{restaurant.geometry.location.lat}</h1> */}

      <Map restaurants={[restaurant]} />
    </div>
  ) : null;
}
export default RestaurantDetails;
