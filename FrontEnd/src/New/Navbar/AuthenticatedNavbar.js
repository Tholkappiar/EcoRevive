import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import logo from '../Assets/ecorevive logo.png';

function AuthenticatedNavbar() {
  const handleLogin = () => {
    // Handle login logic
  };

  const handleSignup = () => {
    // Handle signup logic
    Navigate('/Signup');
  };

  return (
    <nav className="home-navbar" style={{backgroundColor: "black"}}>
      <div className="home-nav-container">
        <Link to="/" className="home-logo">
          <img alt="logo" src={logo} style={{ width: '50px' }} />
          <span className="home-logo-name">EcoRevive</span>
        </Link>
        <div className="home-nav-links">
          <Link to="/">
            <button onClick={handleLogin} className="home-nav-link">
              Home
            </button>
          </Link>
          <Link to="/">
            <button onClick={handleSignup} className="home-nav-link">
              Logout
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default AuthenticatedNavbar;
