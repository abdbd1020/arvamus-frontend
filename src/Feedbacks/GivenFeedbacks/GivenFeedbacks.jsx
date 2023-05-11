import React from "react";
import { useState } from "react";
import "./GivenFeedbacks.css";
import { MyReviewCard } from "../../components/ReviewCard/MyReviewCard";
import { MOCK_DATA } from "../../demo/MOCK_DATA";
import { ReviewDetailsPopUP } from "../../components/PopUps/ReviewDetailsPopUP";
import Sidebar from "../../General/Sidebar/Sidebar";
import { EditRatingPopUP } from "../../components/PopUps/EditRatingPopUP";
import { EditReviewPopUP } from "../../components/PopUps/EditReviewPopUP";

const GivenFeedbacks = () => {
  const [reviewsAndRatings, setReversAndRatings] = useState(MOCK_DATA);
  const [currentReviewLoaded, setCurrentReviewLoaded] = useState({});

  const [mainPopupState, setMainPopupState] = useState(false);
  const [RatingPopupState, setRatingPopupState] = useState(false);
  const [ReviewPopupState, setReviewPopupState] = useState(false);

  const onDetailsButtonClickFromMainPopUp = (review) => {
    setCurrentReviewLoaded(review);
    setMainPopupState(true);
  };
  const onClickMainPopUpCloseButton = () => {
    setMainPopupState(false);
  };

  const onReviewEditButtonClickFromMainPopUp = () => {
    console.log("Review Edit");
    setReviewPopupState(true);
    setMainPopupState(false);
  };

  const onRatingEditButtonClickFromMainPopUp = () => {
    setMainPopupState(false);
    console.log("Rating Edit");
    setRatingPopupState(true);
  };

  const onEditRatingPopupCloseButtonClick = () => {
    setRatingPopupState(false);
    setMainPopupState(true);
  };

  const onEditReviewPopupCloseButtonClick = () => {
    setReviewPopupState(false);
    setMainPopupState(true);
  };

  const onEditRatingPopUpUpdateButtonClick = ({ ratings, id }) => {
    console.log("Review Update");
    console.log(ratings);
    setRatingPopupState(false);
    setMainPopupState(true);

    setReversAndRatings((prevReviewsAndRatings) => {
      console.log(prevReviewsAndRatings);
      const updatedReviewsAndRatings = [...prevReviewsAndRatings];
      const index = updatedReviewsAndRatings.findIndex(
        (review) => review.id === id
      );
      // updatedReviewsAndRatings[index].detailsRating = ratings;
      updatedReviewsAndRatings[index].rating =
        ratings.reduce((acc, curr) => acc + curr.rating, 0) / ratings.length;
      updatedReviewsAndRatings[index].ratings = ratings;

      return updatedReviewsAndRatings;
    });
  };

  const onEditReviewPopUpUpdateButtonClick = ({ review, id }) => {
    console.log("Review Update");
    console.log(review);
    setReviewPopupState(false);
    setMainPopupState(true);

    setReversAndRatings((prevReviewsAndRatings) => {
      console.log(prevReviewsAndRatings);
      const updatedReviewsAndRatings = [...prevReviewsAndRatings];
      const index = updatedReviewsAndRatings.findIndex(
        (review) => review.id === id
      );
      updatedReviewsAndRatings[index].reviewDescription = review;
      return updatedReviewsAndRatings;
    });
  };

  console.log(mainPopupState);
  return (
    <Sidebar>
      {RatingPopupState && (
        <EditRatingPopUP
          onButtonClick={onEditRatingPopupCloseButtonClick}
          onUpdateButtonClick={onEditRatingPopUpUpdateButtonClick}
          currentReviewLoaded={currentReviewLoaded}
        />
      )}
      {ReviewPopupState && (
        <EditReviewPopUP
          onButtonClick={onEditReviewPopupCloseButtonClick}
          onUpdateButtonClick={onEditReviewPopUpUpdateButtonClick}
          currentReviewLoaded={currentReviewLoaded}
        />
      )}
      {mainPopupState && (
        <ReviewDetailsPopUP
          isEditable={true}
          onReviewEdit={onReviewEditButtonClickFromMainPopUp}
          onRatingEdit={onRatingEditButtonClickFromMainPopUp}
          onButtonClick={onClickMainPopUpCloseButton}
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
                  onButtonClick={() =>
                    onDetailsButtonClickFromMainPopUp(review)
                  }
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
