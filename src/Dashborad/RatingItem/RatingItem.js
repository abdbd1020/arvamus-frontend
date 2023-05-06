import React, { useState } from "react";
import StarRating from "../StarRating";
import "./RatingItem.css";

function RatingItem(props) {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="rating-item-container">
      <div className="rating-item-top-section">
        <div className="rating-item-image-container">
          <img
            src= {props.src}
            alt="Profile"
            className="rating-item-image"
          />
        </div>
        <div className="rating-item-text-container">
          <StarRating rating= {props.rating} />
          <p className="date">{props.date}</p>
          <p className="name-show">{props.nameshow}</p>
        </div>
      </div>
      <div className="rating-item-bottom-section">
        <div
            className="toggle-details"
            onClick={toggleDetails}
        >
            {showDetails ? "Hide Details" : "See Details"}
        </div>
        {showDetails && (
          <div className="rating-item-details-container">
            <div className="details-row">
              <div className="rating-details-text">Responsibility:</div>
              <StarRating rating= {props.responsibility} />
            </div>
            <div className="details-row">
              <div className="rating-details-text">Behavior:</div>
              <StarRating rating= {props.behavior} />
            </div>
            <div className="details-row">
              <div className="rating-details-text">Proffesionalism:</div>
              <StarRating rating= {props.responsibility} />
            </div>
            <div className="details-row">
              <div className="rating-details-text">Proficiency:</div>
              <StarRating rating= {props.proficiency} />
            </div>
            <div className="details-row">
              <div className="rating-details-text">Management:</div>
              <StarRating rating= {props.management} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default RatingItem;
