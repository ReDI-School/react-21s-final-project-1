import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <h3>Localista</h3>
      <ul className='Nav-links'>
        <Link to='/ListOfRestaurants'>
          <li className='link'>Home</li>
        </Link>

        <Link to='/About'>
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
