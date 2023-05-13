import { useState,useEffect } from "react";
import { MOCK_DATA } from "../demo/MOCK_DATA";
import Sidebar from "../General/Sidebar/Sidebar";
import { EditRatingPopUP } from "../components/PopUps/EditRatingPopUP";
import { EditReviewPopUP } from "../components/PopUps/EditReviewPopUP";
import { UserCard } from "../components/ReviewCard/UserCard";
import { getAllTeachers } from "../Services/appService";
import { getReviewByRevieweeEmailAndReviewerId } from "../Services/reviewService";

const Dashboard = () => {
  const [reviewsAndRatings, setReversAndRatings] = useState(MOCK_DATA);
  const [currentReviewLoaded, setCurrentReviewLoaded] = useState({});

  const [RatingPopupState, setRatingPopupState] = useState(false);
  const [ReviewPopupState, setReviewPopupState] = useState(false);

  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    async function fetchTeachers() {
      getAllTeachers().then((data) => {
        if (data.status == false) {
          console.log("Error");
          return;
        } else {
          setTeachers(data.response);
        }
      });
    }
    fetchTeachers();
  }, []);
  const onRatingButtonClick = async (user) => {
    
    setCurrentReviewLoaded(user);
    setRatingPopupState(true);
  };

  const onReviewButtonClick = async (user) => {
    // get userId from local storage
    const userId = localStorage.getItem("userId");
    const privateKey = localStorage.getItem("privateKey");
    const body = JSON.stringify({
      revieweeEmail: user.email,
      reviewerId: userId,
      privatekey: privateKey,
      isReviewer: true,
    });
    const response = await getReviewByRevieweeEmailAndReviewerId(body);
    user.review = response;
    setCurrentReviewLoaded(user);
    setReviewPopupState(true);
  };

  const onRaringCloseButtonClick = () => {
    setRatingPopupState(false);
  };

  const onReviewCloseButtonClick = () => {
    setReviewPopupState(false);
  };

  const onRatingSubmitButtonClick = ({ ratings, id }) => {
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
          onUpdateButtonClick={onRatingSubmitButtonClick}
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
            {teachers.map((teacher) => {
              return (
                <UserCard
                  key={teacher.userid}
                  information={teacher}
                  onRatingButtonClick={() => onRatingButtonClick(teacher)}
                  onReviewButtonClick={() => onReviewButtonClick(teacher)}
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
