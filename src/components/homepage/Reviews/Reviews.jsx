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
    name: ' Nikhil Sharma',
    opinion: "It was nice, it was fun. Lot of questions were asked and I loved to answer those questions.",
    image: "https://res.cloudinary.com/da5mmxnn3/image/upload/v1647506687/Speakers/nikhil_qyuop3.jpg",
  },
  {
    id: 2,
    name: 'Prajakta Koli',
    opinion: "First of all, I love college events, I come for the energy, Ifeel like everyone's so mad. So thank you so much for having me and the team is very hardworking, very sweet.Thanks you for making the last minute arrangements.",
    image: "https://res.cloudinary.com/da5mmxnn3/image/upload/v1647510541/Imagescopy/koli_k4yfwv.jpg",
  },
   {
    id: 3,
    name: 'Gaurav Chaudhary',
    opinion: "Yahan jo charm dikh raha hai jo fire hai matlab iss event ki jo complete concept hai wo unique hai. In TG style : Bahot hi badhiya event tha aur isme jo seati thi vo bhi kaafi achi thi kafi badhiya tha, bole toh full value for time.",
    image: "https://res.cloudinary.com/da5mmxnn3/image/upload/v1647510544/Imagescopy/Gaurav_uxkq4d.jpg",
  },
  {
    id: 4,
    name: 'Rashmi Bansal',
    opinion: "I really congratulate the team for bringing together so many diverse students and so many good speakers I do hope that this goes further and many many students start a small business of their own to really get a taste of entrepreneurship for themselves!",
    image: "https://res.cloudinary.com/da5mmxnn3/image/upload/v1647510552/Imagescopy/rashmi2_q0shh6.webp",
  },
  {
    id: 5,
    name: 'Zubin Sharma',
    opinion: "I think the team has done an amazing job of using the spirit of entrepreneurship which is there in EDC to create a really really wonderful event for everyone involved from students to the panelists.",
    image: "https://res.cloudinary.com/da5mmxnn3/image/upload/v1647510587/Imagescopy/zubin1_ydwtyq.webp",
  },
  {
    id: 6,
    name: 'person1Image',
    opinion: "It was nice, it was fun. Lot of questions were asked and I loved to answer those questions.",
    image: "https://res.cloudinary.com/da5mmxnn3/image/upload/v1647506687/Speakers/nikhil_qyuop3.jpg",
  },
  {
    id: 7,
    name: 'person1Image',
    opinion: "It was nice, it was fun. Lot of questions were asked and I loved to answer those questions.",
    image: "https://res.cloudinary.com/da5mmxnn3/image/upload/v1647506687/Speakers/nikhil_qyuop3.jpg",
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
    <div className='flex w-screen h-[20rem]  place-content-center'>
      <div className="reviews-section w-2/3   rounded-xl ">
      {/* <div className="reviews-section w-2/3 border-r-2 border-t-2  rounded-xl "> */}
        <h1 className="main-heading   bg-gradient-to-r from-[#b74b9b] to-white text-transparent bg-clip-text text-4xl font-bold text-center py-8">Reviews</h1>
        <Slider {...settings}>
          {reviewsData.map((review) => (
            <div key={review.id} className="review-card w-5/6 px-5 ">
              <img src={review.image} alt={review.name} className="person-image" />
              <p className="opinion">{review.opinion}</p>
              <p className="name">{review.name}</p>
            </div>
          ))}
        </Slider>
      </div>
  </div>
  );
};

export default Reviews;
