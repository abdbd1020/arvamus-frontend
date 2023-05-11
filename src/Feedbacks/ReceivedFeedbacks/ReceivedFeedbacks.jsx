import React from "react";
import { useState } from "react";
import "./ReceivedFeedbacks.css";
import { MyReviewCard } from "../../components/ReviewCard/MyReviewCard";
import { MOCK_DATA } from "../../demo/MOCK_DATA";
import Sidebar from "../../General/Sidebar/Sidebar";
import { ReviewDetailsPopUP } from "../../components/PopUps/ReviewDetailsPopUP";

const ReceivedFeedbacks = () => {
  const [popupState, setPopupState] = useState(false);
  const [currentReviewLoaded, setCurrentReview] = useState({});

  const onPopupButtonClick = (review) => {
    setCurrentReview(review);
    setPopupState(true);
  };
  const onPopupCloseButtonClick = () => {
    setPopupState(false);
  };

  const reviewsAndRatings = MOCK_DATA;
  console.log(popupState);
  return (
    <Sidebar>
      {popupState && (
        <ReviewDetailsPopUP
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
                  key={review.id}
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

export default ReceivedFeedbacks;
