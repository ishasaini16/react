import React from 'react';
import logo from '../../logo.svg';
//import Container from 'react-bootstrap/Container';
//import Nav from 'react-bootstrap/Nav';
//import Navbar from 'react-bootstrap/Navbar';
//import about from '../about';
//import NavDropdown from 'react-bootstrap/NavDropdown';
//import { Router,Route,Link } from "react-router-dom";
import {Link } from 'react-router-dom';

const styles = {
  headerstyle:{
    color:"white",
  },
  logo:{
    height:"50px",
  },
  logobox:{
    justifyAlign:"left",
  },
      

};


const NavBar = () => (
  <header className='navbar'>
      <div className="logobox" style={styles.logobox}><img src={logo} alt="logo" style={styles.logo}/></div>
      <div className='navbar__item'><Link to="/" style={styles.headerstyle}>Home</Link></div>
      <div className='navbar__item'><Link to="/About" style={styles.headerstyle} >About</Link></div>
      <div className='navbar__item'><Link to="/Contact" style={styles.headerstyle}>Contact</Link></div>
      <div className='navbar__item'><Link to="/Help" style={styles.headerstyle}>Help</Link></div>        
  </header>
);

const Header = () => (
  <div>
      <NavBar />
   </div>
);

export default Header;
