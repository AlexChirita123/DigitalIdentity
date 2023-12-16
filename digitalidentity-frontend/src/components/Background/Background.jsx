import React from 'react'
import './Background.scss'
import { useSpring, animated } from 'react-spring'

const Background = () => {
    return (
      <div className="hexagon-container">
        {[...Array(50)].map((_, index) => (
          <div key={index} className="hexagon" />
        ))}
      </div>
    );
  };

export default Background;