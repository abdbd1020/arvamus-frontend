import React, { useState } from "react";
import "./HomepPge.css";
import Navbar from "../Navbar";
import PageElement from "./PageElement";
import aboutImage from "../Images/feedback.png";

const Homepage = () => {
  const [activePage, setActivePage] = useState(0);

  const handleNextPage = () => {
    setActivePage(activePage === 3 ? 0 : activePage + 1);
  };

  const handlePrevPage = () => {
    setActivePage(activePage === 0 ? 3 : activePage - 1);
  };

  return (
    <>
      <Navbar />
      <div className="about-page">
        <div className="slider">
          <div className={`slide active-slide-${activePage}`}>
            <PageElement
              heading="About"
              description="Arvamus is feedback giving system for educational institutions. Here, the users can give feedbacks such as review, ratings and complaints for the "
              src={aboutImage}
            />
          </div>
          <div
            className={`slide active-slide-${
              activePage === 3 ? 0 : activePage + 1
            }`}
          >
            <h2>Page 2</h2>
            <p>Content for page 2 goes here.</p>
          </div>
          <div
            className={`slide active-slide-${
              activePage === 3 ? 1 : activePage + 2
            }`}
          >
            <h2>Page 3</h2>
            <p>Content for page 3 goes here.</p>
          </div>
          <div
            className={`slide active-slide-${
              activePage === 3 ? 2 : activePage + 3
            }`}
          >
            <h2>Page 4</h2>
            <p>Content for page 4 goes here.</p>
          </div>
          <div className="slider-arrows">
            <button onClick={handlePrevPage}>&larr;</button>
            <button onClick={handleNextPage}>&rarr;</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
