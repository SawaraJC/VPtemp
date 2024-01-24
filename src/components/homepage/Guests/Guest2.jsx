import React, { useEffect, useRef } from "react";
import "./Guest2.css";

const Review = () => {
  const cardContainerRef = useRef(null);
  useEffect(() => {
    const cardContainer = cardContainerRef.current;
    const cards = document.querySelectorAll(".card");

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust this threshold based on when you want the animation to start
    };

    const cardObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-card");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    cards.forEach((card) => {
      cardObserver.observe(card);
    });

    return () => {
      cardObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const card = e.currentTarget;
      let cardInnerHeight = card.clientHeight;
      let cardInnerWidth = card.clientWidth;

      let react = card.getBoundingClientRect();
      let cardXposition = e.clientX - react.left;
      let cardYposition = e.clientY - react.top;

      let x = (cardInnerHeight / 2.5 - cardXposition) / 25;
      let y = (cardInnerWidth / 1.25 - cardYposition) / 25;

      card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
      const cardDescription = card.querySelector(".card-description");

      cardDescription.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    };

    const handleMouseOver = (card) => {
      const cardFigure = card.querySelector(".card-figure");
      const cardName = card.querySelector(".card-name");
      const cardDescription = card.querySelector(".card-description");
      const cardMedia = card.querySelector(".card-media");
      cardFigure.style.transform = "translate3d(0 , 0 , 150px)";
      cardName.style.transform = "translate3d(0 , 0 , 180px)";
      cardDescription.style.transform = "translate3d(0 , 0 , 170px)";
      cardMedia.style.transform = "translate3d(0 , 0 , 140px)";
      card.style.transition = "none";
    };

    const handleMouseLeave = (card) => {
      const cardFigure = card.querySelector(".card-figure");
      const cardName = card.querySelector(".card-name");
      const cardDescription = card.querySelector(".card-description");
      const cardMedia = card.querySelector(".card-media");
      cardFigure.style.transform = "translate3d(0 , 0 , 0)";
      cardName.style.transform = "translate3d(0 , 0 , 0)";
      cardDescription.style.transform = "translate3d(0 , 0 , 0)";
      cardMedia.style.transform = "translate3d(0 , 0 , 0)";
      card.style.transform = "rotateY(0deg) rotateX(0deg)";
      card.style.transition = "transform .7s ease";
    };

    const cards = document.querySelectorAll(".card-body");

    cards.forEach((card) => {
      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseover", () => handleMouseOver(card));
      card.addEventListener("mouseleave", () => handleMouseLeave(card));

      return () => {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseover", () => handleMouseOver(card));
        card.removeEventListener("mouseleave", () => handleMouseLeave(card));
      };
    });
  }, []);

  const guests = [
    {
      img: "https://res.cloudinary.com/da5mmxnn3/image/upload/v1677489311/Speakers/tg-02_mfz2d9.png",
      name: "Mr. Gaurav Chaudhary",
      whoIsHe: "Founder at Technical Guruji",
      content:
        "Indian YouTube personality, he was on the Forbes India 30 under 30 list, and has 22+ million subscribers on YouTube.",
    },
    {
      img: "https://res.cloudinary.com/da5mmxnn3/image/upload/v1677489310/Speakers/yash_mor-02_lscxvw.png",
      name: "Maj. Gen. Yash Mor",
      whoIsHe: "CEO of Save the Himalayas Foundation",
      content:
        "Strong military and protective services professional skilled in Crisis Management, Operations Management, Government, Emergency Management, and Intelligence.",
    },
    {
      img: "https://res.cloudinary.com/da5mmxnn3/image/upload/v1677230276/Speakers/JM-VP23_uodx7x.jpg",
      name: "Mr. Jagdish Mitra",
      whoIsHe: "Chief Strategy Officer at Tech Mahindra",
      content:
        "Previously he served as CEO of CanvasM. In his 25 years of career he has played many roles spanning across sales, business development and large deals.",
    },
    {
      img: "https://res.cloudinary.com/da5mmxnn3/image/upload/v1677265053/Speakers/kanika-01_hk1ix4.png",
      name: "Mrs. Kanika Tekriwal",
      whoIsHe: "CEO of JetsetGo",
      content:
        "She is the youngest richest woman in India. She founded India's first aircraft leasing organization.",
    },
    {
      img: "https://res.cloudinary.com/da5mmxnn3/image/upload/v1677264548/Speakers/ishan_sharma-removebg-preview-removebg-preview_pqwv7p.jpg",
      name: "Mr. Ishan Sharma",
      whoIsHe: "Founder MarkitUp Media",
      content:
        "Author of bestselling book 'Crush It on LinkedIn'. Youtuber and Educator with 90 million+ reach.",
    },
    {
      img: "https://res.cloudinary.com/da5mmxnn3/image/upload/v1677489806/Speakers/sandeep_jain-02_w6sytm.png",
      name: "Mr. Sandeep Jain",
      whoIsHe: "Founder & CEO at GeeksforGeeks",
      content:
        "An IIT Roorkee alumnus and founder of GeeksforGeeks. Apart from that, he has worked with DE Shaw and Co. as a software developer and JIIT Noida as an assistant professor.",
    },
    {
      img: "https://res.cloudinary.com/da5mmxnn3/image/upload/v1677267098/Speakers/nilesh-01_t7krar.png",
      name: "Mr. Nilesh Vohra",
      whoIsHe: "Blockchain & Web3 influencer",
      content:
        "Senior industry leader & Technologist. AI, Blockchain & Web3 influencer. Corporate span of 20 years includes Vice President & Head of IT (India CTO) - Vodafone Group; Deputy Vice President - Axis Bank, Head of Service Delivery - Wipro Limited.",
    },
    {
      img: "https://res.cloudinary.com/da5mmxnn3/image/upload/v1677230276/Speakers/ARus-VP23_w9dfgb.jpg",
      name: "Mr. Anshul Rustaggi",
      whoIsHe: "Founder Totality Corp",
      content:
        "Enthusiast in Virtual Gaming. Developing ZionVerse, a metaverse gaming system. Studying in Blockchain technology since 2011. Investor in NFTs and DeFi's.",
    },
    {
      img: "https://res.cloudinary.com/da5mmxnn3/image/upload/v1677265053/Speakers/vishnukorde-01_pfjft1.png",
      name: "Mr. Vishnu Korde",
      whoIsHe: "CEO & Chief Architect at StackOS",
      content:
        "Alumni of Harvard University. Skilled in Cryptography, Development operation, Business Planning, Team Management, Product Management, Negotiation, Analytical Skills, and Customer Relationship Management (CRM).",
    },
    {
      img: "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676441222/Speakers/hairsh_vp23_parbuy.jpg",
      name: "Mr. Harish Uthayakumar",
      whoIsHe: "Co-Founder BlueLearn",
      content:
        "Featured in Forbes 30U30 Asia, the co-founder of Bluelearn, India's largest and smartest student community.",
    },
    {
      img: "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676449856/Speakers/rishabh-jain_vp23_myt1sc.jpg",
      name: "Mr. Rishabh Jain",
      whoIsHe: "Creator at Labour Law Advisor",
      content:
        "Entrepreneur at Qriyo (EdTech Company) and Quick Payroll (Free Payroll app for MSME's). Has over 3 million subscribers on YouTube.",
    },
    {
      img: "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676449220/Speakers/ashokramchandran_vp23_nynaor.jpg",
      name: "Mr. Ashok Ramchandran",
      whoIsHe: "CEO & President at Schindler India",
      content:
        "He has 30+ years of experience in the corporate world, was named one of India’s brightest business leaders under the age of 40, In the Economic Times 40 under Forty.",
    },
    {
      img: "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676440812/Speakers/anantlodha_ywriun-removebg-preview_kgngpz.jpg",
      name: "Mr. Anant Ladha",
      whoIsHe: "Founder at Invest Aaj for Kal",
      content:
        "A national bestselling author and the Founder and CEO of Invest Aaj for Kal, a channel with over 2M+ subscribers.",
    },
    {
      img: "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676442022/Speakers/adityaarora_vp23_sl7yra.jpg",
      name: "Mr. Aditya Arora",
      whoIsHe: "CEO at Faad Network",
      content:
        "An angel Investor and the CEO at Faad Network, an investor network platform. Also the youngest nominee for Padma Shri Award.",
    },
    {
      img: "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676441340/Speakers/shreyanssancheti_vp23_ncbxln.jpg",
      name: "Mr. Shreyans Sancheti",
      whoIsHe: "Co-Founder BlueLearn",
      content:
        "A TEDx Speaker, BITS Pilani Goa Alumni, and the Co-Founder of Bluelearn, the largest and smartest student community.",
    },
  ];

  return (
    <div className="main-container bg-black">
      <h1 className="main-heading pt-10 mb-20  bg-gradient-to-r from-[#b74b9b] to-white text-transparent bg-clip-text text-3xl font-bold text-center py-8">
        Previous Speakers
      </h1>

      <div className="card-container" ref={cardContainerRef}>
        {guests.map((guest, index) => (
          <div key={index} className="card">
            <div className="card-body">
              <div className="card-images">
                {/* <img src={img} alt="card background" className="card-bg" /> */}
                <img
                  src={guest.img}
                  alt="card figure"
                  className="card-figure glass-bg-01"
                  style={{ borderRadius: "50%" }}
                />
              </div>
              <div className="card-info">
                <h2 className="card-name">{guest.name}</h2>
                <h4 className="card-name">{guest.whoIsHe}</h4>
                {/* <p className="card-description" style={{ color: 'white' }}>{guest.content}</p> */}

                <div className="card-media">
                  <a href="#">
                    {/* <i className="uil uil-facebook-f"></i> */}
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                  <a href="#">
                    {/* <i className="uil uil-twitter"></i> */}
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                  <a href="#">
                    {/* <i className="uil uil-instagram"></i> */}
                    <ion-icon name="logo-instagram"></ion-icon>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
