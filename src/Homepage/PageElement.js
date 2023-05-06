import React from "react";
import "./PageElement.css";
import leftSectionBackground from '../Images/finbig.png'

function PageElement(props) {
  return (
    <div className="element-container">
      <div className="left-section"
    //    style={{ backgroundImage: `url(${leftSectionBackground})` }}
      >
        <h1 className="element-heading">{props.heading}</h1>
        <p className="element-description">{props.description}</p>
      </div>
      <div className="right-section">
        <img className="about-element-image" src= {props.src} alt="Image" />
      </div>
    </div>
  );
}

export default PageElement;
