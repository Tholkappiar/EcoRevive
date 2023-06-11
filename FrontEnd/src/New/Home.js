import React, { useEffect } from 'react';
import './Home.css';
import { Outlet, Link, Navigate } from 'react-router-dom';
import About from './About';
import logo from './Assets/ecorevive logo.png';
import Aim from './Aim';
import Choose from './Choose';
import Navbar from './Navbar';

function Home() {
  const handleLogin = () => {
    
  };

  const handleSignup = () => {
    Navigate('/Signup');
  };

  useEffect(() => {
    const navbar = document.querySelector('.home-navbar');

    const changeNavbarColor = () => {
      if (window.scrollY > 500) {
        navbar.classList.add('scroll');
      } else {
        navbar.classList.remove('scroll');
      }
    };

    window.addEventListener('scroll', changeNavbarColor);

    return () => {
      window.removeEventListener('scroll', changeNavbarColor);
    };
  }, []);

  return (
    <div className="home-app">
      <header className="home-header">
        <nav className="home-navbar">
          <div className="home-nav-container">
            <Link to="/" className="home-logo">
              <img alt="logo" src={logo} style={{ width: '50px' }} />
              <span className="home-logo-name">EcoRevive</span>
            </Link>
            <div className="home-nav-links">
              <Link to="/login">
                <button className="home-nav-link">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button className="home-nav-link">
                  Signup
                </button>
              </Link>
            </div>
          </div>
        </nav>
        <div className="home-content">
          <h1 className="home-logo-page-name">EcoRevive</h1>
        </div>
        <div className='home-logo-page-name-para'>
        Our cutting-edge technology optimizes waste collection and disposal, minimizing environmental harm. 
        By leveraging advanced analytics, we ensure that resources are allocated strategically, reducing waste and maximizing recycling rates.
        </div>
      </header>
      <Outlet />
      <Aim/>
      <Choose/>
      <About/>
      <link href="https://fonts.googleapis.com/css2?family=Poppins&family=Ubuntu:wght@500&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet"></link>
    </div>
  );
}

export default Home;
