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
import ClosedIcon from '../assets/closed.png';

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
      <div className='single-page-name'>
        {restaurant && restaurant.name && <h3>{restaurant.name}</h3>}
      </div>
      <div className='single-page-cuisine'>
        {restaurant && restaurant.cuisine && (
          <img src={DishIcon} className='Icons' alt='Dish' />
        )}
        <h4>Cuisine {restaurant.cuisine}</h4>
      </div>

      <div className='single-restaurant-flex'>
        <div className='single-page-imgs'>
          <div className='single-page-img'>
            {restaurant.photos &&
              restaurant.photos[0] &&
              restaurant.photos[0].links &&
              restaurant.photos[0].links[0] && (
                <img src={restaurant.photos[0].links[0]} alt='icon' />
              )}
          </div>
          <div className='single-page-img'>
            {restaurant.photos &&
              restaurant.photos[0] &&
              restaurant.photos[0].links &&
              restaurant.photos[0].links[0] && (
                <img src={restaurant.photos[0].links[1]} alt='icon' />
              )}
          </div>
          <div className='single-page-img'>
            {restaurant.photos &&
              restaurant.photos[0] &&
              restaurant.photos[0].links &&
              restaurant.photos[0].links[0] && (
                <img src={restaurant.photos[0].links[2]} alt='icon' />
              )}
          </div>
        </div>
        <div className='single-page-infos'>
          <div className='single-page-info'>
            <h4>Details</h4>
            <div className=' ff'>
              <img src={EuroIcon} className='Icons' alt='euro' />
              <h5>Price level</h5>
              {restaurant && restaurant.price_level && (
                <h3> {restaurant.price_level}</h3>
              )}
            </div>
            <div className='ff'>
              <img src={RatingIcon} className='Icons' alt='Rating' />
              <h5>Rating:</h5>
              {restaurant && restaurant.rating && <h6> {restaurant.rating}</h6>}
            </div>
            <div className='ff'>
              {restaurant &&
                restaurant.opening_hours &&
                restaurant.opening_hours.hours &&
                restaurant.opening_hours.hours.open &&
                restaurant.opening_hours.hours.close && (
                  <div>
                    <div className='ff'>
                      <img src={OpenIcon} className='Icons' alt='Open' />
                      <h5>Open:</h5>
                      <h5>{restaurant.opening_hours.hours.open}</h5>
                    </div>
                  </div>
                )}
            </div>

            <div className='ff'>
              {restaurant &&
                restaurant.opening_hours &&
                restaurant.opening_hours.hours &&
                restaurant.opening_hours.hours.open &&
                restaurant.opening_hours.hours.close && (
                  <div>
                    <div className='ff'>
                      <img src={ClosedIcon} className='Icons' alt='Closed' />
                      <h5>Close:</h5>
                      <h5>{restaurant.opening_hours.hours.close}</h5>
                    </div>
                  </div>
                )}
            </div>

            <div className='single-page-delivery'>
              {restaurant && restaurant.delivery && (
                <div className='ff'>
                  <img src={DeliveryIcon} className='Icons' alt='Delivery' />
                  <h5>{restaurant.delivery ? 'delivery' : null}</h5>
                </div>
              )}
            </div>
            {/* <div className='single-page-pickup'>
              {restaurant && restaurant.pickup && (
                <div>{restaurant.pickup ? 'pickup' : null} </div>
              )}
            </div> */}
          </div>
          {/* =================================================== */}
          <div className='single-page-contact'>
            <h4>Contact</h4>
            <div className='ff'>
              {restaurant && restaurant.social && (
                <div>
                  <br />
                  <img src={EmailIcon} className='Icons' alt='Email' />
                  <br />
                  <br />
                  <h5>Email: {restaurant.social.email}</h5>
                  <br />
                  <br />
                  <img src={PhoneIcon} className='Icons' alt='Phone' />
                  <br />
                  <br />
                  <h5> Phone: {restaurant.social.phone}</h5>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className='single-page-location'>
          <h4>Location</h4>
          <br />
          <div className='fff'>
            <img src={LocationIcon} className='Icons' alt='Location' />
            {restaurant && restaurant.formatted_address && (
              <h5>Address: {restaurant.formatted_address}</h5>
            )}
          </div>
          <Map restaurants={[restaurant]} />
        </div>
      </div>
    </div>
  ) : null;
}
export default RestaurantDetails;
