import React from 'react';
import { Link } from "react-router-dom";
import {FaStar, FaCommentAlt} from 'react-icons/fa';
import StarRating from '../../../Dashborad/StarRating';
import './TeacherReviewProfile.css'

function TeacherReviewProfile(props) {

  function handleClick() {
    window.location.href = "./addreview";
  }

  const buttontype = props.isbutton;

  return (
    <div className="teacher-profile-container">
      <div className="teacher-profile-image-container">
        <img src= {props.src} alt="Round Image" className="teacher-profile-round-image" />
      </div>
      <div className="teacher-profile-text-container">
        <div className="teacher-profile-text-block">
          <p className='teacher-profile-name'>{props.teacherName}</p>
          <p className='teacher-profile-designation'>{props.teacherDesignation}</p>
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
            <div className="teacher-review-block">
            <p className="teacher-large-text">Overall Review Impression</p>
            <div className="teacher-small-text">{props.impression}</div>
            </div>
            <div className="teacher-review-block">
            <p className="teacher-large-text">Overall rating</p>
            <StarRating className = 'teacher-rating' rating={props.rating} />
            </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherReviewProfile;