// Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='footer shadow-md z-50'>
      <div className='back-to-top'>
        <a href='#top'>
          Back to the top <FaArrowUp />
        </a>
      </div>
      <div className='footer-links'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About Us</Link>
        <Link to='/contact'>Contact Us</Link>
        <Link to='menu/64bbdc60e221178febdc3435'>Menu</Link>
      </div>
      <div className='footer-copyright'>
        Copyright &copy; {new Date().getFullYear()} organicLiving
      </div>
    </footer>
  );
};

export default Footer;
