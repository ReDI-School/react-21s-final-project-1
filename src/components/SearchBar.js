import React, { useEffect, useState } from 'react';

const SearchBar = () => {
  const [input, setInput] = useState('');

  useEffect(() => {
    async function loadData() {
      const response = await fetch(
        'https://redi-final-restaurants.herokuapp.com/restaurants/'
      );
      const responseJson = await response.json();
      setInput(responseJson.results);
    }
    loadData();
  }, []);
  console.log(input);
  const handelSearchedRestaurants = (e) => {
    const search = e.target.value;

    const searchedRestaurants = input.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(search.toLowerCase())
    );
    setInput(searchedRestaurants);
    console.log(searchedRestaurants);
  };
  return (
    <div>
      <input
        type='text'
        placeholder='Find your restaurant'
        onChange={handelSearchedRestaurants}
        // value={handelSearchedRestaurants}
      />
    </div>
  );
};
export default SearchBar;
