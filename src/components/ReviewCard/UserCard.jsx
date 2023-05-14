import React from "react";
import { Rating } from "../Rating/Rating";
import "./UserCard.css";
import { LetterImage } from "../ImageComponent/LetterImage";
import { ServerEnum } from "../../ServerEnum";

export function UserCard(props) {
  const [rating, setRating] = React.useState(0); 
  const [isDataLoaded, setIsDataLoaded] = React.useState(false); 
  const {
    information = {},
    onRatingButtonClick = () => {},
    onReviewButtonClick = () => {},
  } = props;
  const {
    name = props.information.firstname + " " + props.information.lastname,
    designation = props.information.designation || "Teacher",
  } = information;
  if(Number(props.information.showrating)===1){
    if(!isDataLoaded){
     setRating(Number(props.information.averagerating))
     setIsDataLoaded(true)}
  }

  return (
    <div className="user-card">
      <div className="user-header">
        <div className="name-group">
          <LetterImage name={name} />
          <p className="info">
            <span className="name">{name}</span>
            <span className="designation">{designation}</span>
            <span className="user-Rating"> User Rating</span>
            <Rating rating={rating} />
          </p>
        </div>
      </div>
      {localStorage.getItem("userType") === ServerEnum.STUDENT &&(
      <div className="user-details">
        <button onClick={onRatingButtonClick} className="share-group">
          <span>Give Rating</span>
        </button>
       <button onClick={onReviewButtonClick} className="share-group">
          <span>Give Review</span>
        </button>
      </div>)}
    </div>
  );
}
