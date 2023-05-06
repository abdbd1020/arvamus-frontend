import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import LoginPage from "./LoginPage/LoginPage";
import Signup from "./SignUp/SignUp";
import Dashboard from "./Dashborad/Dashoboard";
import Reviews from "./Reviews/Reviews";
import Ratings from "./Ratings/Ratings";
import Settings from "./Settings/Settings";
import TeacherReviews from "./Reviews/TeacherReviews/TeacherReviews";
import IndividualReviews from "./Reviews/TeacherReviews/IndividualReview/IndividualReview";
import ReviewForm from "./Reviews/TeacherReviews/IndividualReview/ReviewForm";

// import { Navbar } from "./Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="*" element={<h1> PAGE NOT FOUND</h1>} />
          <Route path="/" element={<Homepage />} />
          {/* <Route path="/" element={<Signup />} /> */}
          {/* <Route path="/" element={<SignupChoice />} /> */}
          {/* <Route path="/" element={<HomePage />} /> */}
          {/* <Route path="/" element={<TeacherReviews />} /> */}
          {/* <Route path="/" element={<IndividualReviews />} /> */}
          {/* <Route path="/signupChoice" element={<SignupChoice />} /> */}
          <Route path="/home" element={<Homepage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/ratings" element={<Ratings />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/teacherev" element={<TeacherReviews />} />
          <Route path="/indteacherev" element={<IndividualReviews />} />
          <Route path="/addreview" element={<ReviewForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
