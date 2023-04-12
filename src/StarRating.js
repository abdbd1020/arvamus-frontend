import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const StarRating = ({ rating }) => {
  // Convert rating to a number between 0 and 5
  const ratingNum = parseFloat(rating);
  const roundedRating = Math.round(ratingNum * 2) / 2;

  // Determine number of full stars, half stars, and empty stars
  const fullStars = Math.floor(roundedRating);
  const halfStars = Math.ceil(roundedRating - fullStars);
  const emptyStars = 5 - fullStars - halfStars;

  return (
    <div className="star-rating">
      {[...Array(fullStars)].map((_, index) => (
        <FaStar style={{ color: 'red' }} key={index} className="star-icon filled" />
      ))}
      {[...Array(halfStars)].map((_, index) => (
        <FaStarHalfAlt style={{ color: 'red' }}  key={index} className="star-icon half-filled" />
      ))}
      {[...Array(emptyStars)].map((_, index) => (
        <FaRegStar key={index} className="star-icon empty" />
      ))}
    </div>
  );
};

export default StarRating;