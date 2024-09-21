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
import Task from "./pages/Task/index"
import TaskDetail from "./pages/Task/TaskDetail"
import DefaultLayout from "./layout"
import PrivateRoute from "./components/PrivateRoute";
function App() {
  return (
    <Routes>
      <Route element={<PrivateRoute/>}>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="task" element={<Task />}>
            <Route path="detail:id" element={<TaskDetail/>}/>
          </Route>
        </Route>
      </Route>
      <Route path="user/login" element={<Login />} />
      <Route path="user/register" element={<Signup />} />
    </Routes>
  );
}

export default App;
