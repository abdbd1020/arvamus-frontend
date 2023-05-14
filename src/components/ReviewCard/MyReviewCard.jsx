import React from "react";
import { Rating } from "../Rating/Rating";
import "./MyReviewCard.css";
import { LetterImage } from "../ImageComponent/LetterImage";

export function MyReviewCard(props) {
  const [name, setName] = React.useState(""); 
  const [designation, setDesignation] = React.useState("");
  const [rating, setRating] = React.useState(0);
  const [reviewDescription, setReviewDescription] = React.useState("");
  const [isDataLoaded, setIsDataLoaded] = React.useState(false);
  const [reviewDate, setReviewDate] = React.useState("");

  const { information = {}, onButtonClick = () => {} } = props;
  const reviewDetails = "Review Details";

  if(!isDataLoaded){
    setName(information.firstname + " " + information.lastname);
    setDesignation(information.designation || "Teacher");
    setRating(Number(information.rating));
    setReviewDescription(information.reviewtext);
    setReviewDate(information.date);
    setIsDataLoaded(true);

  }


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
