import { useState } from 'react';
import './PersonItem.css';
import StarRating from '../StarRating';
import { Link } from "react-router-dom";
import {FaStar, FaCommentAlt} from 'react-icons/fa';

function PersonItem(props) {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
  
  return (
    <div className="person-item-container">
      <div className="person-item-top-section">
        <div className="person-item-image-container">
          <img
            src= {props.src}
            alt="Profile"
            className="person-item-image"
          />
        </div>
        <div className="person-item-text-container">
          <h2 className="person-name">{props.name}</h2>
          <p className="person-designation">{props.designation}</p>
          <StarRating rating= {props.rating} />
        </div>
      </div>
      <div className='person-item-bottom-section'>
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
                height: showDetails ? "auto" : "0",
                overflow: "hidden",
                transition: "height 10s" 
            }}
        >
            <div className="person-icon-link-container">
                <FaCommentAlt className="person-link-icon" />
                <p className="person-feedback-link"><Link style={{color: '#4C3D3D'}} to="/reviewform">Give Review</Link></p>
            </div>
            <div className="person-icon-link-container">
                <FaStar className="person-link-icon" />
                <p className="person-feedback-link"><Link style={{color: '#4C3D3D'}} to="/ratingform">Give Rating</Link></p>
            </div>    
         </div>
      </div>
    </div>
  );
}

export default PersonItem;
