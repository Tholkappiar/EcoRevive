import React from 'react';
import './Aim.css';
import volunteer from './Assets/volunteering-bg-remove.png';
import recycle from './Assets/recycle-bg-removed.png';

const Aim = () => {
  return (
    <div className="container">
      <div className='motto'>
        Our Motto !!
      </div>
      <div className="section">
        <div className="left">
          <img  className='images' src={volunteer} alt="Image 1" />
        </div>
        <div className="right">
          <p className='aim-text' style={{color: "#40513B"}}>Our cutting-edge technology optimizes waste collection and disposal, minimizing environmental harm. By leveraging advanced analytics, we ensure that resources are allocated strategically, reducing waste and maximizing recycling rates.</p>
        </div>
      </div>
      <div className="section">
        <div className="left">
          <img className='images' src={recycle} alt="Image 2" />
        </div>
        <div className="right">
          <p className='aim-text' style={{color: "#40513B"}}>Our cutting-edge technology optimizes waste collection and disposal, minimizing environmental harm. By leveraging advanced analytics, we ensure that resources are allocated strategically, reducing waste and maximizing recycling rates.</p>
        </div>
      </div>
      <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap" rel="stylesheet"></link>
    </div>
  );
}

export default Aim;
