import { useState } from "react";
import { MOCK_DATA } from "../demo/MOCK_DATA";
import Sidebar from "../General/Sidebar/Sidebar";
import { EditRatingPopUP } from "../components/PopUps/EditRatingPopUP";
import { EditReviewPopUP } from "../components/PopUps/EditReviewPopUP";
import { UserCard } from "../components/ReviewCard/UserCard";

const Dashboard = () => {
  const [reviewsAndRatings, setReversAndRatings] = useState(MOCK_DATA);
  const [currentReviewLoaded, setCurrentReviewLoaded] = useState({});

  const [RatingPopupState, setRatingPopupState] = useState(false);
  const [ReviewPopupState, setReviewPopupState] = useState(false);

  const onRatingButtonClick = (review) => {
    setCurrentReviewLoaded(review);
    setRatingPopupState(true);
  };

  const onReviewButtonClick = (review) => {
    setCurrentReviewLoaded(review);
    setReviewPopupState(true);
  };

  const onRaringCloseButtonClick = () => {
    setRatingPopupState(false);
  };

  const onReviewCloseButtonClick = () => {
    setReviewPopupState(false);
  };

  const onRaringSubmitButtonClick = ({ ratings, id }) => {
    setRatingPopupState(false);
    setReversAndRatings(
      reviewsAndRatings.map((review) => {
        if (review.id === id) {
          return { ...review, ratings };
        }
        return review;
      })
    );
  };

  const onReviewSubmitButtonClick = ({ review, id }) => {
    setReviewPopupState(false);
    setReversAndRatings(
      reviewsAndRatings.map((review) => {
        if (review.id === id) {
          return { ...review, review };
        }
        return review;
      })
    );
  };

  return (
    <Sidebar>
      {RatingPopupState && (
        <EditRatingPopUP
          onButtonClick={onRaringCloseButtonClick}
          onUpdateButtonClick={onRaringSubmitButtonClick}
          currentReviewLoaded={currentReviewLoaded}
        />
      )}
      {ReviewPopupState && (
        <EditReviewPopUP
          onButtonClick={onReviewCloseButtonClick}
          onUpdateButtonClick={onReviewSubmitButtonClick}
          currentReviewLoaded={currentReviewLoaded}
        />
      )}
      <div className="review-feedback-main">
        <div className="card">
          <div className="reviews-list">
            {reviewsAndRatings.map((review) => {
              return (
                <UserCard
                  key={review.id}
                  information={review}
                  onRatingButtonClick={() => onRatingButtonClick(review)}
                  onReviewButtonClick={() => onReviewButtonClick(review)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default Dashboard;
