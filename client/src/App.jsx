// src/App.jsx
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import CreateTable from "./pages/CreateTable";
import Home from "./pages/Home";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/u/create-table" element={<CreateTable />} />
        <Route path="/u/home" element={<Home />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
