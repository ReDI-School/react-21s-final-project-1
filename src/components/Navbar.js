import React from 'react';
import { Link } from 'react-router-dom';
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

const Navbar = ({ isDarkTheme, setDarkTheme }) => {
  // Dark Mode and saving it on the Browser :)

  console.log(setDarkTheme);
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
        <Toggle
          onClick={() => setDarkTheme(!isDarkTheme)}
          checked={isDarkTheme}>
          {!isDarkTheme ? <CgSun size={40} /> : <HiMoon size={40} />}
        </Toggle>
      </ul>
    </nav>
  );
};

export default Navbar;
