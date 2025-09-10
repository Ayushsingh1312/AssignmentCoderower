import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Update from "./pages/Update";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/update">Update</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
