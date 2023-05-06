import React, { useState } from 'react';
import './RatingForm.css'
import RatingSelect from './RatingSelect';

function RatingForm() {

const containerHeadings = ['Responsibility', 'Behaviour', 'Professionalism', 'Proficiency', 'Management'];
  
const [ratings, setRatings] = useState(Array(6).fill(0));

  const handleRatingChange = (index, rating) => {
    setRatings((prevRatings) => {
      const updatedRatings = [...prevRatings];
      updatedRatings[index] = rating;
      return updatedRatings;
    });
  };

  const handleSubmit = (e) => {
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RatingForm;
