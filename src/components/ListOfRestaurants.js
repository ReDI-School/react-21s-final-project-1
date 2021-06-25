// the component is for display the list of the restaurants names and cuisine
import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomePageGif from '../assets/HomepageGif3.gif';
import share from '../assets/share.png';

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
      <div className='main-img'>
        <img src={HomePageGif} className='HomepageGif' alt='HomePaGeGif' />
        <div className='main'>
          <div className='div-under-gif'>
            <h3 className='text-under-gif'>Berlin local restaurants</h3>
            <div className='Search-Buttons'>
              <div>
                <input
                  autoFocus='off'
                  autoComplete='off'
                  className='Search-bar'
                  type='text'
                  placeholder='Find your restaurant'
                  onChange={onSearchedRestaurants}
                />
              </div>
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

          <div className='restaurants'>
            {filteredRestaurants &&
              filteredRestaurants.map((restaurant) => (
                <div className='restaurant' key={restaurant.id}>
                  <Link to={`/ListOfRestaurants/${restaurant.id}`}>
                    <div className='restaurant-info'>
                      <div className='restaurant-name-cuisine-icon'>
                        {/* <img
                          className='restaurant-icon'
                          src={restaurant.icon}
                          alt='icon'
                          width='45px'
                          height='45px'
                        /> */}
                        <div className='restaurant-title-rating'>
                          <div className='restaurant-title'>
                            <h1>{restaurant.name}</h1>
                          </div>
                        </div>
                        <div className='restaurant-rating'>
                          <h4>
                            <span>&#11088; </span>
                            {restaurant.rating}
                            <span> ({restaurant.user_ratings_total}) - </span>
                            {restaurant.cuisine}
                          </h4>
                        </div>
                      </div>
                      <div className='restaurant-image'>
                        <img src={restaurant.photos[0].links[0]} alt='' />
                      </div>
                      <div className='restaurant-rate-price'>
                        <div className='address'>
                          <h3>address:</h3>
                          <span>{restaurant.formatted_address}</span>
                        </div>
                      </div>

                      <div className='restaurant-status'>
                        <div className='status-in'>
                          {restaurant && restaurant.delivery && (
                            <h5 className='delivery'>
                              {restaurant.delivery ? 'Delivery' : null}
                            </h5>
                          )}
                          {restaurant && restaurant.pickup && (
                            <h5 className='pickup'>
                              {restaurant.pickup ? 'Pickup' : null}
                            </h5>
                          )}
                          {restaurant &&
                            restaurant.opening_hours &&
                            restaurant.opening_hours.open_now && (
                              <h5 className='open'>
                                {restaurant.opening_hours.open_now
                                  ? 'Open'
                                  : 'Close'}
                              </h5>
                            )}
                        </div>
                        <div className='like-share'>
                          <div>
                            <h1>&#9825;</h1>
                          </div>

                          <div>
                            <img width='15px' src={share} alt='share' />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListOfRestaurants;
