// the component is for display the list of the restaurants names and cuisine
import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import HomePageGif from '../assets/homepage-gif.gif';

function ListOfRestaurants() {
  const [restaurants, setRestaurants] = useState(null);
  const [filteredRestaurants, setFilteredRestaurants] = useState(null);

  useEffect(() => {
    async function loadData() {
      const response = await fetch(
        'https://redi-final-restaurants.herokuapp.com/restaurants/'
      );
      const responseJson = await response.json();
      setRestaurants(responseJson.results);
      setFilteredRestaurants(responseJson.results);
    }
    loadData();
  }, []);

  // all the Restaurants
  const handleFilterAll = () => {
    setFilteredRestaurants(restaurants);
    console.log(restaurants);
  };
  // Pickup Restaurants
  const handleFilterPickup = () => {
    const pickupRestaurants = restaurants.filter(
      (restaurant) => restaurant.pickup
    );

    setFilteredRestaurants(pickupRestaurants);
    console.log(pickupRestaurants);
  };
  // Open-now Restaurant
  const handleFilterOpen = () => {
    const openRestaurants = restaurants.filter(
      (restaurant) => restaurant.opening_hours.open_now === false
    );

    setFilteredRestaurants(openRestaurants);
    console.log(openRestaurants);
  };

  // Delivery Restaurants
  const handleFilterDelivery = () => {
    const deliveryRestaurants = restaurants.filter(
      (restaurant) => restaurant.delivery
    );

    setFilteredRestaurants(deliveryRestaurants);
    console.log(deliveryRestaurants);
  };

  return (
    <div>
      <div>
        <img src={HomePageGif} alt='' />
        <button onClick={handleFilterAll}>All </button>
        <button onClick={handleFilterOpen}>Open </button>
        <button onClick={handleFilterPickup}>Pickup </button>
        <button onClick={handleFilterDelivery}>Delivery </button>
        <SearchBar />
      </div>
      {filteredRestaurants &&
        filteredRestaurants.map((restaurant) => (
          <div key={restaurant.id}>
            <img src={restaurant.photos[0].links[0]} alt='' />

            <h1 className='restaurantTitle'>
              <Link to={`/ListOfRestaurants/${restaurant.id}`}>
                {restaurant.name}
              </Link>
            </h1>
            <h3>{restaurant.cuisine}</h3>
          </div>
        ))}
    </div>
  );
}

export default ListOfRestaurants;
