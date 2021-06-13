import React from 'react';
import ListOfRestaurants from './ListOfRestaurants';

const SearchBar = ({keyword, setKeyword}) => {
    //const BarStyling = {width: "20rem", background: "#FFFFFF", border: "none", padding: "1rem" }
    
        return (
            <input className="Search-bar"
            //style={BarStyling}
            key="random1"
            value={keyword}
            placeholder={"Search local restaurant"}
            onChange={(e) => setKeyword(e.target.value)}
            />
            
        );
    }

export default SearchBar;