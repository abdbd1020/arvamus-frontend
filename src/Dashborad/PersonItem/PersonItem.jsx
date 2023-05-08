import { useState } from 'react';
import './PersonItem.css';
import StarRating from '../../General/StarRating';
import { Link } from "react-router-dom";
import {FaStar, FaCommentAlt} from 'react-icons/fa';

function PersonItem(props) {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
  
  return (
    <div className="item-container">
      <div className="item-top-section">
        <div className="item-image-container">
          <img
            src= {props.src}
            alt="Profile"
            className="item-image"
          />
        </div>
        <div className="item-text-container">
          <h2 className="name">{props.name}</h2>
          <p className="designation">{props.designation}</p>
          <StarRating rating= {props.rating} />
        </div>
       </div>
        <div className="person-details-section">
            <div className="person-icon-link-container">
                <FaCommentAlt className="person-link-icon" />
                <Link className='person-feedback-link' style={{color: '#4C3D3D'}} to="/reviewform">Give Review</Link>
            </div>
            <div className="person-icon-link-container">
                <FaStar className="person-link-icon" />
                <Link className='person-feedback-link' style={{color: '#4C3D3D'}} to="/ratingform">Give Rating</Link>
            </div>    
         </div>
    </div>
  );
}

export default PersonItem;
