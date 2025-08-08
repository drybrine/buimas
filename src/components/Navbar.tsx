import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-content">
        <div className="logo">
          <img src={logo} alt="Bu Imas Logo" />
        </div>
        <nav className="nav-menu desktop-menu">
          <NavLink to="/" end className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>HOME</NavLink>
          <NavLink to="/profil" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>PROFIL</NavLink>
          <NavLink to="/product" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>PRODUCT</NavLink>
          <NavLink to="/contact" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>CONTACT</NavLink>
        </nav>
        <MobileMenu />
      </div>
    </header>
  );
}
