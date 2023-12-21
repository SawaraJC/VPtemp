// import React from 'react'



// const Footer = () => {
//   return (
//     <div>
//         <div className='bg-black py-20'>
//             <div className='text-white'>
//                 {/* <img src='https://res.cloudinary.com/da5mmxnn3/image/upload/v1675598960/vp-webp/edc_logo-removebg-preview_mhknvu.webp'/> */}
//                 <h1 className='text-md ml-[33.5rem] font-semibold'>ENTREPRENEURSHIP DEVELOPMENT CELL, VIIT</h1>
//                 <p className='text-md ml-[42.5rem]'>Presents</p>

//                 <h1 className='text-md ml-[29.5rem] py-16 text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-t from-[#bb57a1] to-[#6766b4]'>VISHWAPRENEUR'24</h1>
//             </div>

//             <div className='flex ml-72 text-white'>
//                 <div>
//                   <h2 className='text-white ml-12 font-bold pb-4 text-lg'>Quick Links</h2>
//                   <ul>
//                     <li className='py-2 pl-12'><a>Our Team</a></li>
//                     <li className='py-2 pl-12'><a>Register</a></li>
//                     <li className='py-2 pl-12'><a>Privacy <br/>Policy</a></li>
//                     <li className='py-2 pl-12'><a>Terms and <br/>Conditions</a></li>
//                   </ul>
//                 </div>

//                 <div>
//                   <h2 className='text-white ml-12 font-bold text-lg'>Follow us on</h2>
//                   <div className='flex flex-col'>
//                     <div className='flex ml-12 py-4'>
//                       <div className='ml-2'>
//                         <a href='https://www.instagram.com/edcviit/' target='_blank'><FaInstagram size={25}/></a>
//                       </div>
//                       <div className='ml-8'>
//                         <a href='https://www.linkedin.com/company/entrepreneurship-development-cell-viit/mycompany/' target='_blank'><FaLinkedin size={25}/></a>
//                       </div>
//                     </div>

//                     <div>
//                       <div className='flex ml-12 py-4'>
//                         <div className='ml-2'>
//                           <a href='https://twitter.com/edcviit' target='_blank'><FaTwitter size={25}/></a>
//                         </div>
//                         <div className='ml-8'>
//                           <a href='https://www.youtube.com/@edcviit' target='_blank'><FaYoutube  size={25}/></a>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div>
//                   <h2 className='text-white ml-12 font-bold text-lg'>Contact Us</h2>
//                 </div>

//                 <div>
//                   <h2 className='text-white ml-12 font-bold text-lg'>APP</h2>
//                 </div>
//             </div>


//         </div>
//     </div>
//   )
// }

// export default Footer

import React from 'react';
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto flex flex-col items-center">
        {/* Company Section */}
        {/* <div className="mb-8 text-center">
          <div className="text-sm font-semibold mb-2 lg:text-xl lg:font-semibold xl:text-2xl xl:font-semibold">
            ENTREPRENEURSHIP DEVELOPMENT CELL, VIIT's
          </div>
          <div className="text-3xl font-bold lg:text-5xl xl:text-6xl">VISHWAPRENEUR'24</div>
        </div> */}

        {/* Quick Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div className="text-center md:text-left lg:text-left xl:text-left transition duration-300">
            <p className="font-bold mb-2 text-lg hover:underline">Quick Links</p>
            <ul className="list-none">
              <li className="mb-2"><a href="#" className="transition duration-300 transform hover:scale-105">Register</a></li>
              <li className="mb-2"><a href="#" className="transition duration-300 transform hover:scale-105">Our Team</a></li>
              <li className="mb-2"><a href="#" className="transition duration-300 transform hover:scale-105">Privacy Policy</a></li>
              <li className="mb-2"><a href="#" className="transition duration-300 transform hover:scale-105">Terms and Conditions</a></li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div className="col-span-2 sm:col-span-1 transition ml-12 md:ml-1 lg:md-2 duration-300 ">
            <p className="font-bold mb-2 text-lg transform hover:underline">Follow us on</p>
            <div className="flex space-x-4 -ml-4">
              <a href="#" className="text-2xl transition duration-300 transform hover:scale-125"><FaInstagram/></a>
              <a href="#" className="text-2xl transition duration-300 transform hover:scale-125"><FaLinkedin/></a>
              <a href="#" className="text-2xl transition duration-300 transform hover:scale-125"><FaTwitter/></a>
              <a href="#" className="text-2xl transition duration-300 transform hover:scale-125"><FaYoutube/></a>
            </div>
          </div>

          {/* Contact Us Section */}
          <div className="col-span-2 sm:col-span-1 ml-7 ">
            <p className="font-bold mb-2 text-lg hover:underline">Contact us</p>
            <p className='transition duration-300 transform hover:scale-105'>Email:<a href='mailto:edc@viit.ac.in'> edc@viit.ac.in</a></p>
            <p className='transition duration-300 transform hover:scale-105'>Phone:<a href='tel:+918668351747'> +91 8668351747</a></p>
            <p className='transition duration-300 transform hover:scale-105'>Address:<a href='https://maps.app.goo.gl/XJaQ351o7yRLJFrHA'> EDC HQ, VIIT, Pune</a></p>
          </div>

          {/* Download App Section */}
          <div className="text-center transition duration-300 transform hover:scale-105">
            <p className="font-bold mb-2 text-lg">Download Our App</p>
            <a href="#" className="text-lg border-b border-white hover:border-opacity-50 hover:underline">
              <span className="flex items-center">
                <i className="fab fa-google-play pr-2"></i><h6>Download from Playstore</h6>
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;