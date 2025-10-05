import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <nav className={`navbar ${isHomePage ? 'navbar-with-animation' : 'navbar-static'}`}>
      <div className="nav-container">
        <div className="nav-brand">
          <span className="brand-text">Credit Repair Portfolio</span>
        </div>
        <div className="nav-links">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/services" 
            className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`}
          >
            Services
          </Link>
          <Link 
            to="/letters" 
            className={`nav-link ${location.pathname === '/letters' ? 'active' : ''}`}
          >
            Letters
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
