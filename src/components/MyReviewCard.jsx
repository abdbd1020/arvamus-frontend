import React from "react";
import { Rating } from "./Rating";

export function MyReviewCard(props) {
  let {
    name = "Alice Banks",
    designation = "Lecturer, ICT Department",
    rating = 3,
    reviewDescription = "The device has a clean design, and the metal housing feels sturdy in my hands. Soft rounded corners make it a pleasure to look at.",
    reviewDate = "Feb 13, 2021",
    reviewDetails = "See More Details",
    onButtonClick = () => {},
  } = props;
  rating = rating > 5 ? 5 : rating;

  return (
    <div className="review-card">
      <div className="review-header">
        <div className="name-group">
          <div className="initials">A</div>
          <p className="info">
            <span className="name">{name}</span>
            <span className="designation">{designation}</span>
          </p>
        </div>
        <Rating rating={rating} />
      </div>
      <div className="review-description">{reviewDescription}</div>
      <div className="review-details">
        <div className="review-date">{reviewDate}</div>
        <button onClick={onButtonClick} className="share-group">
          <i className="fa fa-info-circle"></i>
          <span>{reviewDetails}</span>
        </button>
      </div>
    </div>
  );
}
