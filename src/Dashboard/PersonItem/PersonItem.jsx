import { useState } from 'react';
import './PersonItem.css';
import StarRating from '../../General/StarRating';
import { Link } from "react-router-dom";
import {FaStar, FaCommentAlt} from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

function PersonItem(props) {
  const revieweeData = props.reviewee;
  const [showDetails, setShowDetails] = useState(false);
  const [userId, setUserId] = useState('');
  const reviewerId = props.reviewerId;
  const navigate = useNavigate();

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
  const handleClick = () => {
    console.log(props.user);
    
  }
  function handleRatingPage() {
                
    navigate("/ratingform", { state: { reviewerId: reviewerId, revieweeData : revieweeData, } });

  }
  function handleReviewPage() {
                
    navigate("/reviewform", { state: { reviewerId: reviewerId, revieweeData : revieweeData, } });

  }

  
  return (
    <div className="item-container">
      <div className="item-top-section">
        <div className="item-image-container">
          <img
            src= {props.src}
            alt="Profile"
            className="item-image"
          />
        </div>
        <div className="item-text-container">
          <h2 className="name">{props.name}</h2>
          <p className="designation">{props.designation}</p>
          <StarRating rating= {props.rating} />
        </div>
       </div>
        <div className="person-details-section">
            <div className="person-icon-link-container">
                <FaCommentAlt className="person-link-icon" />
                <button  className="person-feedback-link" style={{ color: '#4C3D3D' }} onClick={handleReviewPage}>
                Give Review
              </button>
            </div>
            <div className="person-icon-link-container">
                <FaStar className="person-link-icon" />
                <button  className="person-feedback-link" style={{ color: '#4C3D3D' }} onClick={handleRatingPage}>
                Give Rating
              </button>
                {/* <Link className='person-feedback-link' style={{color: '#4C3D3D'}} to={{ pathname: "/ratingform", state: { revieweeData,reviewerId } }}>Give Rating</Link> */}
            </div>    
         </div>
    </div>
  );
}

export default PersonItem;
