import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Reviews.css'; // Import your CSS file for Reviews

import person1Image from '../../../assets/image.png';
import person2Image from '../../../assets/image.png';
// Import other images similarly

const reviewsData = [
  {
    id: 1,
    name: 'John Doe',
    opinion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: person1Image,
  },
  {
    id: 2,
    name: 'Jane Smith',
    opinion: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: person2Image,
  },
   {
    id: 2,
    name: 'Jane Smith',
    opinion: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: person2Image,
  },
  // Add more review objects similarly
];

const Reviews = () => {
  const settings = {
    dots: true,
    arrows: false, // Hide arrows
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Reduce automatic scroll time to 2 seconds
    dotsClass: 'slick-dots custom-dots', // Custom class for the dots container
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="reviews-section">
      <h1 className="main-heading bg-gradient-to-r from-[#b74b9b] to-white text-transparent bg-clip-text text-4xl font-bold text-center py-8">Reviews</h1>
      <Slider {...settings}>
        {reviewsData.map((review) => (
          <div key={review.id} className="review-card">
            <img src={review.image} alt={review.name} className="person-image" />
            <p className="opinion">{review.opinion}</p>
            <p className="name">{review.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Reviews;
