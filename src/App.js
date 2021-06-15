import './App.css';
import { React, useState, useEffect } from 'react';
import ListOfRestaurants from './components/ListOfRestaurants';
import Navbar from './components/Navbar';
import About from './components/About';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RestaurantDetails from './components/RestaurantDetails';

function App() {
  // Dark Mode and saving it on the Browser :)
  const getTheme = () => {
    return JSON.parse(localStorage.getItem('theme')) || false;
  };
  const [theme, setTheme] = useState(getTheme());
  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);
  return (
    <Router>
      <div className={theme ? 'dark' : ''}>
        <input
          type='checkbox'
          onChange={() => setTheme(!theme)}
          checked={theme ? 'true' : ''}
        />
        <Navbar />

        <Switch>
          <Route path='/' exact component={ListOfRestaurants} />
          <Route
            path='/ListOfRestaurants'
            exact
            component={ListOfRestaurants}
          />
          <Route
            className='restaurant-details'
            path='/ListOfRestaurants/:id'
            component={RestaurantDetails}
          />
          <Route path='/About' component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
