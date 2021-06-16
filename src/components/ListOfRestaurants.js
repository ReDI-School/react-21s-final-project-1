// the component is for display the list of the restaurants names and cuisine
import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomePageGif from '../assets/HomepageGif3.gif';

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
    <div className='big-list'>
      <div>
        <img src={HomePageGif} className='HomepageGif' alt='HomePaGeGif' />
        <div className='div-under-gif'>
          <h3 className='text-under-gif'>Berlin local restaurants</h3>
          <div className='Search-Buttons'>
            <input
              autoFocus='off'
              autoComplete=''
              className='Search-bar'
              type='text'
              placeholder='Find your restaurant'
              onChange={onSearchedRestaurants}
            />
            <div className='Buttons'>
              <button className='FilterButton' onClick={handleFilterAll}>
                All{' '}
              </button>
              <button className='FilterButton' onClick={handleFilterOpen}>
                Open{' '}
              </button>
              <button className='FilterButton' onClick={handleFilterPickup}>
                Pickup{' '}
              </button>
              <button className='FilterButton' onClick={handleFilterDelivery}>
                Delivery{' '}
              </button>
              <button className='FilterButton' onClick={handleFilterClose}>
                Closed
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='restaurants'>
        {filteredRestaurants &&
          filteredRestaurants.map((restaurant) => (
            <div className='restaurant' key={restaurant.id}>
              <div className='restaurant-image'>
                <img
                  // style={{ width: 300, height: 300 }}
                  src={restaurant.photos[0].links[0]}
                  alt=''
                />
              </div>
              <div className='restaurant-info'>
                <h1 className='restaurant-title'>
                  <Link to={`/ListOfRestaurants/${restaurant.id}`}>
                    {restaurant.name}
                  </Link>
                </h1>

                <h3 className='restaurant-cuisine'>{restaurant.cuisine}</h3>
                <h4 className='restaurant-rating'>
                  Rating:{restaurant.rating}
                </h4>
                <h4 className='restaurant-price-level'>
                  Price level: {restaurant.price_level}
                </h4>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ListOfRestaurants;
