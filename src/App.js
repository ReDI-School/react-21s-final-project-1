import './App.css';
import { React } from 'react';
import ListOfRestaurants from './components/ListOfRestaurants';
import Navbar from './components/Navbar';
import About from './components/About';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RestaurantDetails from './components/RestaurantDetails';

function App() {
  return (
    <Router>
      <div className='App'>
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
