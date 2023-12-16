import React from 'react';
import './Background.scss';
import backgroundImage from './../../assets/images/appBackground.jpg';

const Background = () => {
  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`, width: '100vw', height: '100vh' }}>
    </div>
  );
};

export default Background;