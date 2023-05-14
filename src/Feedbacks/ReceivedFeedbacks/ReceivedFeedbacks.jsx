import React from "react";
import { useState,useEffect } from "react";
import "./ReceivedFeedbacks.css";
import { MyReviewCard } from "../../components/ReviewCard/MyReviewCard";
import Sidebar from "../../General/Sidebar/Sidebar";
import { ReviewDetailsPopUP } from "../../components/PopUps/ReviewDetailsPopUP";
import { getReviewAndRatingOfReviewee } from "../../Services/reviewService";

const ReceivedFeedbacks = () => {
  const [popupState, setPopupState] = useState(false);
  const [currentReviewLoaded, setCurrentReview] = useState({});
  const [reviewsAndRatings, setReviewsAndRatings] = useState([]);


  const onPopupButtonClick = (review) => {
    setCurrentReview(review);
    setPopupState(true);
  };
  const onPopupCloseButtonClick = () => {
    setPopupState(false);
  };
  useEffect(() => {
    async function fetchRatingByReviewer() {
      const userEmail = localStorage.getItem("userEmail");
      const privateKey = localStorage.getItem("privateKey");
      const body = JSON.stringify({
        revieweeemail: userEmail,
        privatekey: privateKey,
      });

      getReviewAndRatingOfReviewee(body).then((data) => {
        if (data.status === false) {
          return;
        } else {
          setReviewsAndRatings(data.response);
        }
      });
    }
    fetchRatingByReviewer();
  }, []);
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
