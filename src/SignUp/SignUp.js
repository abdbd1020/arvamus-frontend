import React, { useState } from "react";
import "./SignUp.css";
import logoImage from "../Images/logor.png";
import userService from "../Services/userService";
import Navbar from "../General/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const attributessOfToast = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    const errors = validateForm();
    const type = "STUDENT";
    const body = JSON.stringify({
      firstName: firstName,
      lastName: lastName,
      email: email,
      mobile: registrationNumber,
      password: password,
      type: type,
      designation: "designation",
      department: "CSE",
    });

    if (Object.keys(errors).length === 0) {
      const response = await userService.userSignUp(body);
      if (response === null) {
        toast("Error in signup", attributessOfToast);
      } else {
        console.log(response);
        toast("User successfully registered", attributessOfToast);
        navigate("/login", { state: { isSignUp: true } });
      }
      // submit the form data to the server
    } else {
      setErrors(errors);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!firstName.trim()) {
      errors.firstName = "First name is required";
    }
    if (!lastName.trim()) {
      errors.lastName = "Last name is required";
    }
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Invalid email format";
    }
    if (!registrationNumber.trim()) {
      errors.registrationNumber = "Registration number is required";
    }
    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }
    if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
    return errors;
  };

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

      <div className="signup-container">
        <img src={logoImage} alt="Logo" className="logo-image2" />
        <form className="signup-form" onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
          <div className="signup-row">
            <div className="signup-field">
              {/* <label className="form-label" htmlFor="first-name">
                First Name*
              </label> */}
              <input
                type="text"
                id="first-name"
                name="first-name"
                value={firstName}
                placeholder="Enter First Name"
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              {errors.firstName && <p className="error">{errors.firstName}</p>}
            </div>
            <div className="signup-field">
              {/* <label className="form-label" htmlFor="last-name">
                Last Name
              </label> */}
              <input
                type="text"
                id="last-name"
                name="last-name"
                value={lastName}
                placeholder="Enter Last name"
                onChange={(e) => setLastName(e.target.value)}
                required
              />
              {errors.lastName && <p className="error">{errors.lastName}</p>}
            </div>
          </div>
          <div className="signup-row">
            <div className="signup-field">
              {/* <label className="form-label" htmlFor="email">
                Email*
              </label> */}
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="signup-field">
              {/* <label className="form-label" htmlFor="registration-number">
                Phone Number*
              </label> */}
              <input
                type="text"
                id="registration-number"
                name="registration-number"
                value={registrationNumber}
                placeholder="Enter Phone Number"
                onChange={(e) => setRegistrationNumber(e.target.value)}
                required
              />
              {errors.registrationNumber && (
                <p className="error">{errors.registrationNumber}</p>
              )}
            </div>
          </div>
          <div className="signup-row">
            <div className="signup-field">
              {/* <label className="form-label" htmlFor="password">
                Password*
              </label> */}
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <div className="signup-field">
              {/* <label className="form-label" htmlFor="confirm-password">
                Confirm Password*
              </label> */}
              <input
                type="password"
                id="confirm-password"
                name="confirm-password"
                value={confirmPassword}
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              {errors.confirmPassword && (
                <p className="error">{errors.confirmPassword}</p>
              )}
            </div>
          </div>
          <div className="signup-radio-section">
            <h2 className="radio-heading">Impression</h2>
            <div className="radio-options">
              <div className="specific-option">
                <input
                  className="ind-option"
                  type="radio"
                  id="option1"
                  name="options1"
                  value="option1"
                />
                <label
                  className="ind-label"
                  style={{ color: "green" }}
                  htmlFor="option1"
                >
                  Positive
                </label>
              </div>
              <div className="specific-option">
                <input
                  className="ind-option"
                  type="radio"
                  id="option2"
                  name="options1"
                  value="option2"
                />
                <label
                  className="ind-label"
                  style={{ color: "white" }}
                  htmlFor="option2"
                >
                  Neutral
                </label>
              </div>
              <div className="specific-option">
                <input
                  className="ind-option"
                  type="radio"
                  id="option3"
                  name="options1"
                  value="option3"
                />
                <label
                  className="ind-label"
                  style={{ color: "red" }}
                  htmlFor="option3"
                >
                  Negative
                </label>
              </div>
            </div>
          </div>
          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
}

export default Signup;
