import React from 'react';
import './ReviewForm.css'; // Import the CSS file

const ReviewForm = () => {

  function handleReviewSubmit()
  {
    window.location.href = "/indteacherev";
  }

  return (
    <div className="review-form-container">
      <div className="form-input-section">
        <label htmlFor="paragraphInput">Review</label>
        <textarea id="paragraphInput" rows="5"></textarea>
      </div>

      <div className="radio-section">
        <h2>Impression</h2>
        <div className="radio-options">
          <div className='specific-option'>
            <input type="radio" id="option1" name="options1" value="option1" />
            <label htmlFor="option1">Positive</label>
          </div>
          <div className='specific-option'>
            <input type="radio" id="option2" name="options1" value="option2" />
            <label htmlFor="option2">Neutral</label>
          </div>
          <div className='specific-option'>
            <input type="radio" id="option3" name="options1" value="option3" />
            <label htmlFor="option3">Negative</label>
          </div>
        </div>
      </div>

      <div className="radio-section">
        <h2>Options 2:</h2>
        <div className="radio-options">
          <div className='specific-option'>
            <input type="radio" id="option4" name="options2" value="option4" />
            <label htmlFor="option4">Anonymous</label>
          </div>
          <div className='specific-option'>
            <input type="radio" id="option5" name="options2" value="option5" />
            <label htmlFor="option5">Public</label>
          </div>
        </div>
      </div>

      <button type="submit" className="review-button" onClick={handleReviewSubmit}>
            Submit Review
        </button>
    </div>
  );
};

export default ReviewForm;
