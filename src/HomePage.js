import React from 'react';
import './HomePage.css';
import profBack from "./Images/profback.jpg"
import backgroundImage3 from "./Images/finbig.png";
import Sidebar from './Sidebar';
import studentImage from './Images/student4.png'
import StarRating from './StarRating';
// import About from './pages/About.jsx';
// import Analytics from './pages/Analytics.jsx';
// import Comment from './pages/Comment.jsx';
// import Product from './pages/Product.jsx';
// import ProductList from './pages/ProductList.jsx';

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
            <div 
                className="profile"
                // style={{ backgroundImage: `url(${profBack})` }}
            >
                <img className='profile-image' src={studentImage} alt="Profile" />
                <h2>Farhan Mahmud</h2>
            </div>

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