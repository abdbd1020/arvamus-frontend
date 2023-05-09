import React, { useState } from 'react';
import './RatingForm.css'
import RatingSelect from './RatingSelect';
import { useLocation } from 'react-router-dom';

function RatingForm() {
const location = useLocation();
const containerHeadings = ['Responsibility', 'Behaviour', 'Professionalism', 'Proficiency', 'Management', 'Overall'];
  
const [ratings, setRatings] = useState(Array(6).fill(0));
console.log(location.state);
  const handleRatingChange = (index, rating) => {
    setRatings((prevRatings) => {
      const updatedRatings = [...prevRatings];
      updatedRatings[index] = rating;
      return updatedRatings;
    });
  };
  const revieweeData = JSON.parse(location.state.revieweeData);
  const handleSubmit = (e) => {
    const body = {
      reviewerId: location.state.reviewerId,
      revieweeEmail: revieweeData.email,
      responsibility: ratings[0],
      behaviour: ratings[1],
      professionalism: ratings[2],
      proficiency: ratings[3],
      management: ratings[4],      
    }
    console.log(body);
    e.preventDefault();
    // Perform submission logic here
    console.log('Form submitted with ratings:', ratings);
  };

  return (
    <div className='rating-giving-container'>
      <h1 className='rating-form-heading'>Rating</h1>
      <form className='rating-form-container' onSubmit={handleSubmit}>
        {containerHeadings.map((heading, index) => (
          <div className='rating-giving-section' key={index}>
            <h2 className='rating-heading'>{heading}</h2>
            <RatingSelect onRatingChange={(rating) => handleRatingChange(index, rating)} />
          </div>
        ))}
        <button className='rating-button' type="submit">Submit Rating</button>
      </form>
    </div>
  );
}

export default RatingForm;
