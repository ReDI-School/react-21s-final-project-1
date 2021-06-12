// the component is for display the list of the restaurants names and cuisine
import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ListOfRestaurants() {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function loadData() {
      const response = await fetch(
        'https://redi-final-restaurants.herokuapp.com/restaurants/'
      );
      const data = await response.json();
      setData(data);
    }
    loadData();
  }, []);
  console.log(data);

  // taking each Restaurant as link and show it in the list
  const Home = () => (
    <div>
      {data &&
        data.results.map((restaurant) => (
          <div key={restaurant.id}>
            <h1>
              <Link
                to={{
                  pathname: `/ListOfRestaurants/${restaurant.id}`,
                  data: {
                    name: restaurant.name,
                    cuisine: restaurant.cuisine,
                    formatted_address: restaurant.formatted_address,
                    social: restaurant.social,
                    photos: restaurant.photos,
                    price_level: restaurant.price_level,
                    rating: restaurant.rating,
                    opening_hours: {
                      opening_hours: restaurant.opening_hours,
                      hours: {
                        open: restaurant.opening_hours.open,
                        close: restaurant.opening_hours.close,
                      },
                    },
                    pickup: restaurant.pickup,
                    delivery: restaurant.delivery,
                  },
                }}>
                {restaurant.name}
              </Link>
            </h1>
            <h3>{restaurant.cuisine}</h3>
          </div>
        ))}
    </div>
  );
  return (
    <div>
      <Home />
    </div>
  );
}
export default ListOfRestaurants;
