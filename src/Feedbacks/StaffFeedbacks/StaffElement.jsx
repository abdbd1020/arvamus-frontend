import React from 'react';
import { Link } from "react-router-dom";
import {FaComm, FaCommentAlt} from 'react-icons/fa';
import StarRating from '../../Dashborad/StarRating';
import './StaffElement.css'

function StaffElement(props) {

  return (
    <div className="staff-container">
      <div className="staff-image-container">
        <img src= {props.src} alt="Round Image" className="staff-round-image" />
      </div>
      <div className="staff-text-container">
        <div className="staff-text-block">
          <p className='staff-name'>{props.staffName}</p>
          <p className='staff-designation'>{props.staffDesignation}</p>
          <div className="icon-link-container">
            <FaCommentAlt className="link-icon" />
            <p className="feedback-link"><Link style={{color: '#4C3D3D'}} to="/indstaffrev">{props.reviewtext}</Link></p>
          </div>   
        </div>
        <div className='review-rating-container'>
            <div className="staff-review-block">
            <p className="staff-large-text">Overall Review Impression</p>
            <div className="staff-small-text">{props.impression}</div>
            </div>
            <div className="staff-review-block">
            <p className="staff-large-text">Overall rating</p>
            <StarRating className = 'staff-rating' rating={props.rating} />
            </div>
        </div>
      </div>
    </div>
  );
}

export default StaffElement;