import React from "react";
import { Rating } from "../Rating/Rating";
import "./ReviewDetailsPopUP.css";

export function ReviewDetailsPopUP(props) {

  const [isDataLoaded, setIsDataLoaded] = React.useState(false); 
 const [detailsRating, setDetailsRating] = React.useState([
  { title: "Responsibility", rating: 5 },
      { title: "Behavior", rating: 4 },
      { title: "Professionalism", rating: 3 },
      { title: "Proficiency", rating: 2 },
      { title: "Management", rating: 4 },
    ],
 ); 
 const [name, setName] = React.useState(""); 
 const [designation, setDesignation] = React.useState("");
 const [rating, setRating] = React.useState(0);
 const [reviewDescription, setReviewDescription] = React.useState("");
 const [reviewDate, setReviewDate] = React.useState("");
  const {
    currentReviewLoaded = {},
    onButtonClick = () => {},
    onReviewEdit = (currentReviewLoaded) => {},
    onRatingEdit = () => {},
    isEditable = false,
  } = props;
  if(!isDataLoaded){
    currentReviewLoaded.isReview = true;

    const ratingResponse = {
      responsibility: currentReviewLoaded.responsibility,
      behaviour: currentReviewLoaded.behaviour,
      professionalism: currentReviewLoaded.professionalism,
      proficiency: currentReviewLoaded.proficiency,
      management: currentReviewLoaded.management,
      ratingid: currentReviewLoaded.ratingid,

    };
    currentReviewLoaded.ratingResponse = ratingResponse;
    const reviewResponse = {
      firstname: currentReviewLoaded.firstname,
      lastname: currentReviewLoaded.lastname,
      designation: currentReviewLoaded.designation,
      reviewtext: currentReviewLoaded.reviewtext,
      reviewid : currentReviewLoaded.reviewid,
      sharedkey: currentReviewLoaded.sharedKey,
      department: currentReviewLoaded.department,
    }
    currentReviewLoaded.reviewResponse = reviewResponse;
    currentReviewLoaded.email = currentReviewLoaded.revieweeemail;
    setName(currentReviewLoaded.firstname + " " + currentReviewLoaded.lastname);
    setDesignation(currentReviewLoaded.designation || "Teacher");
    setRating(Number(currentReviewLoaded.average));
    setReviewDescription(currentReviewLoaded.reviewtext);
    setReviewDate(currentReviewLoaded.date);
    setDetailsRating(
      [
        { title: "Responsibility", rating: Number(currentReviewLoaded.responsibility )},
        { title: "Behaviour", rating: Number(currentReviewLoaded.behaviour) },
        { title: "Professionalism", rating: Number(currentReviewLoaded.professionalism)},
        { title: "Proficiency", rating: Number(currentReviewLoaded.proficiency) },
        { title: "Management", rating: Number(currentReviewLoaded.management) },
      ],
    )
    setIsDataLoaded(true);
  }

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
                  onClick={() => onReviewEdit(currentReviewLoaded)}>
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
