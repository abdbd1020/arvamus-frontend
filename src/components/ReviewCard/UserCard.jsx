import React from "react";
import { Rating } from "../Rating/Rating";
import "./UserCard.css";
import { LetterImage } from "../ImageComponent/LetterImage";

export function UserCard(props) {
  const {
    information = {},
    onRatingButtonClick = () => {},
    onReviewButtonClick = () => {},
  } = props;
  const {
    name = props.information.firstname + " " + props.information.lastname,
    designation = props.information.designation || "Teacher",
    rating: rawRating = 3,
  } = information;
  let rating = rawRating > 5 ? 5 : rawRating;

  return (
    <div className="user-card">
      <div className="user-header">
        <div className="name-group">
          <LetterImage name={name} />
          <p className="info">
            <span className="name">{name}</span>
            <span className="designation">{designation}</span>
            <span className="user-Rating"> User Rating</span>
            <Rating rating={rating} />
          </p>
        </div>
      </div>
      <div className="user-details">
        <button onClick={onRatingButtonClick} className="share-group">
          <span>Give Rating</span>
        </button>
        <button onClick={onReviewButtonClick} className="share-group">
          <span>Give Review</span>
        </button>
      </div>
    </div>
  );
}
