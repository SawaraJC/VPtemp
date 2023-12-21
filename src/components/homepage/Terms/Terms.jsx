import React from 'react';
import './Terms.css'; // Import your CSS file for Terms

const Terms = () => {
  return (
    <div className="terms-section">
      <h1 className="main-heading">Terms & Conditions</h1>
      <div className="terms-container">
        <div className="terms-card">
          <div className="terms-content">
            <h2>Age Limit</h2>
            <p>Any person above the age of 13 is allowed to join us for Vishwapreneur'23.</p>
          </div>
        </div>
        <div className="terms-card">
          <div className="terms-content">
            <h2>Privacy Policy</h2>
            <p>By registering for Vishwapreneur'23, you consent to the collection and use of this information as set forth.</p>
          </div>
        </div>
        <div className="terms-card">
          <div className="terms-content">
            <h2>Advertisements & Promotions</h2>
            <p>This website may contain links to third-party websites, products, or services, which may be posted by our affiliates, our partners, or our sponsors. Any kind of promotion regarding them is not allowed.</p>
          </div>
        </div>
        <div className="terms-card">
          <div className="terms-content">
            <h2>Ticket Booking Policy</h2>
            <p>Once you book a seat for this event, it cannot be cancelled under any circumstances, and any request for a fare refund will not be entertained.</p>
          </div>
        </div>
        <div className="terms-card">
          <div className="terms-content">
            <h2>Following Actions are Impermissible</h2>
            <p>
              - Use the information in any manner that could interfere with, disable, disrupt, overburden, or otherwise impair the Service. <br />
              - Use the website in any manner that we reasonably believe to be an abuse of or fraud on any payment system. <br />
              - Access, search, or collect data about Vishwapreneur by any means (automated or otherwise) except as permitted in these Terms or in a separate agreement with EDC VIIT. <br />
              - Any political comment will not be tolerated regarding Vishwapreneur. <br />
              - Legal actions will be taken if any kind of malpractice is found.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
