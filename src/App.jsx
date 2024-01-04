// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Landing from './Landing';
import Login from './components/SigninUp/Login';
import Signup from './components/SigninUp/Signup';
import Footer from './components/homepage/Footer/Footer'
import Navbar from './components/homepage/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  
  return (
    <div>
      <Router>
        <Navbar></Navbar>
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/signin" element={<Login/>} />
        </Routes >
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App
