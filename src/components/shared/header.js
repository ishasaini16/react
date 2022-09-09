import React from 'react';
//import Container from 'react-bootstrap/Container';
//import Nav from 'react-bootstrap/Nav';
//import Navbar from 'react-bootstrap/Navbar';
//import about from '../about';
//import NavDropdown from 'react-bootstrap/NavDropdown';
//import { Router,Route,Link } from "react-router-dom";
import {Link } from 'react-router-dom';

const NavBar = () => (
  <header className='navbar'>
   
      <div className='navbar__item'><Link to="/">Home</Link></div>
      <div className='navbar__item'><Link to="/About">About</Link></div>
      <div className='navbar__item'><Link to="/Contact">Contact</Link></div>
      <div className='navbar__item'><Link to="/Help">Help</Link></div>        
  </header>
);

const Header = () => (
  <div>
      <NavBar />
   </div>
);

export default Header;
