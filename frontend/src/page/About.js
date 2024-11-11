import React, { useState } from 'react';
import HeaderAbout from './About/HeaderAbout';
import './About.css';
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import aboutpic from '../image/about.png';

const About = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu((preve) => !preve);
  };
  return (
    <div>
      <div className='container-color'>
        <div className='section'>
          <h1 className='about-header'>About Us</h1>
        </div>
      </div>
      <HeaderAbout />
      <div className='content'>
        <h2>From Our Farms to your Kitchen</h2>
        <p>
          In our quest to get people to eat the way our ancestors ate, we follow
          wholesome processes, while we strive to build a sustainable
          agro-ecosystem that ensures conservation and reduced carbon
          footprints. In the process, the food we produce is entirely natural,
          pesticide-free and organic.
        </p>
        <img
          src={aboutpic}
          alt='From Farms to Kitchens'
          className='info-image'
        />
        <p>
          “When tillage begins, other arts follow. The farmers, therefore, are
          the founders of human civilization.” — Daniel Webster
          <br />
          Our sustainable farming techniques benefit an entire community of
          organic farmers, from whom we source our healthy organic produce.
          These farmers, nearly 9000 of them, belong to diverse states like
          Uttar Pradesh, Maharashtra, Madhya Pradesh, Rajasthan, and Jammu &
          Kashmir, where they cultivate crops that are endemic to their
          geographies. This means, our produce can be traced back to precise
          regions, which in turn, reassures our customers of its purity. While
          we manage the operations of the farms that are spread across a total
          crop area 15,390 ha., we also empower our farmers with the know-how of
          organic farming. We invest in them, and train them to practice
          environmentally-friendly farming techniques and grow crops that meet
          world-class standards. We help them practice mindful transactions and
          consumption and assure them of fair market prices.
        </p>
      </div>
    </div>
  );
};

export default About;
