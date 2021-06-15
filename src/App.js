import './App.css';
import { React, useState, useEffect } from 'react';
import ListOfRestaurants from './components/ListOfRestaurants';
import Navbar from './components/Navbar';
import About from './components/About';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RestaurantDetails from './components/RestaurantDetails';
import { CgSun } from 'react-icons/cg';
import { HiMoon } from 'react-icons/hi';
import styled from 'styled-components';

const Toggle = styled.button`
  cursor: pointer;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: none;
  &:focus {
    outline: none;
  }
  transition: all 0.5s ease;
`;

function App() {
  // Dark Mode and saving it on the Browser :)
  const getTheme = () => {
    return JSON.parse(localStorage.getItem('theme')) || false;
  };
  const [theme, setTheme] = useState(getTheme());
  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  const icon = () => {
    theme === 'dark' ? <CgSun size={40} /> : <HiMoon size={40} />;
  };
  return (
    <Router>
      <div className={theme ? 'dark' : ''}>
        <Toggle onClick={() => setTheme(!theme)} checked={theme ? 'true' : ''}>
          {icon}
        </Toggle>
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
