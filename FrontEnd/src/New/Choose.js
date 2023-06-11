import './Choose.css'; // Import the CSS file for styling
import React, { useEffect } from 'react';
import Aos from 'aos';
const Choose = () => {
    
useEffect(() => {
    
    Aos.init({ duration: 1700 });
  }, []);

  useEffect(() => {
    Aos.refresh();
  });
  return (
    <div className="why-choose-us">
      <h1 className="title">Why Choose Us ?</h1>
      <div className="points-container">
        <div className="point" data-aos="fade-up">
          <h2 className='in-title'>Simplified Data Management</h2>
          <p className='text'>Streamline your data operations with our user-friendly and intuitive CRUD functionality.</p>
        </div>
        <div className="point" data-aos="fade-up">
          <h2 className='in-title'>Efficiency at its Best</h2>
          <p className='text'>Save time and effort by easily creating, retrieving, updating, and deleting data records within a few clicks.</p>
        </div>
        <div className="point" data-aos="fade-up">
          <h2 className='in-title'>Data Security and Reliability</h2>
          <p className='text'>Rest assured knowing that your data is securely stored and backed up for peace of mind.</p>
        </div>
        <div className="point" data-aos="fade-up">
          <h2 className='in-title'>Customizable and Scalable</h2>
          <p className='text'>Tailor the system to your specific needs and easily scale as your business grows.</p>
        </div>
        <div className="point" data-aos="fade-up">
          <h2 className='in-title'>Improved Decision Making</h2>
          <p className='text'>Access comprehensive data insights and analytics to make informed business decisions.</p>
        </div>
        <div className="point" data-aos="fade-up">
          <h2 className='in-title'>Cost Savings</h2>
          <p className='text'>Reduce costs associated with manual data entry, storage, and management.</p>
        </div>
        <div className="point" data-aos="fade-up">
          <h2 className='in-title'>Collaboration and Teamwork</h2>
          <p className='text'>Enable seamless collaboration and data sharing among team members.</p>
        </div>
        <div className="point" data-aos="fade-up">
          <h2 className='in-title'>Quick and Easy Reporting</h2>
          <p className='text'>Generate detailed reports and visualizations to monitor performance and track key metrics.</p>
        </div>
      </div>
      <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Abel&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap" rel="stylesheet"></link>
    </div>
  );
};

export default Choose;
