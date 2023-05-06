import React from 'react';
import StaffElement from './StaffElement';
import Sidebar from '../../Dashborad/Sidebar/Sidebar';
import './StaffFeedbacks.css'
import prof1 from "../../Images/prof1.jpg"

function StaffFeedbacks (){
    var componentList = [
        <StaffElement 
            src = {prof1} 
            staffName = "Farhan Mahmud" 
            staffDesignation = "Professor"
            impression = "Good"
            rating = {2}
            reviewtext = "See Feedbacks" 
            key="1" text="Item 1"
        />,
        <StaffElement 
            src = {prof1} 
            staffName = "Farhan Mahmud" 
            staffDesignation = "Professor"
            impression = "Good"
            rating = {2}
            reviewtext = "See Feedbacks"  
            key="2" text="Item 2"
        />,
        <StaffElement 
            src = {prof1} 
            staffName = "Farhan Mahmud" 
            staffDesignation = "Professor"
            impression = "Good"
            rating = {2}
            reviewtext = "See Feedbacks"  
            key="3" text="Item 3"
        />
      ];
    return (
        <Sidebar>
            <div>
                <h1 className='staff-page-heading'>Staff Reviews</h1>
                <ul className="staff-list">
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

export default StaffFeedbacks;