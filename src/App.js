import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage  from "./LoginPage/LoginPage";
import SignupChoice from "./SignUpChoice/SignupChoice";
import Signup from "./SignUp/SignUp";
import HomePage from "./Homepage/HomePage";
import Reviews from "./Reviews/Reviews"
import Ratings from "./Ratings/Ratings"
import Settings from "./Settings/Settings"

// import { Navbar } from "./Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="*" element={<h1> PAGE NOT FOUND</h1>} />
          <Route path="/" element={<LoginPage />} />
          {/* <Route path="/" element={<Signup />} /> */}
          {/* <Route path="/" element={<SignupChoice />} /> */}
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/signupChoice" element={<SignupChoice />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/ratings" element={<Ratings />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;