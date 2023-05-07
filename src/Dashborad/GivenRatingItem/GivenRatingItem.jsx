import React, { useState } from "react";
import StarRating from "../StarRating";
import "./GivenRatingItem.css";

function GivenRatingItem(props) {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="given-rating-item-container">
      <div className="given-rating-item-top-section">
        <div className="given-rating-item-image-container">
          <img
            src= {props.src}
            alt="Profile"
            className="given-rating-item-image"
          />
        </div>
        <div className="given-rating-item-text-container">
          <p className="given-rating-name">{props.name}</p>
          <p className="given-rating-date">{props.date}</p>
          <StarRating rating= {props.rating} />
          {/* <p className="name-show">{props.nameshow}</p> */}
        </div>
      </div>
      <div className="given-rating-item-bottom-section">
        <div
            className="toggle-details"
            onClick={toggleDetails}
        >
            {showDetails ? "Hide Details" : "See Details"}
        </div>
        {showDetails && (
          <div className="given-rating-item-details-container">
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
              <StarRating rating= {props.professionalism} />
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

export default GivenRatingItem;
