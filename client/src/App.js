import Viewer from "./components/3Dviewer";
import Feed from "./components/feed";
import Home from "./components/home";
import "./style.css";
import Login from './components/login';
import Register from './components/register';
import Profile from './components/profile';
import Talents from "./components/talents/talents";
import Post from './components/post/post'
import React, { useState } from 'react';
import { useCookies } from "react-cookie";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";



function App() {
  
  return (
    <BrowserRouter>
    <div className="content">
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feed" element={<Feed/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/talents" element={<Talents/>}/>
        <Route path="/post" element={<Post/>}/>
    </Routes>
    </div>
  </BrowserRouter>

  );
}

export default App;
