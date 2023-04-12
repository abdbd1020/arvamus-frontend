import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css"; // import the CSS file
import backgroundImage from "./Images/finbig.png";
import logoImage from "./Images/logor.png";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    window.location.href = "./home";
    event.preventDefault();
    // handle login logic here
  };

  return (
    <div
      className="login-page-container"
      // style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="logo-container">
        <img src={logoImage} alt="Logo" className="logo-image" />
        <h1 className="website-name">Arvamus</h1>
      </div>
      <div className="login-box">
      <h2 style={{ color: 'black', fontFamily: 'MyFont' }}>Login </h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              placeholder= "Enter your email"
              id="email"
              className="form-input"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              className="form-input"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button type="submit" className="submit-button">
            Login
          </button>
        </form>
        <div className="last-line">
          <p className="forgot-password">Forgot Password?</p>
          <p className="signup-link">Don't have an account?|<Link style={{color: 'blue'}} to="/signupChoice">Signup</Link></p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
