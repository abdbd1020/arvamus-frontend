import React, { useState } from "react";
import Sidebar from '../../../Dashborad/Sidebar';
import TeacherElement from "../TeacherElement";
import './IndividualReview.css'
import prof1 from "../../../Images/prof1.jpg"
import teacherImage from "../../../Images/teacher4.png"
import studentImage from "../../../Images/student4.png"
import staffImage from "../../../Images/staff4.png"
import ReviewElement from '../ReviewElement';

function IndividualReviews (){
    var currentTeacher = 
    <TeacherElement
        src = {prof1} 
        teacherName = "Farhan Mahmud" 
        teacherDesignation = "Professor"
        impression = "Good"
        // reviewtext = "Reviews"
        rating = {2} 
    />

    var reviewList = [
        <ReviewElement
            src = {teacherImage} 
            paragraph = "He is a very good teacher" 
            key="1" text="Item 1"
        />,
        <ReviewElement
            src = {studentImage} 
            paragraph = "Bad teacher" 
            key="2" text="Item 2"
        />,
        <ReviewElement
            src = {staffImage} 
            paragraph = "Moderate teacher" 
            key="3" text="Item 3"
        />,
      ];

      const [teacher, setTeacher] = useState(currentTeacher);
      const[reviews, setReview] = useState(reviewList);
    return (
        <Sidebar>
            <div className='reviews-teacher-container'>
            <TeacherElement
                src = {prof1} 
                teacherName = "Farhan Mahmud" 
                teacherDesignation = "Professor"
                impression = "Good"
                isbutton = "true"
                buttontext = "Give Review"
                // reviewtext = "a"
                rating = {2} 
            />
                <ul className="review-list">
                    {reviewList.map(component => (
                    <li key={component.key}>
                        {component}
                    </li>
                    ))}
                </ul>
            </div>
        </Sidebar>

    );
};

export default IndividualReviews;