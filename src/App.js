import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    async function loadData() {
      const response = await fetch(
        'https://redi-final-restaurants.herokuapp.com/restaurants'
      );
      const data = await response.json();
      setData(data);
    }
    loadData();
  }, []);
  console.log(data);

  return (
    <div className='App'>
      {data.results.map((rest) => (
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
      ))}
    </div>
  );
}

export default App;
