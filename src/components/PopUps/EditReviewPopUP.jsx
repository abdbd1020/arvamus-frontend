import React, { useState } from "react";
import "./EditReviewPopUP.css";

export function EditReviewPopUP(props) {
  const [review, setReview] = useState();
  const [submitOrUpdate, setSubmitOrUpdate] = useState("Submit");
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [sharedKey, setSharedKey] = useState();
  const [reviewId, setReviewId] = useState();
  const isAnonymous = true;
  const {
    currentReviewLoaded = {},
    onButtonClick = () => {},
    onUpdateButtonClick = () => {},
  } = props;
  const isSubmit = !currentReviewLoaded.isReview;

  if(currentReviewLoaded.isReview !== false){
    if(isDataLoaded === false){
      setReview(currentReviewLoaded.reviewResponse.reviewtext)   
      setSharedKey(currentReviewLoaded.reviewResponse.sharedkey)
      setReviewId(currentReviewLoaded.reviewResponse.reviewid)     
      setSubmitOrUpdate("Update")
      setIsDataLoaded(true)
    }
  }

  
  const name = currentReviewLoaded.firstname + " " + currentReviewLoaded.lastname;
  const  designation = currentReviewLoaded.designation + "," + currentReviewLoaded.department;
  const email = currentReviewLoaded.email
  console.log("currentReviewLoaded",reviewId)

  return (
    <>
      <div className="edit-review-popIn-overlay" onClick={onButtonClick}></div>
      <div className="edit-review-popIn">
        <button
          type="close"
          aria-label="close Button"
          className="close-btn"
          onClick={onButtonClick}>
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
        <div className="details-review">
          <div className="main-information">
            <div className="initials">A</div>
            <p className="info">
              <span className="name">{name}</span>
              <span className="designation">{designation}</span>
            </p>
          </div>
          <div className="details-review-main-wrapper">
            <div className="review-description-title-wrapper">
              <h3 className="details-review-heading">{submitOrUpdate} Rating</h3>
            </div>
            <div className="details-review-wrapper">
              <textarea
                className="details-review-textarea"
                value={review}
                onChange={(e) => setReview(e.target.value)}
              />
            </div>
            <button
              className="share-group"
              type="submit"
              area-aria-label="submit"
              onClick={() => onUpdateButtonClick({ review, email,reviewId,sharedKey, isAnonymous,isSubmit })}>
              <span>{submitOrUpdate}</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
