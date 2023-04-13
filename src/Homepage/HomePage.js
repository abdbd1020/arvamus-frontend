import React from 'react';
import './HomePage.css';
// import profBack from "./Images/profback.jpg"
// import backgroundImage3 from "./Images/finbig.png";
import Sidebar from './Sidebar';
import Profile from './Profile';
import studentImage from '../Images/student4.png'
import StarRating from './StarRating';

function ListItem(props) {
    return (
      <div className="list-item">
        <div class="item-heading">
            <p>{props.title}</p>
        </div>
        <p>{props.text}</p>
      </div>
    );
  }

const HomePage = () => {
  return (
    <Sidebar>
        <div
            className='home-page-container'
            // style={{ backgroundImage: `url(${profBack})` }}
        >
            <Profile
                picture= {studentImage}
                name = "Farhan Mahmud"
                regno = "mahmud.farhan1903@gmail.com"
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
                        <ListItem title="Item 1" text= "lorem()"/>
                    </li>
                    <li>
                        <ListItem title="Item 2" text="This is some text for Item 2." />
                    </li>
                    <li>
                        <ListItem title="Item 3" text="This is some text for Item 3." />
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
                            <p>Teacher</p>
                        </div>
                            <StarRating rating={3.5} />
                        </div>
                        <div className="star-item">
                            <div class="item-heading">
                                <p>Teacher</p>
                            </div>
                            <StarRating rating={5} />
                        </div>
                        <div className="star-item">
                            <div class="item-heading">
                                <p>Teacher</p>
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

export default HomePage;