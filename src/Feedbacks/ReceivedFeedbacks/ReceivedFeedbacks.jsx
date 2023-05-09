import React from "react";
import { useState } from "react";
import "./ReceivedFeedbacks.css";
import { MyReviewCard } from "../../components/MyReviewCard";
import { MOCK_DATA } from "../../demo/MOCK_DATA";
import { ReviewDetailsPopUP } from "../../components/ReviewDetailsPopUP";
import Sidebar from "../../General/Sidebar/Sidebar";

const ReceivedFeedbacks = () => {
  // define a state variable to store the popup state
  const [popupState, setPopupState] = useState(false);
  const onPopupButtonClick = () => {
    setPopupState(true);
  };
  const onPopupCloseButtonClick = () => {
    setPopupState(false);
  };

  const reviewsAndRatings = MOCK_DATA;
  console.log(popupState);
  return (
    <Sidebar>
      {/* // a popup to show the review details. where will be 5 details reviews with 1 - 5 star and a comment details. 5 review will be shown in 5 row under a div. and comment will be shown in a div. there will be a close button to close the popup. */}
      {popupState && (
        <ReviewDetailsPopUP onButtonClick={onPopupCloseButtonClick} />
      )}
      <div className="review-feedback-main">
        <div className="card">
          <div className="reviews-list">
            {/* // only one item  */}
            {reviewsAndRatings.map((review) => {
              return (
                <MyReviewCard
                  name={review.name}
                  designation={review.designation}
                  rating={review.rating}
                  reviewDescription={review.reviewDescription}
                  reviewDate={review.reviewDate}
                  reviewDetails={review.reviewDetails}
                  // with preview perimeter we can pass a function to the child component
                  onButtonClick={onPopupButtonClick}
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
