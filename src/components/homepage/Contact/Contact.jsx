import React from 'react';
import './Contact.css';
import { FaEnvelope, FaHandsHelping, FaUserFriends, FaMicrophone } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact-section">
      <h1 className="main-heading bg-gradient-to-r from-[#b74b9b] to-white text-transparent bg-clip-text text-4xl font-bold text-center py-8">Contact Us</h1>
      <div className="contact-info">
        {/* Queries Section */}
        <div className="contact-category">
          <div className="category-icon big-icon">
            <FaEnvelope size={60} className="centered-icon" />
          </div>
          <h3 className="bigger-heading">Queries</h3>
          <p><a href="mailto:contact@vishwapreneur.in" className="gradient-text">Email: contact@vishwapreneur.in</a></p>
        </div>

        {/* Sponsorship Opportunities Section */}
        <div className="contact-category">
          <div className="category-icon big-icon">
            <FaHandsHelping size={60} className="centered-icon" />
          </div>
          <h3 className="bigger-heading">Sponsorship Opportunities</h3>
          <p><a href="mailto:edcflm.sponsorship@gmail.com" className="gradient-text">Email: edcflm.sponsorship@gmail.com</a></p>
        </div>

        {/* Collaboration Opportunities Section */}
        <div className="contact-category">
          <div className="category-icon big-icon">
            <FaUserFriends size={60} className="centered-icon" />
          </div>
          <h3 className="bigger-heading">Collaboration Opportunities</h3>
          <p><a href="mailto:pr@vishwapreneur.in" className="gradient-text">Email: pr@vishwapreneur.in</a></p>
        </div>

        {/* Speaking Opportunities Section */}
        <div className="contact-category">
          <div className="category-icon big-icon">
            <FaMicrophone size={60} className="centered-icon" />
          </div>
          <h3 className="bigger-heading">Speaking Opportunities</h3>
          <p><a href="mailto:curator@vishwapreneur.in" className="gradient-text">Email: curator@vishwapreneur.in</a></p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
