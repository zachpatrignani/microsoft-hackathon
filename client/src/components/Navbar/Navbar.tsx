import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLDivElement>(null); // Ref for the hamburger icon

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    // Check if the click is outside both the menu and the hamburger
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target as Node) &&
      hamburgerRef.current &&
      !hamburgerRef.current.contains(event.target as Node)
    ) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => {
    // Close the menu but allow navigation to proceed
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <NavLink to="/" className="logo-container">
        <img src="planet_logo.png" alt="Logo" className="logo" />
        <span className="logo-text">Interstellar Jobs</span>
      </NavLink>
      <div
        className="navbar-hamburger"
        onClick={toggleMenu}
        ref={hamburgerRef} // Attach ref to the hamburger icon
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </div>
      <div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`} ref={menuRef}>
        <NavLink
          to="/job-board"
          className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}
          onClick={handleLinkClick} // Close menu when a link is clicked
        >
          Job Board
        </NavLink>
        <NavLink
          to="/add-job"
          className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}
          onClick={handleLinkClick} // Close menu when a link is clicked
        >
          + Add Job
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;