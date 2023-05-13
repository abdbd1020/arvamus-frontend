import React from "react";
import { useState,useEffect } from "react";
import "./GivenFeedbacks.css";
import { MyReviewCard } from "../../components/ReviewCard/MyReviewCard";
import { MOCK_DATA } from "../../demo/MOCK_DATA";
import { ReviewDetailsPopUP } from "../../components/PopUps/ReviewDetailsPopUP";
import Sidebar from "../../General/Sidebar/Sidebar";
import { EditRatingPopUP } from "../../components/PopUps/EditRatingPopUP";
import { EditReviewPopUP } from "../../components/PopUps/EditReviewPopUP";
import {getReviewAndRatingByReviewer} from "../../Services/reviewService";

const GivenFeedbacks = () => {
  const [reviewsAndRatings, setReversAndRatings] = useState([]);
  const [currentReviewLoaded, setCurrentReviewLoaded] = useState({});

  const [mainPopupState, setMainPopupState] = useState(false);
  const [RatingPopupState, setRatingPopupState] = useState(false);
  const [ReviewPopupState, setReviewPopupState] = useState(false);

  useEffect(() => {
    async function fetchRatingByReviewer() {
      const userId = localStorage.getItem("userId");
      const privateKey = localStorage.getItem("privateKey");
      const body = JSON.stringify({
        reviewerId: userId,
        privatekey: privateKey,
      });

      getReviewAndRatingByReviewer(body).then((data) => {
        if (data.status === false) {
          return;
        } else {
          setReversAndRatings(data.response);
        }
      });
    }
    fetchRatingByReviewer();
  }, []);

  const onDetailsButtonClickFromMainPopUp = (review) => {
    setCurrentReviewLoaded(review);
    setMainPopupState(true);
  };
  const onClickMainPopUpCloseButton = () => {
    setMainPopupState(false);
  };

  const onReviewEditButtonClickFromMainPopUp = () => {
    setReviewPopupState(true);
    setMainPopupState(false);
  };

  const onRatingEditButtonClickFromMainPopUp = () => {
    setMainPopupState(false);
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

    setRatingPopupState(false);
    setMainPopupState(true);

    setReversAndRatings((prevReviewsAndRatings) => {
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

    setReviewPopupState(false);
    setMainPopupState(true);

    setReversAndRatings((prevReviewsAndRatings) => {
      const updatedReviewsAndRatings = [...prevReviewsAndRatings];
      const index = updatedReviewsAndRatings.findIndex(
        (review) => review.id === id
      );
      updatedReviewsAndRatings[index].reviewDescription = review;
      return updatedReviewsAndRatings;
    });
  };

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
