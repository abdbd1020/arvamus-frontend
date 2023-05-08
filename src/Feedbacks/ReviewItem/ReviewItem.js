import { useState } from 'react';
import './ReviewItem.css';

function ReviewItem(props) {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
  
  return (
    <div className="feedback-item-container">
      <div className="item-top-section">
        <div className="item-image-container">
          <img
            src= {props.src}
            alt="Profile"
            className="item-image"
          />
        </div>
        <div className="item-text-container">
          <h2 className="impression">{props.impression}</h2>
          <p className="date">{props.date}</p>
        </div>
      </div>
      <div className='review-item-bottom-section'>
        <div
            className="toggle-details"
            onClick={toggleDetails}
        >
            {showDetails ? "Hide Details" : "See Details"}
        </div>
        <div 
            className="details-section"
            style={{ 
                display: showDetails ? "block" : "none",
                // height: showDetails ? "auto" : "0",
                // overflow: "hidden",
                // transition: "height 10s" 
            }}
        >
            <p>{props.reviewText}</p>
        </div>
      </div>
    </div>
  );
}

export default ReviewItem;
