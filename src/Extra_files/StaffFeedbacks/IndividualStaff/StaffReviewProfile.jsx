import React from 'react';
import { Link } from "react-router-dom";
import {FaStar, FaCommentAlt} from 'react-icons/fa';
import StarRating from '../../../Dashborad/StarRating';
import './StaffReviewProfile.css'

function StaffReviewProfile(props) {

  const buttontype = props.isbutton;

  return (
    <div className="staff-profile-container">
      <div className="staff-profile-image-container">
        <img src= {props.src} alt="Round Image" className="staff-profile-round-image" />
      </div>
      <div className="staff-profile-text-container">
        <div className="staff-profile-text-block">
          <p className='staff-profile-name'>{props.staffName}</p>
          <p className='staff-profile-designation'>{props.staffDesignation}</p>
          <div className="profile-icon-link-container">
            <FaCommentAlt className="profile-link-icon" />
            <p className="profile-feedback-link"><Link style={{color: '#4C3D3D'}} to="/reviewform">Give Review</Link></p>
          </div>
          <div className="profile-icon-link-container">
            <FaStar className="profile-link-icon" />
            <p className="profile-feedback-link"><Link style={{color: '#4C3D3D'}} to="/ratingform">Give Rating</Link></p>
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

export default StaffReviewProfile;