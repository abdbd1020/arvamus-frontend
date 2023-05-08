import React from "react";
import { useState } from "react";
import "./ReceivedFeedbacks.css";
import { MyReviewCard } from "../../components/MyReviewCard";
import { MOCK_DATA } from "../../demo/MOCK_DATA";

const ReceivedFeedbacks = () => {
  // define a state variable to store the popup state
  const [popupState, setPopupState] = useState(false);
  const onPopupButtonClick = () => {
    setPopupState(true);
  };

  console.log(popupState);

  const reviewsAndRatings = MOCK_DATA;
  return (
    <div className="review-feedback-main">
      <div className="card">
        <div className="reviews-list">
          {reviewsAndRatings.map((review) => {
            return (
              <MyReviewCard
                name={review.name}
                designation={review.designation}
                rating={review.rating}
                reviewDescription={review.reviewDescription}
                reviewDate={review.reviewDate}
                reviewDetails={review.reviewDetails}
                onButtonClick={onPopupButtonClick}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ReceivedFeedbacks;
