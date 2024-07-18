import "./App.css";
import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home"
import Login from "./Components/Login"
import Signup from './Components/Signup'
import Dashboard from './Components/Dashboard'
import PrivateRoute from "./Components/PrivateRoute";

function App() {
  const [isLoggedIn,setLogin] = useState(false);

  return (
    <div className="w-screen h-screen bg-richblack-900 flex flex-col ">
      <Navbar isLoggedIn={isLoggedIn} setLogin={setLogin} />
      <Routes>
        <Route path="/" element= {<Home/>} />
        <Route path="/login" element= {<Login setLogin={setLogin}/>} />
        <Route path="/signup" element= {<Signup setLogin={setLogin}/>} />
        <Route path="/dashboard" element= {
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Dashboard/>
          </PrivateRoute>
        } />
      </Routes>
    </div>
  );
}

export default App;
