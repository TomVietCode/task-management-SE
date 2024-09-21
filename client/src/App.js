import React from "react";
import {
  Route,
  Routes,
} from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import Home from "./pages/Home";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Task from "./components/Task/index"
import DefaultLayout from "./layout/DefaultLayout"
function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
