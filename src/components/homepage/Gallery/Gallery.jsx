import React from 'react';
import './Gallery.css'; // Import your CSS file for Gallery
import eventImage1 from '../../../assets/event.jpg'; // Import your event images
import eventImage2 from '../../../assets/event.jpg'; // Import other event images similarly

const Gallery = () => {
  return (
    <div className="sponsors-section">
       <div className="gallery-section">
      <h1 className="main-heading bg-gradient-to-r from-[#b74b9b] to-white text-transparent bg-clip-text text-4xl font-bold text-center py-8">Event Gallery</h1>

      <div className="image-grid">
        <div className="gallery-item">
          <img src={eventImage1} alt="Event 1" className="gallery-image" />
        </div>
        <div className="gallery-item">
          <img src={eventImage2} alt="Event 2" className="gallery-image" />
        </div>
        {/* Add more images using imported variables similarly */}
        <div className="gallery-item">
          <img src={eventImage2} alt="Event 2" className="gallery-image" />
        </div>

        <div className="gallery-item">
          <img src={eventImage2} alt="Event 2" className="gallery-image" />
        </div>

      </div>
    </div>
    </div>
   
  );
};

export default Gallery;
