import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './Home.jsx';
import Blogs from './Blogs.jsx';
// import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Show from './Show.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/show" element={<Show/>}></Route>
      <Route path="/showBlogs" element={<Blogs/>}></Route>
    </Routes>
  </Router>
)
