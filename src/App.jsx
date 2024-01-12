// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Landing from './Landing';
import HaveYouPaid from './components/FormFlow/HaveYouPaid';
import Login from './components/SigninUp/Login';
import Signup from './components/SigninUp/Signup';
import SignupPage from './components/SigninUp/SignupPage';
import Footer from './components/homepage/Footer/Footer'
import Navbar from './components/homepage/Navbar/Navbar'
import {  Routes, Route } from "react-router-dom";
import RegistrationForm from './components/FormFlow/Registration';
import RegistrationSuccess from './components/FormFlow/Success';
import SponsorsAll from './components/SponsorsPartners/SponsorsBig';
import Guest from './components/guests/GuestInternal';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Gallery from './components/gallery/Gallery';

function App() {  
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/*" element={<Landing />} />
        <Route path="/signupOld" element={<Signup />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sponsors" element={<SponsorsAll />} />
        <Route path="/guests" element={<Guest />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />

        {/* Form Flow */}
        <Route path="/HaveYouPaid" element={<HaveYouPaid />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/RegistrationSuccess" element={<RegistrationSuccess />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App
