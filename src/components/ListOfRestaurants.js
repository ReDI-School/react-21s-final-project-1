// the component is for display the list of the restaurants names and cuisine
import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import SearchPlace from "../components/SearchPlace";

import HomePageGif from "../assets/homepage-gif.gif";

function ListOfRestaurants() {
  const [restaurants, setRestaurants] = useState(null);
  const [filteredRestaurants, setFilteredRestaurants] = useState(null);

  useEffect(() => {
    async function loadData() {
      const response = await fetch(
        "https://redi-final-restaurants.herokuapp.com/restaurants/"
      );
      const responseJson = await response.json();
      setRestaurants(responseJson.results);
      setFilteredRestaurants(responseJson.results);
    }
    loadData();
  }, []);

  const handleFilterAll = () => {
    setFilteredRestaurants(restaurants);
  };

  const handleFilterPickup = () => {
    const pickupRestaurants = restaurants.filter(
      (restaurant) => restaurant.pickup
    );

    setFilteredRestaurants(pickupRestaurants);
  };

  return (
    <div>
      <img src={HomePageGif} />
      <button onClick={handleFilterAll}>All Restaurants</button>
      <button onClick={handleFilterPickup}>Pickup Restaurants</button>
      <SearchPlace />
      {filteredRestaurants &&
        filteredRestaurants.map((restaurant) => (
          <div className="restaurantCard" key={restaurant.id}>
            <img src={restaurant.photos[0].links[0]} />

            <h1 className="restaurantTitle">
              <Link to={`/ListOfRestaurants/${restaurant.id}`}>
                {restaurant.name}
              </Link>
            </h1>
            <h3 className="restaurantCousine">{restaurant.cuisine}</h3>
          </div>
        ))}
    </div>
  );
}
export default ListOfRestaurants;
