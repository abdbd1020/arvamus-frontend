import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css"; // import the CSS file

import logoImage from "../Images/logor.png";
import userService from "../Services/userService";
import Navbar from "../General/Navbar";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const attributessOfToast = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  };
  const navigate = useNavigate();
  // const [isSignUp, setIsSignUp] = useState(location.state?.isSignUp);

  // useEffect(() => {
  //   if (isSignUp) {
  //     toast("Sign Up Successful please login", attributessOfToast);
  //     setIsSignUp(false);
  //   }
  // }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    // const response = await appService.getAllTeachers();
    // console.log(response);
    // alert("Login Successful");

    if (!email || !password) {
      toast("Please enter all the fields", attributessOfToast);
    }
    const body = JSON.stringify({
      email: email,
      password: password,
    });
    userService.userLogin(body).then((response) => {
      if (response.status != true) {
        console.log("Login failed");
        toast("Login failed", attributessOfToast);
        return;
      } else {
        saveDataToLocalStorage(response);
        navigate("/dashboard", { state: { userId: response.user.userid } });

        // window.location.href = "/dashboard";
      }
    });

    // handle login logic here
  };

  function handleForgot() {}

  function saveDataToLocalStorage(response) {
    localStorage.setItem("userId", response.user.userid);
    localStorage.setItem("userType", response.user.type);
    localStorage.setItem("userPrivateKey", response.user.privatekey);
  }

  return (
    <>
      <Navbar />
      {/* <div className="container"> */}

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

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
              <p className="forgot-password" onClick={handleForgot}>
                Forgot Password?
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
