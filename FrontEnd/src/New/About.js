import React, { useEffect } from 'react';
import './About.css';
import Aos from 'aos';

function About() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  useEffect(() => {
    Aos.refresh();
  });
  return (
    <div className="About">
      <header className="About-header">
        <div className="about-content">
          <h1 className='about-title' data-aos="fade-up">About Us</h1>
          <p data-aos="fade-up">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ullamcorper elit vel enim ullamcorper, vitae sodales urna accumsan.</p>
        </div>
      </header>
    </div>
  );
}

export default About;
