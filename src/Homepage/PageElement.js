import React from "react";
import "./PageElement.css";

function PageElement(props) {
  return (
    <div className="container">
      <div className="left-section">
        <h1>{props.heading}</h1>
        <p>{props.description}</p>
      </div>
      <div className="right-section">
        <img src= {props.src} alt="Image" />
      </div>
    </div>
  );
}

export default PageElement;
