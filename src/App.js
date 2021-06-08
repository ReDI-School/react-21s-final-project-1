import './App.css';
import { React } from 'react';
import { useEffect, useState } from 'react';
import Resturant from './components/resturant';

function App() {
  const [data, setData] = useState(null);
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
      {data &&
        data.results.map((resturant) => (
          <Resturant key={resturant.id} details={resturant} />
        ))}
    </div>
  );
}

export default App;
