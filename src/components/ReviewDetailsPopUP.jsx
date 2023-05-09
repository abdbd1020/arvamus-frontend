import React from "react";
import { Rating } from "./Rating";

export function ReviewDetailsPopUP(props) {
  const { currentReviewLoaded = {}, onButtonClick = () => {} } = props;

  const {
    name = "Alice Banks",
    designation = "Lecturer, ICT Department",
    rating = 3,
    reviewDescription = "The device has a clean design, and the metal housing feels sturdy in my hands. Soft rounded corners make it a pleasure to look at.",
    reviewDate = "Feb 13, 2021",
    reviewDetails = "See More Details",
    detaisReating = [
      { title: "Battery", rating: Math.random() * 5 },
      { title: "Camera", rating: Math.random() * 5 },
      { title: "Display", rating: Math.random() * 5 },
      { title: "Value for Money", rating: Math.random() * 5 },
      { title: "Performance", rating: Math.random() * 5 },
    ],
  } = currentReviewLoaded;

  // rating = rating > 5 ? 5 : rating;

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
          <i class="fa fa-times" aria-hidden="true"></i>
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
            <h3 className="review-description-title">Full Review</h3>
            <p className="review-description-details">{reviewDescription}</p>
          </div>
          <span className="review-date">Review Date {reviewDate}</span>
        </div>
        <div className="details-rating">
          <div className="rating-wrapper">
            <span className="rating-title">Average Rating</span>
            <div className="rating-inner-wrapper">
              {/* rating will be 2 digit floot number */}
              <span className="rating-text">{rating.toFixed(1)}</span>
              {<Rating rating={rating} />}
            </div>
          </div>
          <div className="review-details-main-wrapper">
            <h3 className="details-rating-heading">Details Rating</h3>
            <div className="details-rating-wrapper">
              {detaisReating.map((item, index) => {
                return (
                  <div key={index} className="details-rating-item">
                    <span className="details-rating-item-title">
                      {item.title}
                    </span>
                    <Rating rating={item.rating} />
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
