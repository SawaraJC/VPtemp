import React from 'react';
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer-section border-[1px] border-slate-300">
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto flex flex-col items-center">
          {/* Grid layout and content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            {/* Quick Links Section */}
            <div className="text-center md:text-left lg:text-left xl:text-left transition duration-300">
              <p className="font-bold mb-2 text-lg hover:underline" style={{ backgroundImage: 'linear-gradient(to right, #bb57a1, #6766b4)', WebkitBackgroundClip: 'text', color: 'transparent' }}>Quick Links</p>
              {/* ... (rest of the Quick Links section) */}
              <ul className="list-none">
                <li className="mb-2"><a href="#" className="transition duration-300 transform hover:scale-105">Register</a></li>
                <li className="mb-2"><a href="#" className="transition duration-300 transform hover:scale-105">Our Team</a></li>
                <li className="mb-2"><a href="#" className="transition duration-300 transform hover:scale-105">Privacy Policy</a></li>
                <li className="mb-2"><a href="#" className="transition duration-300 transform hover:scale-105">Terms and Conditions</a></li>
              </ul>
            </div>

            {/* Follow Us Section */}
            <div className="col-span-2 sm:col-span-1 transition ml-12 md:ml-1 lg:md-2 duration-300">
              <p className="font-bold mb-2 text-lg transform hover:underline" style={{ backgroundImage: 'linear-gradient(to right, #bb57a1, #6766b4)', WebkitBackgroundClip: 'text', color: 'transparent' }}>Follow us on</p>
              {/* ... (rest of the Follow Us section) */}
              <div className="flex space-x-4 -ml-4">
                <a href="#" className="text-2xl transition duration-300 transform hover:scale-125"><FaInstagram/></a>
                <a href="#" className="text-2xl transition duration-300 transform hover:scale-125"><FaLinkedin/></a>
                <a href="#" className="text-2xl transition duration-300 transform hover:scale-125"><FaTwitter/></a>
                <a href="#" className="text-2xl transition duration-300 transform hover:scale-125"><FaYoutube/></a>
              </div>
            </div>

            {/* Contact Us Section */}
            <div className="col-span-2 sm:col-span-1 ml-7">
              <p className="font-bold mb-2 text-lg hover:underline" style={{ backgroundImage: 'linear-gradient(to right, #bb57a1, #6766b4)', WebkitBackgroundClip: 'text', color: 'transparent' }}>Contact us</p>
              {/* ... (rest of the Contact Us section) */}
              <p className='transition duration-300 transform hover:scale-105'>Email:<a href='mailto:edc@viit.ac.in'> edc@viit.ac.in</a></p>
              <p className='transition duration-300 transform hover:scale-105'>Phone:<a href='tel:+918668351747'> +91 8668351747</a></p>
              <p className='transition duration-300 transform hover:scale-105'>Address:<a href='https://maps.app.goo.gl/XJaQ351o7yRLJFrHA'> EDC HQ, VIIT, Pune</a></p>
            </div>

            {/* Download App Section */}
            <div className="text-center transition duration-300 transform hover:scale-105">
              <p className="font-bold mb-2 text-lg" style={{ backgroundImage: 'linear-gradient(to right, #bb57a1, #6766b4)', WebkitBackgroundClip: 'text', color: 'transparent' }}>Download Our App</p>
              {/* ... (rest of the Download App section) */}
              <a href="#" className="text-lg border-b border-white hover:border-opacity-50 hover:underline">
                <span className="flex items-center">
                  <i className="fab fa-google-play pr-2"></i><h6>Download from Playstore</h6>
                </span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
