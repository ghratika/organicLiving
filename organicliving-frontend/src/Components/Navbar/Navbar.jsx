import React from 'react';
import './Navbar.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { logo } from './Assets/logo.jpg';

const Navbaar = () => {
  return (
    <Navbar fixed='top' expand='md'>
      <Container className='navbar-container'>
        <Navbar.Brand to='/'>
          <img src={logo} className='logo-img' alt='' />
          <h1 className='logo'>organicLiving</h1>
        </Navbar.Brand>
        {/* nav-item */}
        <Navbar className='justify-content-between flex-grow-1 pe-3'>
          <Nav.Item>
            <Nav.Link href='#home'>Home</Nav.Link>
            {/* <span className='nav-item-home'>Home</span> */}
          </Nav.Item>
        </Navbar>
      </Container>
    </Navbar>
  );
};

export default Navbaar;
