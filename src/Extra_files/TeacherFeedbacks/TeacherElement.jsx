import React from 'react';
import { Link } from "react-router-dom";
import {FaComm, FaCommentAlt} from 'react-icons/fa';
import StarRating from '../../Dashborad/StarRating';
import './TeacherElement.css'

function TeacherElement(props) {

  function handleClick() {
    window.location.href = "./addreview";
  }

  const buttontype = props.isbutton;

  return (
    <div className="teacher-container">
      <div className="teacher-image-container">
        <img src= {props.src} alt="Round Image" className="teacher-round-image" />
      </div>
      <div className="teacher-text-container">
        <div className="teacher-text-block">
          <p className='teacher-name'>{props.teacherName}</p>
          <p className='teacher-designation'>{props.teacherDesignation}</p>
          <div className="icon-link-container">
            <FaCommentAlt className="link-icon" />
            <p className="feedback-link"><Link style={{color: '#4C3D3D'}} to="/indteacherev">{props.reviewtext}</Link></p>
          </div>   
          {buttontype && <button className='review-button' onClick={handleClick}>{props.buttontext}</button>}
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

export default TeacherElement;