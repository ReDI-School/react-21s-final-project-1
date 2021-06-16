import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Map from './Map';
import DishIcon from '../assets/dish.png';
import LocationIcon from '../assets/location.png';
import EuroIcon from '../assets/euro.png';
import OpenIcon from '../assets/open.png';
import PhoneIcon from '../assets/phone-call.png';
import RatingIcon from '../assets/rating.png';
import EmailIcon from '../assets/email.png';
import DeliveryIcon from '../assets/delivery-man.png';
import ClosedIcon from "../assets/closed.png";


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
      <div className="single-page-name">
      {restaurant && restaurant.name && <h3>{restaurant.name}</h3>}
      </div>
      <div className="single-restaurant-grid">
    <div className="single-page-cuisine-img">
    <div className="single-page-cuisine">
    {restaurant && restaurant.cuisine && (
        <h4>Cuisine 
          <br />
          <img src={DishIcon} className='Icons' alt='Dish' />
          {restaurant.cuisine} </h4>
      )}
      </div>
<div className="single-page-img">
      {restaurant.photos &&
        restaurant.photos[0] &&
        restaurant.photos[0].links &&
        restaurant.photos[0].links[0] && (
          <img src={restaurant.photos[0].links[0]} alt='icon' />
        )}
        </div>
    </div>
      
      <div className="single-page-info">
      <h4>Details</h4>
        <div className="single-page-pricelevel">
      {restaurant && restaurant.price_level && (
        <h6>
          <img src={EuroIcon} className='Icons' alt='Euro' />
          Price level {restaurant.price_level}</h6>
      )}
      </div>
      <div className="single-page-rating">
      {restaurant && restaurant.rating && <h6>
        <img src={RatingIcon} className='Icons' alt='Rating' />
        Rating: {restaurant.rating}</h6>}
      </div>
      <div className="single-page-openhours">
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
            <h4>
            <img src={OpenIcon} className='Icons' alt='Open' />
              {restaurant.opening_hours.hours.open}</h4>
            <h4>
            <img src={ClosedIcon} className='Icons' alt='Closed' />
              {restaurant.opening_hours.hours.close}</h4>
          </div>
        )}
</div>
<div className="single-page-pickup">
      {restaurant && restaurant.pickup && (
        <div>
          {restaurant.pickup ? 'pickup' : null} </div>
      )}

</div>
      <div className="single-page-delivery">
      {restaurant && restaurant.delivery && (
        <div>
          <img src={DeliveryIcon} className='Icons' alt='Delivery' />
          {restaurant.delivery ? 'delivery' : null}</div>
      )}
      </div>
      </div>
      <div className="single-page-contact">
      <h4>Contact</h4>
      {restaurant && restaurant.social && (
        <h5>
          <img src={EmailIcon} className='Icons' alt='Email' />
          Email: {restaurant.social.email}
          <br />
          <img src={PhoneIcon} className='Icons' alt='Phone' />
          Phone: {restaurant.social.phone}
        </h5>
      )}
      </div>
      
      <div className="single-page-location">
      <h4>Location</h4>
      <img src={LocationIcon} className='Icons' alt='Location' />
      {restaurant && restaurant.formatted_address && (
        <h5>Address: {restaurant.formatted_address}</h5>
      )}
{/* <h1>{restaurant.geometry.location.lat}</h1> */}

<Map restaurants={[restaurant]} />
      </div>
      </div>
      
    </div>
  ) : null;
}
export default RestaurantDetails;
