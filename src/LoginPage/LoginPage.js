import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css"; // import the CSS file
import backgroundImage from "../Images/finbig.png";
import logoImage from "../Images/logor.png";
import userService from "../Services/userService";
import Navbar from "../Navbar";

function LoginPage() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    if (!email || !password) {
      alert("Please enter your email and password");
    }
    const body = JSON.stringify({
      email: email,
      password: password,
    });
    if (userService.userLogin(body) === 0) {
      alert("Login failed");
    } else {
      window.location.href = "/dashboard";
    }
    event.preventDefault();
    // handle login logic here
  };

  function handleForgot(){

  };

  

  return (
    <>
      <Navbar />
      {/* <div className="container"> */}
      <div className="login-page-container">
        <div className="logo-container">
          <img src={logoImage} alt="Logo" className="logo-image" />
          <h1 className="website-name">Arvamus</h1>
        </div>
        <div className="login-box">
          <h2 className="form-header">Login </h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                placeholder="Enter your email"
                id="email"
                className="login-form-input"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                id="password"
                placeholder="Enter password"
                className="login-form-input"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div className="last-line">
              <button type="submit" className="login-submit-button">
                Login
              </button>
              <p className="forgot-password" onClick={handleForgot}>Forgot Password?</p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
