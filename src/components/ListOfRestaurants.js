// the component is for display the list of the restaurants names and cuisine
import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
      (restaurant) => restaurant.opening_hours.open_now
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
  // Open-now Restaurant
  const handleFilterClose = () => {
    const closeRestaurants = restaurants.filter(
      (restaurant) => restaurant.opening_hours.open_now === false
    );

    setFilteredRestaurants(closeRestaurants);
    console.log(closeRestaurants);
  };
  // filter the list using the user input
  const onSearchedRestaurants = (e) => {
    const search = e.target.value;

    const searchedRestaurants = restaurants.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredRestaurants(searchedRestaurants);
  };

  return (
    <div>
      <div>
        <img src={HomePageGif} alt='' />
        <button onClick={handleFilterAll}>All </button>
        <button onClick={handleFilterOpen}>Open </button>
        <button onClick={handleFilterPickup}>Pickup </button>
        <button onClick={handleFilterDelivery}>Delivery </button>
        <button onClick={handleFilterClose}>Closed</button>
        <input
          type='text'
          placeholder='Find your restaurant'
          onChange={onSearchedRestaurants}
        />
      </div>
      {filteredRestaurants &&
        filteredRestaurants.map((restaurant) => (
          <div key={restaurant.id}>
            <img
              style={{ width: 300, height: 300 }}
              src={restaurant.photos[0].links[0]}
              alt=''
            />

            <h1 className='restaurantTitle'>
              <Link to={`/ListOfRestaurants/${restaurant.id}`}>
                {restaurant.name}
              </Link>
            </h1>
            <div>
              <h3>{restaurant.cuisine}</h3>
              <h4>Rating:{restaurant.rating}</h4>
              <h4>Price level: {restaurant.price_level}</h4>
            </div>
          </div>
        ))}
    </div>
  );
}

export default ListOfRestaurants;
