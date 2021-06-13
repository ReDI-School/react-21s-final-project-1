import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import ListOfRestaurants from './ListOfRestaurants';

const SearchPlace = (props) => {
  const [input, setInput] = useState('');
  const [resturantListDefault, setResturantListDefault] = useState();
  const [resturantList, setResturantList] = useState();

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

  const updateInput = async (input) => {
     const filtered = resturantListDefault.filter(results => {
      return results.name.toLowerCase().includes(input.toLowerCase())
     })
     setInput(input);
     setResturantList(filtered);
  }

  //useEffect( () => {fetchData()},[]);
	
  return (
    <>
      <SearchBar 
       input={input} 
       onChange={updateInput}
      />
      <ListOfRestaurants resturantList={resturantList}/>
    </>
   );
}

export default SearchPlace