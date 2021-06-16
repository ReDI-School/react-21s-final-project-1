import "./normalize.css";
import './App.css';
import React, { useState, useEffect } from 'react';
import ListOfRestaurants from './components/ListOfRestaurants';
import Navbar from './components/Navbar';
import About from './components/About';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RestaurantDetails from './components/RestaurantDetails';

function App() {
  // Dark Mode and saving it on the Browser :)
  const getTheme = () => {
    return JSON.parse(localStorage.getItem('darkMode')) || false;
  };
  const [isDarkTheme, setDarkTheme] = useState(getTheme());
  useEffect(() => {
    // here how we fixed to apply the background color to the hole body
    document.body.style.backgroundColor = isDarkTheme
      ? 'rgb(82, 80, 80)'
      : 'rgb(224, 215, 215)';
    localStorage.setItem('darkMode', JSON.stringify(isDarkTheme));
  }, [isDarkTheme]);

  console.log(setDarkTheme);
  return (
    <Router>
      <div className={isDarkTheme ? 'dark' : ''}>
        <Navbar
          isDarkTheme={isDarkTheme}
          setDarkTheme={(dark) => setDarkTheme(dark)}
        />

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
