import React from "react";
import { Rating } from "./Rating";

export function ReviewDetailsPopUP(props) {
  let {
    name = "Alice Banks",
    designation = "Lecturer, ICT Department",
    rating = 3,
    reviewDescription = "The device has a clean design, and the metal housing feels sturdy in my hands. Soft rounded corners make it a pleasure to look at.",
    reviewDate = "Feb 13, 2021",
    reviewDetails = "See More Details",
    detaisReating = [
      { title: "Battery", rating: 4 },
      { title: "Camera", rating: 3 },
      { title: "Display", rating: 4 },
      { title: "Value for Money", rating: 4 },
      { title: "Performance", rating: 4 },
    ],
    onButtonClick = () => {},
  } = props;
  rating = rating > 5 ? 5 : rating;

  return (
    <>
      <div
        className="review-details-popIn-overlay"
        onClick={onButtonClick}></div>
      <div className="review-details-popIn">
        <button className="close-btn" onClick={onButtonClick}>
          ❌
        </button>
        <div className="review-details-popIn-header">
          <div className="main-information">
            <div className="initials">A</div>
            <p className="info">
              <span className="name">{name}</span>
              <span className="designation">{designation}</span>
            </p>
          </div>
          <div className="rating-wrapper">
            <span className="rating-title">Average Rating</span>
            {<Rating rating={rating} />}
          </div>
        </div>
        <div className="details-rating">
          <h1 className="details-rating-heading">Details Rating</h1>
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
        <div className="review-description">{reviewDescription}</div>
        <div className="review-details">
          <div className="review-date">{reviewDate}</div>
          <button onClick={onButtonClick} className="share-group">
            <i className="fa fa-info-circle"></i>
            <span>{reviewDetails}</span>
          </button>
        </div>
      </div>
    </>
  );
}
