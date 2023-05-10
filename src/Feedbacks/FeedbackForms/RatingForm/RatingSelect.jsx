import React, { useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import "./RatingSelect.css";

function RatingSelect({ onRatingChange = () => {}, initialRating = 0 }) {
  const [rating, setRating] = useState(initialRating);
  const [hover, setHover] = useState(0);

  const handleStarClick = (index) => {
    const newRating = index + 1;
    setRating(newRating);
    onRatingChange(newRating);
  };

  const handleStarHover = (index) => {
    setHover(index + 1);
  };

  const handleStarLeave = () => {
    setHover(0);
  };

  const renderStar = (index) => {
    if (index < (hover || rating)) {
      return <FaStar key={index} className="star filled" />;
    } else if (
      index === Math.floor(hover || rating) &&
      !Number.isInteger(rating)
    ) {
      return <FaStarHalfAlt key={index} className="star half-filled" />;
    } else {
      return <FaRegStar key={index} className="star" />;
    }
  };

  return (
    <div>
      <div className="rating-select">
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className="rating-star"
            onClick={() => handleStarClick(index)}
            onMouseEnter={() => handleStarHover(index)}
            onMouseLeave={handleStarLeave}>
            {renderStar(index)}
          </span>
        ))}
      </div>
    </div>
  );
}
export default RatingSelect;
