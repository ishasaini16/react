import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import about from '../about';
import NavDropdown from 'react-bootstrap/NavDropdown';
//import { Router,Route,Link } from "react-router-dom";
import {Link,Route, Routes} from 'react-router-dom';

const NavBar = () => (
  <header className='navbar'>
    <a href="/about">hgjhv</a>
      <div className='navbar__item'>Home</div>
      <div className='navbar__item'> <li><Link to="/about" activeClassName="active">Part A</Link></li></div>
      <div className='navbar__item'>Contact</div>
      <div className='navbar__item'>Help</div>        
  </header>
);

const Header = () => (
  <div>
      <NavBar />
   </div>
);

export default Header;
