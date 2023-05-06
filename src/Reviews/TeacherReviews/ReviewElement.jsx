import React from 'react';
import './ReviewElement.css'; // Import your CSS file
import teacherImage from '../../Images/teacher4.png'

function ReviewElement(props) {
  return (
    <div className="review-elment-container">
      <div className="review-element-image-container">
        <img src= {props.src} alt="alt-text" className="round-image" />
      </div>
      <div className='paragraph-container'>
        <p>{props.paragraph}</p>
      </div>
    </div>
  );
}

export default ReviewElement;