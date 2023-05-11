import React, { useState } from "react";
import "./EditReviewPopUP.css";

export function EditReviewPopUP(props) {
  console.log(props, "props........");
  const {
    currentReviewLoaded = {},
    onButtonClick = () => {},
    onUpdateButtonClick = () => {},
  } = props;
  const {
    name = "Alice Banks",
    designation = "Lecturer, ICT Department",
    reviewDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.",
    id,
  } = currentReviewLoaded;

  const [review, setReview] = useState(reviewDescription);

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
              <h3 className="details-review-heading">Update Rating</h3>
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
              onClick={() => onUpdateButtonClick({ review, id })}>
              <span>Update</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
