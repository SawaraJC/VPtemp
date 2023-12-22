import React from 'react';
import './Terms.css'; // Import your CSS file for Terms

const Terms = () => {
  return (
    <div className="terms-section">
      {/* Card 1: Terms & Conditions */}
      <h1 className="main-heading bg-gradient-to-r from-[#b74b9b] to-white text-transparent bg-clip-text text-2xl font-bold text-center">Terms & Conditions</h1>
      <div className="terms-card">
        <div className="terms-content">
          <ul className="terms-list">
            <li className="terms-item"><strong>Age Limit :</strong> Any person above the age of 13 is allowed to join us for Vishwapreneur'23.</li>
            <br />
            <li className="terms-item"><strong>Privacy Policy :</strong> By registering for Vishwapreneur'23, you consent to the collection and use of this information as set forth.</li>
            <br />
            <li className="terms-item"><strong>Advertisements & Promotions :</strong> This website may contain links to third-party websites, products, or services, which may be posted by our affiliates, our partners, or our sponsors. Any kind of promotion regarding them is not allowed.</li>
            <br />
            <li className="terms-item"><strong>Ticket Booking Policy :</strong> Once you book a seat for this event, it cannot be cancelled under any circumstances, and any request for a fare refund will not be entertained.</li>
          </ul>
        </div>
      </div>

      {/* Add space between cards */}
      <div style={{ marginBottom: '20px' }}></div>

      {/* Card 2: Impermissible Actions */}
      <div className="terms-card">
        <strong>Impermissible Actions</strong>
        <div className="terms-content">
          <ul className="terms-list">
            <br />
            <li>Use the information in any manner that could interfere with, disable, disrupt, overburden, or otherwise impair the Service.</li>
            <li>Use the website in any manner that we reasonably believe to be an abuse of or fraud on any payment system.</li>
            <li>Access, search, or collect data about Vishwapreneur by any means (automated or otherwise) except as permitted in these Terms or in a separate agreement with EDC VIIT.</li>
            <li>Any political comment will not be tolerated regarding Vishwapreneur.</li>
            <li>Legal actions will be taken if any kind of malpractice is found.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Terms;
