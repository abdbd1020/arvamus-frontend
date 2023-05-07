import React from 'react';
import './GivenFeedbacks.css';
import Sidebar from '../../Dashborad/Sidebar/Sidebar';
import profileImage from '../../Images/prof1.jpg';
import teacherImage from '../../Images/teacher4.png';
import staffImage from '../../Images/staff4.png'
import GivenRatingItem from '../../Dashborad/GivenRatingItem/GivenRatingItem';
import GivenReviewItem from '../../Dashborad/GivenReviewItem/GivenReviewItem';

const GivenFeedbacks = () => {
  const reviews = [
    { src: teacherImage, name: 'Akash Islam', impression: 'Positive', date: '04 Oct, 2022', reviewText: 'Something Nice' },
    { src: teacherImage, name: 'Akash Islam', impression: 'Positive', date: '04 Oct, 2022', reviewText: 'Something Nice' },
    { src: teacherImage, name: 'Akash Islam', impression: 'Positive', date: '04 Oct, 2022', reviewText: 'Something Nice' },
  ];

  const ratings = [
    { src: staffImage, name: 'MD Shahid', rating: 4, date: '04 Oct, 2022', responsibility: 3, behavior: 4, professionalism: 5, proficiency: 3, management: 2},
    { src: staffImage, name: 'MD Shahid', rating: 4, date: '04 Oct, 2022', responsibility: 3, behavior: 4, professionalism: 5, proficiency: 3, management: 2},
    { src: staffImage, name: 'MD Shahid', rating: 4, date: '04 Oct, 2022', responsibility: 3, behavior: 4, professionalism: 5, proficiency: 3, management: 2},
  ];

  return (
    <Sidebar>
      <div className='given-container'>
        <div className="given-listii">
          <div className="given-list-container">
            <div className="given-list-header">
              <div className="given-heading-wrapper">
                <h2>Reviews</h2>
              </div>
            </div>
            <ul className="given-list">
              {reviews.map((review, index) => (
                <li key={index}>
                  <GivenReviewItem
                    src={review.src}
                    name={review.name}
                    impression={review.impression}
                    date = {review.date}
                    reviewText={review.reviewText}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className="given-separator"></div>
          <div className="given-list-container">
            <div className="given-list-header">
              <div className="given-star-heading-wrapper">
                <h2>Ratings</h2>
              </div>
            </div>
            <ul className="given-list">
              {ratings.map((rating, index) => (
                <li key={index}>
                  <GivenRatingItem
                    src={rating.src}
                    name={rating.name}
                    rating={rating.rating}
                    date ={rating.date}
                    responsibility={rating.responsibility}
                    behavior={rating.behavior}
                    professionalism={rating.professionalism}
                    proficiency={rating.proficiency}
                    management={rating.management}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default GivenFeedbacks;
