import React from 'react';
import './Guest.css';
import guest1Image from '../../../assets/image.png'; // Import guest images accordingly
import guest2Image from '../../../assets/image.png';

const Guest = () => {
  return (
    <div className="guest-section">
      <h1 className="main-heading bg-gradient-to-r from-[#b74b9b] to-white text-transparent bg-clip-text text-4xl font-bold text-center py-8">Guests</h1>
      <div className="guest-cards">
        {/* Guest 1 Section */}
        <div className="guest-card">
          <div className="guest-image">
            <img src={guest1Image} alt="Guest 1" className="centered-icon" />
          </div>
          <div className="guest-details">
            <h3 className="bigger-heading">Guest 1</h3>
            <p className="post">Role 1</p>
            <p className="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>

        {/* Guest 2 Section */}
        <div className="guest-card">
          <div className="guest-image">
            <img src={guest2Image} alt="Guest 2" className="centered-icon" />
          </div>
          <div className="guest-details">
            <h3 className="bigger-heading">Guest 2</h3>
            <p className="post">Role 2</p>
            <p className="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>

        {/* Additional Guest Cards */}
        {/* Add more similar divs for other guests */}
        <div className="guest-card">
          <div className="guest-image">
            <img src={guest2Image} alt="Guest 2" className="centered-icon" />
          </div>
          <div className="guest-details">
            <h3 className="bigger-heading">Guest 2</h3>
            <p className="post">Role 2</p>
            <p className="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>

        <div className="guest-card">
          <div className="guest-image">
            <img src={guest2Image} alt="Guest 2" className="centered-icon" />
          </div>
          <div className="guest-details">
            <h3 className="bigger-heading">Guest 2</h3>
            <p className="post">Role 2</p>
            <p className="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Guest;
