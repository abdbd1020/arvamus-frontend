import React from 'react';
import './IndividualStaff.css';
import Sidebar from '../../../Dashborad/Sidebar/Sidebar';
import Profile from '../../../MyProfile/Profile';
import profileImage from '../../../Images/prof1.jpg';
import studentImage from '../../../Images/student4.png'
// import teacherImage from '../Images/teacher4.png'
// import staffImage from '../Images/staff4.png'
// import StarRating from './StarRating';
import ReviewItem from '../../../Dashborad/ReviewItem/ReviewItem';
import RatingItem from '../../../Dashborad/RatingItem/RatingItem';
import StaffReviewProfile from './StaffReviewProfile';

const IndividualStaff = () => {
  return (
    <Sidebar>
        <div
            className='home-page-container'
            // style={{ backgroundImage: `url(${profBack})` }}
        >
            <StaffReviewProfile
                src = {profileImage}
                staffName = "Farhan Mahmud"
                staffDesignation = "Professor"
                impression = "Positive"
                rating = {4}
            />

            <div className="listii">
                <div className="list-container">
                    <div class="list-header">
                        <div class="heading-wrapper">
                            <h2>Reviews</h2>
                        </div>
                    </div>
                    <ul className="list">
                    <li>
                        <ReviewItem
                            src = {studentImage}
                            impression = "Positive"
                            date = "04 Oct, 2022"
                            // nameshow = "Anonymous"
                        />
                    </li>
                    <li>
                        <ReviewItem
                            src = {studentImage}
                            impression = "Positive"
                            date = "04 Oct, 2022"
                            // nameshow = "Anonymous"
                        />
                    </li>
                    <li>
                        <ReviewItem
                            src = {studentImage}
                            impression = "Positive"
                            date = "04 Oct, 2022"
                            // nameshow = "Anonymous"
                        />
                    </li>
                    </ul>
                </div>
                <div className="separator"></div>
                <div className="list-container">
                    <div class="list-header">
                        <div class="star-heading-wrapper">
                            <h2>Ratings</h2>
                        </div>
                    </div>
                    <ul className="list">
                        <div className="star-item">
                            <RatingItem
                                src = {studentImage}
                                rating = {3.5}
                                date = "04 Oct, 2022"
                                responsibility = {3.5}
                                behavior = {3.5}
                                professionalism = {3.5}
                                proficiency = {3.5}
                                management = {3.5}
                            />
                        </div>
                        <div className="star-item">
                        <RatingItem
                                src = {studentImage}
                                rating = {3.5}
                                date = "04 Oct, 2022"
                                responsibility = {3.5}
                                behavior = {3.5}
                                professionalism = {3.5}
                                proficiency = {3.5}
                                management = {3.5}
                            />
                        </div>
                        <div className="star-item">
                            <RatingItem
                                src = {studentImage}
                                rating = {3.5}
                                date = "04 Oct, 2022"
                                responsibility = {3.5}
                                behavior = {3.5}
                                professionalism = {3.5}
                                proficiency = {3.5}
                                management = {3.5}
                            />
                        </div>
                    </ul>
            </div>
    </div>
        </div>
    </Sidebar>
    );
};

export default IndividualStaff;