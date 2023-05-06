import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import LoginPage  from "./LoginPage/LoginPage";
import Signup from "./SignUp/SignUp";
import Dashboard from "./Dashborad/Dashoboard";
import Settings from "./Settings/Settings"
import IndividualReview from "./Feedbacks/TeacherFeedbacks/Individual Reviews/IndividualReview";
import TeacherFeedbacks from "./Feedbacks/TeacherFeedbacks/TeacherFeedbacks";
import InfrastructureFeedbacks from "./Feedbacks/InfrastructureFeedbacks/InsfrastructureFeedbacks";
import StaffFeedbacks from "./Feedbacks/StaffFeedbacks/StaffFeedbacks";
import ReviewForm from "./Feedbacks/FeedbackForms/ReviewForm/ReviewForm";
import RatingSelect from "./Feedbacks/FeedbackForms/RatingForm/RatingSelect";
import RatingForm from "./Feedbacks/FeedbackForms/RatingForm/RatingForm";
import IndividualStaff from "./Feedbacks/StaffFeedbacks/IndividualStaff/IndividualStaff";
// import ReviewForm from "./Reviews/TeacherReviews/IndividualReview/ReviewForm";

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
          <Route path="/settings" element={<Settings />} />
          <Route path="/teacherfeedbacks" element={<TeacherFeedbacks />}/>
          <Route path="/infrafeedbacks" element={<InfrastructureFeedbacks />}/>
          <Route path="/teacherfeedbacks" element={<StaffFeedbacks />}/>
          <Route path="/staffeedbacks" element={<InfrastructureFeedbacks />}/>
          <Route path="/indteacherev" element={<IndividualReview />}/>
          <Route path="/indstaffrev" element={<IndividualStaff />}/>
          <Route path="/reviewform" element={<ReviewForm />}/>
          <Route path="/ratingform" element={<RatingForm />}/>
          <Route path="/test" element={<RatingSelect />}/>
          {/* <Route path="/addreview" element={<ReviewForm />}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;