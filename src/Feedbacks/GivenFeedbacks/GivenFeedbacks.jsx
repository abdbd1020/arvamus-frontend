import React from "react";
import { useState } from "react";
import "./GivenFeedbacks.css";
import { MyReviewCard } from "../../components/ReviewCard/MyReviewCard";
import { MOCK_DATA } from "../../demo/MOCK_DATA";
import { ReviewDetailsPopUP } from "../../components/PopUps/ReviewDetailsPopUP";
import Sidebar from "../../General/Sidebar/Sidebar";
import { EditRatingPopUP } from "../../components/PopUps/EditRatingPopUP";

const GivenFeedbacks = () => {
  const [popupState, setPopupState] = useState(false);
  const [currentReviewLoaded, setCurrentReview] = useState({});

  const [RatingPopupState, setRatingPopupState] = useState(false);
  const [RatingLoaded, setRatingLoaded] = useState({});

  const [ReviewPopupState, setReviewPopupState] = useState(false);
  const [ReviewLoaded, setReviewLoaded] = useState({});

  const onPopupButtonClick = (review) => {
    setCurrentReview(review);
    setRatingLoaded(review);
    setReviewLoaded(review);
    setPopupState(true);
  };
  const onPopupCloseButtonClick = () => {
    setPopupState(false);
  };

  const onReviewEdit = () => {
    console.log("Review Edit");
    setReviewPopupState(true);
  };

  const onReviewPopupCloseButtonClick = () => {
    setReviewPopupState(false);
  };

  const onRatingEdit = () => {
    setPopupState(false);
    console.log("Rating Edit");
    setRatingPopupState(true);
  };

  const onRatingPopupCloseButtonClick = () => {
    setRatingPopupState(false);
    setPopupState(true);
  };

  const onReviewUpdate = (ratings) => {
    console.log("Review Update");
    console.log(ratings);
    setRatingPopupState(false);
    setPopupState(true);
  };

  const reviewsAndRatings = MOCK_DATA;
  console.log(popupState);
  return (
    <Sidebar>
      {RatingPopupState && (
        <EditRatingPopUP
          onButtonClick={onRatingPopupCloseButtonClick}
          currentReviewLoaded={currentReviewLoaded}
          onUpdateButtonClick={onReviewUpdate}
        />
      )}
      {popupState && (
        <ReviewDetailsPopUP
          isEditable={true}
          onReviewEdit={onReviewEdit}
          onRatingEdit={onRatingEdit}
          onButtonClick={onPopupCloseButtonClick}
          currentReviewLoaded={RatingLoaded}
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
