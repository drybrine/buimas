import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Close menu when clicking outside or pressing escape
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Prevent body scroll when menu is open
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <button 
        className="mobile-menu-toggle"
        onClick={toggleMenu}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        <span className={`hamburger ${isOpen ? 'active' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      <nav 
        className={`mobile-nav-menu ${isOpen ? 'active' : ''}`}
        aria-hidden={!isOpen}
      >
        <NavLink 
          to="/" 
          end 
          className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
          onClick={closeMenu}
        >
          HOME
        </NavLink>
        <NavLink 
          to="/profil" 
          className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
          onClick={closeMenu}
        >
          PROFIL
        </NavLink>
        <NavLink 
          to="/product" 
          className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
          onClick={closeMenu}
        >
          PRODUCT
        </NavLink>
        <NavLink 
          to="/contact" 
          className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
          onClick={closeMenu}
        >
          CONTACT
        </NavLink>
      </nav>

      {isOpen && (
        <div 
          className="mobile-menu-overlay" 
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
}