import { useState } from 'react';
import './GivenReviewItem.css';

function GivenReviewItem(props) {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
  
  return (
    <div className="given-review-item-container">
      <div className="given-review-item-top-section">
        <div className="given-review-item-image-container">
          <img
            src= {props.src}
            alt="Profile"
            className="given-review-item-image"
          />
        </div>
        <div className="given-review-item-text-container">
          <p className="given-review-name">{props.name}</p>
          <h2 className="given-review-impression">{props.impression}</h2>
          <p className="given-review-date">{props.date}</p>
        </div>
      </div>
      <div className='given-review-item-bottom-section'>
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

export default GivenReviewItem;
