import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Localista from '../assets/Localista.jpg';
import sitora from '../assets/sitora.jpg';
import amjad from '../assets/amjad.jpeg';

const About = () => {
  return (
    <div className='about-page'>
      <h1 className='about-title'>Localista Group</h1>
      <div className='restaurant-owners'>
        <img src={Localista} alt='' />
        <div className='restaurant-owner-info'>
          <p></p>
        </div>
      </div>
      <div className='project-info'>
        <h1>the Final project of the React.js Redi-school course </h1>
        <h2>This project is made by:</h2>
      </div>
      <div className='app-owner'>
        <div className='Amjad'>
          <img src={amjad} alt='' className='owner-img' />
          <div className='dev-info'>
            <h1>Amjad Oudeh</h1>
            <a href='https://github.com/Amjadoudeh'>
              <FaGithub size={30} className='github' />
            </a>
            <a href='https://www.linkedin.com/in/amjad-oudeh-541418167/'>
              <FaLinkedin size={30} className='github' />
            </a>
          </div>
        </div>
        <div className='Sitora'>
          <img src={sitora} alt='' />
          <div className='dev-info'>
            <h1>Sitora Sodatkadamova</h1>
            <a href='https://github.com/Sita22'>
              <FaGithub size={30} className='github' />
            </a>
            <a href='https://www.linkedin.com/in/sitora-sodatkadamova-b84989124/'>
              <FaLinkedin size={30} className='github' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
