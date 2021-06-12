import './App.css';
import { React } from 'react';
import ListOfRestaurants from './components/ListOfRestaurants';
import Navbar from './components/Navbar';
import About from './components/About';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Restaurant from './components/Restaurant';
import RestaurantDetails from './components/RestaurantDetails';

function App() {
  // const [data, setData] = useState(null);
  // useEffect(() => {
  //   async function loadData() {
  //     const response = await fetch(
  //       'https://redi-final-restaurants.herokuapp.com/restaurants'
  //     );
  //     const data = await response.json();
  //     setData(data);
  //   }
  //   loadData();
  // }, []);
  // console.log(data);

  // const Home = () => (
  //   <div>
  //     {data &&
  //       data.results.map((resturant) => (
  //         <Restaurants key={resturant.id} details={resturant} />
  //       ))}
  //   </div>
  // );

  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route
            path='/ListOfRestaurants'
            exact
            component={ListOfRestaurants}
          />
          <Route path='/ListOfRestaurants/:id' component={RestaurantDetails} />
          <Route path='/About' component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
