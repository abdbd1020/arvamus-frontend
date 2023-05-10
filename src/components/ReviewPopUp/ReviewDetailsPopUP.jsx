import React from "react";
import { Rating } from "../Rating/Rating";
import "./ReviewDetailsPopUP.css";

export function ReviewDetailsPopUP(props) {
  const {
    currentReviewLoaded = {},
    onButtonClick = () => {},
    onReviewEdit = () => {},
    onRatingEdit = () => {},
    isEditable = false,
  } = props;
  const {
    name = "Alice Banks",
    designation = "Lecturer, ICT Department",
    rating = 3,
    reviewDescription = "The device has a clean design, and the metal housing feels sturdy in my hands. Soft rounded corners make it a pleasure to look at.",
    reviewDate = "Feb 13, 2021",
    detailsRating = [
      { title: "Responsibility", rating: Math.random() * 5 },
      { title: "Behavior", rating: Math.random() * 5 },
      { title: "Professionalism", rating: Math.random() * 5 },
      { title: "Proficiency", rating: Math.random() * 5 },
      { title: "Management", rating: Math.random() * 5 },
    ],
  } = currentReviewLoaded;

  return (
    <>
      <div
        className="review-details-popIn-overlay"
        onClick={onButtonClick}></div>
      <div className="review-details-popIn">
        <button
          type="close"
          aria-label="close Button"
          className="close-btn"
          onClick={onButtonClick}>
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
        <div className="review-details-popIn-header">
          <div className="main-information">
            <div className="initials">A</div>
            <p className="info">
              <span className="name">{name}</span>
              <span className="designation">{designation}</span>
            </p>
          </div>
          <div className="review-description">
            <div className="review-description-title-wrapper">
              <h3 className="review-description-title">Full Review</h3>
              {isEditable && (
                <button
                  type="button"
                  aria-label="edit review button"
                  className="edit-btn edit-review"
                  onClick={onReviewEdit}>
                  <i className="fa-regular fa-pen-to-square"></i>
                </button>
              )}
            </div>
            <p className="review-description-details">{reviewDescription}</p>
          </div>
          <span className="review-date">Review Date {reviewDate}</span>
        </div>
        <div className="details-rating">
          <div className="rating-wrapper">
            <span className="rating-title">Average Rating</span>
            <div className="rating-inner-wrapper">
              <span className="rating-text">{rating.toFixed(1)}</span>
              {<Rating rating={rating} />}
            </div>
          </div>
          <div className="details-rating-main-wrapper">
            <div className="rating-description-title-wrapper">
              <h3 className="details-rating-heading">Details Rating</h3>
              {isEditable && (
                <button
                  type="button"
                  aria-label="edit rating button"
                  className="edit-btn edit-review"
                  onClick={onRatingEdit}>
                  <i className="fa-regular fa-pen-to-square"></i>
                </button>
              )}
            </div>
            <div className="details-rating-wrapper">
              {detailsRating.map((item, index) => {
                return (
                  <div key={index} className="details-rating-item">
                    <span className="details-rating-item-title">
                      {item.title}
                    </span>
                    <Rating key={index} rating={item.rating} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
