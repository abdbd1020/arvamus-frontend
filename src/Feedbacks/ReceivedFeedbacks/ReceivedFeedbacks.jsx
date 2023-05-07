import React from 'react';
import './ReceivedFeedbacks.css';
import Sidebar from '../../Dashborad/Sidebar/Sidebar';
import profileImage from '../../Images/prof1.jpg';
import teacherImage from '../../Images/teacher4.png';
import staffImage from '../../Images/staff4.png'
import ReviewItem from '../../Dashborad/ReviewItem/ReviewItem'
import RatingItem from '../../Dashborad/RatingItem/RatingItem'

const ReceivedFeedbacks = () => {
  const reviews = [
    { src: teacherImage, impression: 'Positive', date: '03 Oct, 2022', reviewText: 'Something Nice' },
    { src: teacherImage, impression: 'Positive', date: '04 Oct, 2022', reviewText: 'Something Nice' },
    { src: teacherImage, impression: 'Positive', date: '04 Oct, 2022', reviewText: 'Something Nice' },
  ];

  const ratings = [
    { src: staffImage, rating: 4, date: '04 Oct, 2022', responsibility: 3, behavior: 4, professionalism: 5, proficiency: 3, management: 2},
    { src: staffImage, rating: 4, date: '04 Oct, 2022', responsibility: 3, behavior: 4, professionalism: 5, proficiency: 3, management: 2},
    { src: staffImage, rating: 4, date: '04 Oct, 2022', responsibility: 3, behavior: 4, professionalism: 5, proficiency: 3, management: 2},
  ];

  return (
    <Sidebar>
      <div className='received-container'>
        <div className="received-listii">
          <div className="received-list-container">
            <div className="received-list-header">
              <div className="received-heading-wrapper">
                <h2>Reviews</h2>
              </div>
            </div>
            <ul className="received-list">
              {reviews.map((review, index) => (
                <li key={index}>
                  <ReviewItem
                    src={review.src}
                    impression={review.impression}
                    date = {review.date}
                    reviewText={review.reviewText}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className="received-separator"></div>
          <div className="received-list-container">
            <div className="received-list-header">
              <div className="received-star-heading-wrapper">
                <h2>Ratings</h2>
              </div>
            </div>
            <ul className="received-list">
              {ratings.map((rating, index) => (
                <li key={index}>
                  <RatingItem
                    src={rating.src}
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

export default ReceivedFeedbacks;
