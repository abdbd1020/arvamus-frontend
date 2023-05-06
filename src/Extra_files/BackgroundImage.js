import React from 'react';
import backgroundImage from './Images/background.jpg';

function BackgroundImage(props) {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: props.opacity || 1,
      }}
    />
  );
}

export default BackgroundImage;