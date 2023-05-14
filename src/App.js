import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage/LoginPage";
import Signup from "./SignUp/SignUp";

import ReviewForm from "./Feedbacks/FeedbackForms/ReviewForm/ReviewForm";
import RatingSelect from "./Feedbacks/FeedbackForms/RatingForm/RatingSelect";
import RatingForm from "./Feedbacks/FeedbackForms/RatingForm/RatingForm";
import ReceivedFeedbacks from "./Feedbacks/ReceivedFeedbacks/ReceivedFeedbacks";
import GivenFeedbacks from "./Feedbacks/GivenFeedbacks/GivenFeedbacks";
import Dashboard from "./Dashboard/Dashboard";
<<<<<<< HEAD
import HomePage from "./HomePage/HomePage";
import Profile from "./Profile/Profile";
=======
import HomePage from "./Homepage/HomePage";
>>>>>>> b693d1b305e14803927c66f8ccb9102a31880dc8
// import ReviewForm from "./Reviews/TeacherReviews/IndividualReview/ReviewForm";

// import { Navbar } from "./Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="*" element={<h1> PAGE NOT FOUND</h1>} />
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/" element={<Signup />} /> */}
          {/* <Route path="/" element={<SignupChoice />} /> */}
          {/* <Route path="/" element={<HomePage />} /> */}
          {/* <Route path="/" element={<TeacherReviews />} /> */}
          {/* <Route path="/" element={<IndividualReviews />} /> */}
          {/* <Route path="/signupChoice" element={<SignupChoice />} /> */}
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/received" element={<ReceivedFeedbacks />} />
          <Route path="/given" element={<GivenFeedbacks />} />
          <Route path="/reviewform" element={<ReviewForm />} />
          <Route path="/ratingform" element={<RatingForm />} />
          <Route path="/test" element={<RatingSelect />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
