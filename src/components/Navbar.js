import React from 'react';
import { Link } from 'react-router-dom';
import { CgSun } from 'react-icons/cg';
import { HiMoon } from 'react-icons/hi';
import styled from 'styled-components';

const Toggle = styled.button`
  cursor: pointer;
  // height: 50px;
  margin-right: -135%;
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
      <ul className='Nav-links'>
        <Link to='/ListOfRestaurants'>
          <li className='logo-style'>Localista</li>
        </Link>
      </ul>
      <ul className='about-dark'>
        <Link to='/About'>
          <li className='about-navbar'>About</li>
        </Link>
        <Toggle
          onClick={() => setDarkTheme(!isDarkTheme)}
          checked={isDarkTheme}>
          {!isDarkTheme ? (
            <HiMoon size={25} color={'#000'} />
          ) : (
            <CgSun size={25} />
          )}
        </Toggle>
      </ul>
    </nav>
  );
};

export default Navbar;
