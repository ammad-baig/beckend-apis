import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Courses from "../pages/courses";
import AddCourse from "../pages/AddCourse";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

export default function AppRouter() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Courses />} />
          <Route path="/add" element={<AddCourse />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/add/:id" element={<AddProject />} /> */}
        </Routes>
      </Router>
    </>
  );
}
