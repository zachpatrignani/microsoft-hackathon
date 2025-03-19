import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo-container">
        <img src="logo.png" alt="Logo" className="logo" />
        <span className="logo-text">Helping Hand</span>
      </Link>
      {/* <div className="navbar-logo">
        <Link to="/" className="logo-text"><img src="/logo.png" className="logo"/> Helping Hand</Link>
      </div> */}
      <div className="navbar-hamburger" onClick={toggleMenu}>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </div>
      <div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={toggleMenu}>Job Board</Link>
        <Link to="/add-job" onClick={toggleMenu}>+ Add Job</Link>
      </div>
    </nav>
  );
}

export default Navbar;