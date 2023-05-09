import React from "react";
import { useState } from "react";
import "./GivenFeedbacks.css";
import { MyReviewCard } from "../../components/ReviewCard/MyReviewCard";
import { MOCK_DATA } from "../../demo/MOCK_DATA";
import { ReviewDetailsPopUP } from "../../components/ReviewPopUp/ReviewDetailsPopUP";
import Sidebar from "../../General/Sidebar/Sidebar";

const GivenFeedbacks = () => {
  const [popupState, setPopupState] = useState(false);
  const [currentReviewLoaded, setCurrentReview] = useState({});

  const onPopupButtonClick = (review) => {
    setCurrentReview(review);
    setPopupState(true);
  };
  const onPopupCloseButtonClick = () => {
    setPopupState(false);
  };
  const onReviewEdit = () => {
    console.log("Review Edit");
  };
  const onRatingEdit = () => {
    console.log("Rating Edit");
  };

  const reviewsAndRatings = MOCK_DATA;
  console.log(popupState);
  return (
    <Sidebar>
      {popupState && (
        <ReviewDetailsPopUP
          isEditable={true}
          onReviewEdit={onReviewEdit}
          onRatingEdit={onRatingEdit}
          onButtonClick={onPopupCloseButtonClick}
          currentReviewLoaded={currentReviewLoaded}
        />
      )}
      <div className="review-feedback-main">
        <div className="card">
          <div className="reviews-list">
            {reviewsAndRatings.map((review) => {
              return (
                <MyReviewCard
                  information={review}
                  onButtonClick={() => onPopupButtonClick(review)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default GivenFeedbacks;
