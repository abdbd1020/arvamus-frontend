import React, { useState } from 'react';
import './Sidebar.css'
import logoImage from '../../Images/logor.png'
import {
    FaHome,
    FaBars,
    FaStar,
    FaCog,
    FaCommentAlt,
    FaChalkboardTeacher,
    FaBuilding,
    FaIndustry,
    FaUserFriends
    // FaTh,
    // FaUserAlt,
    // FaRegChartBar,
    // FaShoppingBag,
    // FaThList
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {

    const [showImage, setShowImage] = useState(false);

    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen (!isOpen);
        setShowImage(!showImage);
    } 
    const menuItem=[
        {
            path:"/dashboard",
            name:"Dashboard",
            icon:<FaHome/>
        },
        {
            path:"/infrafeedbacks",
            name:"Infrastructure Feedbacks",
            icon:<FaIndustry/>
        },
        {
            path:"/teacherfeedbacks",
            name:"Teacher Feedbacks",
            icon:<FaChalkboardTeacher/>
        },
        {
            path:"/staffeedbacks",
            name:"Staff Feedbacks",
            icon:<FaUserFriends/>
        },
        {
            path:"/settings",
            name:"Settings",
            icon:<FaCog/>
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <div>
                        {showImage && <img className='logo-image' src={logoImage} alt="Image" />}
                    </div>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;