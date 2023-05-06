import React from 'react';
import TeacherElement from '../TeacherFeedbacks/TeacherElement';
import Sidebar from '../../Dashborad/Sidebar/Sidebar';
import './InfrastructureFeedbacks.css'
import prof1 from "../../Images/prof1.jpg"

function InfrastructureFeedbacks (){
    var componentList = [
        <TeacherElement 
            src = {prof1} 
            teacherName = "Farhan Mahmud" 
            teacherDesignation = "Professor"
            impression = "Good"
            rating = {2}
            reviewtext = "See Reviews" 
            key="1" text="Item 1"
        />,
        <TeacherElement 
            src = {prof1} 
            teacherName = "Farhan Mahmud" 
            teacherDesignation = "Professor"
            impression = "Good"
            rating = {2}
            reviewtext = "See Reviews" 
            key="2" text="Item 2"
        />,
        <TeacherElement 
            src = {prof1} 
            teacherName = "Farhan Mahmud" 
            teacherDesignation = "Professor"
            impression = "Good"
            rating = {2}
            reviewtext = "See Reviews" 
            key="3" text="Item 3"
        />
      ];
    return (
        <Sidebar>
            <div>
                <h1 className='review-page-heading'>Teacher Reviews</h1>
                <ul className="teacher-list">
                    {componentList.map(component => (
                    <li key={component.key}>
                        {component}
                    </li>
                    ))}
                </ul>
            </div>
        </Sidebar>

    );
};

export default InfrastructureFeedbacks;