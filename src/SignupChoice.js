import React from 'react';
import "./SignupChoice.css";
import studentImage from "./Images/student4.png"
import teacherImgae from "./Images/teacher4.png"
import staffImage from "./Images/staff4.png"
import backgroundImage2 from "./Images/finbig.png"

const ImageWithText = (props) => (
  <div className= {props.className} onClick={goToSignUpPage}>
    <img  src={props.src} alt={props.alt}
     />
    <p className= {props.classname2}>{props.text}</p>
  </div>
);

function goToSignUpPage()
{
  window.location.href = "./signup";
}

const SignupChoice = () => (
  <div className= 'image-group'
    style={{ backgroundImage: `url(${backgroundImage2})` }}
   >
    <ImageWithText
      className = "student-image"
      src= {studentImage}
      alt="Image 1"
      text="Sign up as a student"
      classname2 = "image-below-text"
    />
    <ImageWithText
      classname= "teacher-image"
      src={teacherImgae}
      alt="Image 2"
      text="Sign up as a teacher"
      classname2 = "image-below-text"
    />
    <ImageWithText
        classname= "staff-image"
        src={staffImage}
        alt="Image 3"
        text="Sign up as a staff"
        classname2 = "image-below-text"
    />
  </div>
);

export default SignupChoice;