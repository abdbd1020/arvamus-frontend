import React, { useState } from "react";
import "./EditRatingPopUP.css";
import RatingSelect from "../../Feedbacks/FeedbackForms/RatingForm/RatingSelect";

export function EditRatingPopUP(props) {
  const {
    currentReviewLoaded = {},
    onButtonClick = () => {},
    onUpdateButtonClick = () => {},
  } = props;
  const {
    name = "Alice Banks",
    designation = "Lecturer, ICT Department",
    detaisReating = [
      { title: "Responsibility", rating: 5 },
      { title: "Behavior", rating: 4 },
      { title: "Professionalism", rating: 3 },
      { title: "Proficiency", rating: 2 },
      { title: "Management", rating: 4 },
    ],
    id,
  } = currentReviewLoaded;

  const [ratings, setRatings] = useState([...detaisReating]);

  const handleRatingChange = (index, rating) => {
    setRatings((prevRatings) => {
      const updatedRatings = [...prevRatings];
      updatedRatings[index].rating = rating;
      return updatedRatings;
    });
  };

  return (
    <>
      <div className="edit-rating-popIn-overlay" onClick={onButtonClick}></div>
      <div className="edit-rating-popIn">
        <button
          type="close"
          aria-label="close Button"
          className="close-btn"
          onClick={onButtonClick}>
          <i class="fa fa-times" aria-hidden="true"></i>
        </button>
        <div className="details-rating">
          <div className="main-information">
            <div className="initials">A</div>
            <p className="info">
              <span className="name">{name}</span>
              <span className="designation">{designation}</span>
            </p>
          </div>
          <div className="details-rating-main-wrapper">
            <div className="rating-description-title-wrapper">
              <h3 className="details-rating-heading">Update Rating</h3>
            </div>
            <div className="details-rating-wrapper">
              {detaisReating.map((heading, index) => {
                return (
                  <div className="details-rating-item" key={index}>
                    <span className="details-rating-item-title">
                      {heading.title}
                    </span>
                    <RatingSelect
                      onRatingChange={(rating) =>
                        handleRatingChange(index, rating)
                      }
                      initialRating={heading.rating}
                    />
                  </div>
                );
              })}
            </div>
            <button
              class="share-group"
              type="submit"
              area-aria-label="submit"
              onClick={() => onUpdateButtonClick({ ratings, id })}>
              <span>Update</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
