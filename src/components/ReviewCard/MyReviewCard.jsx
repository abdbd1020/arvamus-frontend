import React from "react";
import { Rating } from "../Rating/Rating";
import "./MyReviewCard.css";
import { LetterImage } from "../ImageComponent/LetterImage";

export function MyReviewCard(props) {
  console.log(props)
  const { information = {}, onButtonClick = () => {} } = props;
  const {
    name = "Alice Banks",
    designation = "Lecturer, ICT Department",
    rating: rawRating = 3,
    reviewDescription = "The device has a clean design, and the metal housing feels sturdy in my hands. Soft rounded corners make it a pleasure to look at.",
    reviewDate = "Feb 13, 2021",
    reviewDetails = "See More Details",
  } = information;
  let rating = rawRating > 5 ? 5 : rawRating;

  return (
    <div className="review-card">
      <div className="review-header">
        <div className="name-group">
          <LetterImage name={name} />
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
