import React, { useState } from "react";
import "./EditRatingPopUP.css";
import RatingSelect from "../../Feedbacks/FeedbackForms/RatingForm/RatingSelect";

export function EditRatingPopUP(props) {

  const [submitOrUpdate, setSubmitOrUpdate] = useState("Submit");
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [ratingId, setRatingId] = useState();

  const [detailsRating, setDetailsRating] = useState([
    { title: "Responsibility", rating: 0 },
    { title: "Behaviour", rating: 0 },
    { title: "Professionalism", rating: 0 },
    { title: "Proficiency", rating: 0 },
    { title: "Management", rating: 0 },
  ],);


  const {
    currentReviewLoaded = {},
    onButtonClick = () => {},
    onUpdateButtonClick = () => {},
  } = props;
  const isSubmit = !currentReviewLoaded.isRating;
  if(currentReviewLoaded.isRating !== false){
    if(isDataLoaded === false){
      setRatingId(currentReviewLoaded.ratingResponse.ratingid)     
      setSubmitOrUpdate("Update")
      setDetailsRating(
        [
          { title: "Responsibility", rating: Number(currentReviewLoaded.ratingResponse.responsibility )},
          { title: "Behaviour", rating: Number(currentReviewLoaded.ratingResponse.behaviour) },
          { title: "Professionalism", rating: Number(currentReviewLoaded.ratingResponse.professionalism)},
          { title: "Proficiency", rating: Number(currentReviewLoaded.ratingResponse.proficiency) },
          { title: "Management", rating: Number(currentReviewLoaded.ratingResponse.management) },
        ],
      )
      setIsDataLoaded(true)
    }
  }

  const name = currentReviewLoaded.firstname + " " + currentReviewLoaded.lastname;
  const  designation = currentReviewLoaded.designation + "," + currentReviewLoaded.department;
  const email = currentReviewLoaded.email


  const handleRatingChange = (index, rating) => {
    setDetailsRating((prevRatings) => {
      const updatedRatings = [...prevRatings];
      updatedRatings[index].rating = rating;
      return updatedRatings;
    });
  };

  return (
    <>
      <div className="edit-rating-popIn-overlay" onClick={onButtonClick}></div>
      <div className="edit-rating-popIn">
        <button
          type="close"
          aria-label="close Button"
          className="close-btn"
          onClick={onButtonClick}>
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
        <div className="details-rating">
          <div className="main-information">
            <div className="initials">A</div>
            <p className="info">
              <span className="name">{name}</span>
              <span className="designation">{designation}</span>
            </p>
          </div>
          <div className="details-rating-main-wrapper">
            <div className="rating-description-title-wrapper">
              <h3 className="details-rating-heading">{submitOrUpdate} Rating</h3>
            </div>
            <div className="details-rating-wrapper">
              {detailsRating.map((heading, index) => {
                return (
                  <div className="details-rating-item" key={index}>
                    <span className="details-rating-item-title">
                      {heading.title}
                    </span>
                    <RatingSelect
                      onRatingChange={(rating) =>
                        handleRatingChange(index, rating)
                      }
                      initialRating={heading.rating}
                    />
                  </div>
                );
              })}
            </div>
            <button
              className="share-group"
              type="submit"
              area-aria-label="submit"
              onClick={() => onUpdateButtonClick({ detailsRating, email,ratingId,isSubmit  })}>
              <span>{submitOrUpdate}</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
