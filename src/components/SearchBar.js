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

  const handelSearch = (e) => {
    e.preventDefault();
    setInput(e.target.Value);
  };
  const handelSearchedRestaurants = () => {
    const searchedRestaurants = input.filter((restaurant) =>
      restaurant.name.toLowerCase().match(input)
    );
    setInput(searchedRestaurants);
    console.log(searchedRestaurants);
  };
  return (
    <div>
      <input
        type='text'
        placeholder='Find your restaurant'
        onChange={handelSearch}
        value={handelSearchedRestaurants}
      />
    </div>
  );
};

export default SearchBar;
