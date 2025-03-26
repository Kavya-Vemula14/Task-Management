import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeroSection from "./components/Home/HomePage";
import PublicNavbar from "./components/Navbar/PublicNavbar";
import LoginForm from "./components/Users/Login";
import PrivateNavbar from "./components/Navbar/PrivateNavbar";

import { useSelector } from "react-redux";
import RegistrationForm from "./components/Users/Register";
import AddTask from "./components/Task/AddTask";
import AuthRoute from "./components/Auth/AuthRoute";
import TaskList from "./components/Task/TaskList";
import UpdateTask from "./components/Task/UpdateTask";
import UserProfile from "./components/Users/UserProfile";

function App() {
  //get the token
  const user = useSelector((state) => state?.auth?.user);
  return (
    <BrowserRouter>
      {user ? <PrivateNavbar /> : <PublicNavbar />}
      <Routes>
        <Route path="/" element={<HeroSection />} />

        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route
          path="/add-task"
          element={
            <AuthRoute>
              <AddTask />
            </AuthRoute>
          }
        />
        <Route
          path="/lists"
          element={
            <AuthRoute>
              <TaskList />
            </AuthRoute>
          }
        />
        <Route
          path="/update-lists/:id"
          element={
            <AuthRoute>
              <UpdateTask />
            </AuthRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <AuthRoute>
              <UserProfile />
            </AuthRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
