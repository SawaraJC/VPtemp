import React from 'react';
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import './Footer.css'
import image from '../../../assets/Footerimg.svg'

const Footer = () => {
  return (
    <div
      className={`footer-section border-[1px] border-slate-300 overflow-hidden`} 

      // style={{
      //   backgroundImage:url("https://res.cloudinary.com/di40y80dw/image/upload/v1705057286/Parallax/Group_426_k1hcfe.svg"),
      //     // 'url("https://res.cloudinary.com/da5mmxnn3/image/upload/v1703939672/VP%2724/earth-seen-from-space_o2egfs.webp")',
      // }}
    >
      <footer className="bg-black text-white py-12 ">
        <div className={`w-full h-full  relative   scale-[100%] m-15 bg-[url(${image})]  bg-cover bg-no-repeat`} style={{ backgroundImage: `url()`}}>

        <div className="container mx-auto flex flex-col items-center">
          {/* Grid layout and content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            {/* Quick Links Section */}
            <div className="text-center ml-2 md:text-left lg:text-left xl:text-left">
              <p
                className="font-bold mb-2 text-lg hover:underline"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #bb57a1, #6766b4)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Quick Links
              </p>
              {/* ... (rest of the Quick Links section) */}
              <ul className="list-none">
                <li className="mb-2 hover:scale-105">
                  <a href="#">Register</a>
                </li>
                <li className="mb-2 hover:scale-105">
                  <a href="#">Our Team</a>
                </li>
                <li className="mb-2 hover:scale-105">
                  <a href="#">Privacy Policy</a>
                </li>
                <li className="mb-2 hover:scale-105">
                  <a href="#">Terms and Conditions</a>
                </li>
              </ul>
            </div>

            {/* Follow Us Section */}
            <div className="col-span-2 sm:col-span-1 transition ml-16 md:ml-1 lg:md-2 duration-300">
              <p
                className="font-bold mb-2 text-lg transform hover:underline"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #bb57a1, #6766b4)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Follow us on
              </p>
              {/* ... (rest of the Follow Us section) */}
              <div className="flex space-x-4 -ml-4">
                <a
                  href="#"
                  className="text-2xl transition duration-300 transform hover:scale-125"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="text-2xl transition duration-300 transform hover:scale-125"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="#"
                  className="text-2xl transition duration-300 transform hover:scale-125"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="text-2xl transition duration-300 transform hover:scale-125"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>

            {/* Contact Us Section */}
            <div className="col-span-2 sm:col-span-1 md:-ml-4 lg:-ml-4 -ml-8 md:text-left text-center">
              <p
                className="font-bold mb-2 text-lg hover:underline"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #bb57a1, #6766b4)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Contact us
              </p>
              {/* ... (rest of the Contact Us section) */}
              <p className="hover:scale-105">
                Email:<a href="mailto:edc@viit.ac.in"> edc@viit.ac.in</a>
              </p>
              <p className="hover:scale-105">
                Phone:<a href="tel:+918668351747"> +91 8668351747</a>
              </p>
              <p className="hover:scale-105">
                Address:
                <a href="https://maps.app.goo.gl/XJaQ351o7yRLJFrHA">
                  {" "}
                  EDC HQ, VIIT, Pune
                </a>
              </p>
            </div>

            {/* Download App Section */}
            <div className="text-center transition duration-300 transform">
              <p
                className="font-bold mb-2 text-lg"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #bb57a1, #6766b4)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Download Our App
              </p>
              {/* ... (rest of the Download App section) */}
              <a
                href="#"
                className="text-lg border-b border-white hover:border-opacity-50 "
              >
                <span className="flex items-center hover:scale-105">
                  <i className="fab fa-google-play pr-2"></i>
                  <h6>Download from Playstore</h6>
                </span>
              </a>
            </div>
          </div>
        </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
