import React, { useState } from 'react';
import logoImage from '../Images/logor.png'
import {
    FaHome,
    FaBars,
    FaStar,
    FaCog,
    FaCommentAlt
    // FaTh,
    // FaUserAlt,
    // FaRegChartBar,
    // FaCommentAlt,
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
            path:"/home",
            name:"Home",
            icon:<FaHome/>
        },
        {
            path:"/reviews",
            name:"Reviews",
            icon:<FaCommentAlt/>
        },
        {
            path:"/ratings",
            name:"Ratings",
            icon:<FaStar/>
        },
        {
            path:"/settings",
            name:"Settings",
            icon:<FaCog/>
        }

        // {
        //     path:"/product",
        //     name:"Product",
        //     icon:<FaShoppingBag/>
        // },
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   {/* <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1> */}
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