import React from 'react';
import Sidebar from '../Dashborad/Sidebar/Sidebar';
import "./Reviews.css"
import infrastuctureImage from '../Images/infra.jpg'
import teacherImage from '../Images/teacherev.jpg'
import staffImage from '../Images/staffrev.jpg'

const ImageAndText = (props) => (
    <div className='reviews-image-box' onClick={goToPage}>
      <img className='reviews-round-image'  src={props.src} alt={props.alt}/>
      <span className= "reviews-image-text">{props.text}</span>
    </div>
  );

function goToPage(reviewChoice)
{
  window.location.href = "./teacherev";
}

const Reviews = () => {
    return (
        <Sidebar>
            <div className="reviews-choice-container">
                <div className="reviews-image-container">
                    <ImageAndText
                        src= {infrastuctureImage}
                        alt="Infrastructure Image"
                        text="Infrastructure Reviews"
                    />
                    <ImageAndText
                        src= {teacherImage}
                        alt="Infrastructure Image"
                        text="Teacher Reviews"
                    />
                    <ImageAndText
                        src= {staffImage}
                        alt="Infrastructure Image"
                        text="Staff Review"
                    />
                </div>
            </div>
        </Sidebar>
    );
};

export default Reviews;