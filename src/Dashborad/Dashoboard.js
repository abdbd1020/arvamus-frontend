import React from 'react';
import './Dashboard.css';
// import profBack from "./Images/profback.jpg"
// import backgroundImage3 from "./Images/finbig.png";
import Sidebar from './Sidebar';
import Profile from './Profile';
import profileImage from '../Images/prof1.jpg';
import studentImage from '../Images/student4.png'
import teacherImage from '../Images/teacher4.png'
import staffImage from '../Images/staff4.png'
import StarRating from './StarRating';

function ListItem(props) {
    return (
      <div className="list-item">
        <div class="item-heading">
            {/* <p>{props.title}</p> */}
            <img src= {props.src} alt="Round Image" className="element-image" />
        </div>
        <p>{props.text}</p>
      </div>
    );
  }

const Dashboard = () => {
  return (
    <Sidebar>
        <div
            className='home-page-container'
            // style={{ backgroundImage: `url(${profBack})` }}
        >
            <Profile
                className = 'homepage-profile'
                picture= {profileImage}
                name = "Farhan Mahmud"
                regno = "mahmud.farhan1903@gmail.com"
                impression = "Good"
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
                        <ListItem
                            // title="Item 1"
                            src = {studentImage}
                            text= "lorem()"
                        />
                    </li>
                    <li>
                        <ListItem
                            // title="Item 1"
                            src = {teacherImage}
                            text= "lorem()"
                        />
                    </li>
                    <li>
                        <ListItem
                            // title="Item 1"
                            src = {staffImage}
                            text= "lorem()"
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
                        <div class="item-heading">
                            <img src= {studentImage} alt="Round Image" className="element-image" />
                        </div>
                            <StarRating rating={3.5} />
                        </div>
                        <div className="star-item">
                            <div class="item-heading">
                                <img src= {teacherImage} alt="Round Image" className="element-image" />
                            </div>
                            <StarRating rating={5} />
                        </div>
                        <div className="star-item">
                            <div class="item-heading">
                                <img src= {staffImage} alt="Round Image" className="element-image" />
                            </div>
                            <StarRating rating={2} />
                        </div>
                    </ul>
            </div>
    </div>
        </div>
    </Sidebar>
    );
};

export default Dashboard;