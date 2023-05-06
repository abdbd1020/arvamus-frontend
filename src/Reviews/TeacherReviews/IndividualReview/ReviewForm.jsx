import React, { useState } from 'react';
import './ReviewForm.css';

function ReviewForm() {
  const [inputValue, setInputValue] = useState('');
  const [radioValue, setRadioValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleRadioChange = (event) => {
    setRadioValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Form submitted with input value: ${inputValue} and radio value: ${radioValue}`);
    setInputValue('');
    setRadioValue('');
  };

  return (
    <div className="form-box-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="input-field">Enter a paragraph:</label>
        <textarea id="input-field" value={inputValue} onChange={handleInputChange} />

        <label>Select an option:</label>
        <div className="radio-options">
          <label htmlFor="option-1">
            <input
              type="radio"
              id="option-1"
              name="options"
              value="Option 1"
              checked={radioValue === 'Option 1'}
              onChange={handleRadioChange}
            />
            Option 1
          </label>

          <label htmlFor="option-2">
            <input
              type="radio"
              id="option-2"
              name="options"
              value="Option 2"
              checked={radioValue === 'Option 2'}
              onChange={handleRadioChange}
            />
            Option 2
          </label>

          <label htmlFor="option-3">
            <input
              type="radio"
              id="option-3"
              name="options"
              value="Option 3"
              checked={radioValue === 'Option 3'}
              onChange={handleRadioChange}
            />
            Option 3
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ReviewForm;
