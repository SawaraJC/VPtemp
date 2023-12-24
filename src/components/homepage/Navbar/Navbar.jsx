
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "gallery",
    },
    {
      id: 4,
      link: "our team",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <nav className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed z-50">
      <div>
        <h1 className="text-xl md:text-3xl lg:text-3xl ml-2">Vishwapreneur'24</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-105"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

// import React from 'react';

// const Navbar = () => {
//   return (
//     <nav className="bg-black text-white fixed w-full top-0 z-50">
//       <div className="container mx-auto flex justify-between items-center py-4">
//         {/* Left side */}
//         <div className="text-2xl font-bold">Vishwapreneur</div>

//         {/* Right side - Navigation Panel */}
//         <div className="hidden md:flex space-x-4">
//           <a href="#about" className="hover:text-gray-300">
//             About
//           </a>
//           <a href="#team" className="hover:text-gray-300">
//             Our Team
//           </a>
//           <a href="#contact" className="hover:text-gray-300">
//             Contact Us
//           </a>
//           <a href="#gallery" className="hover:text-gray-300">
//             Gallery
//           </a>
//         </div>

//         {/* Mobile menu button */}
//         <div className="md:hidden">
//           {/* You can use a mobile menu icon here */}
//           <button className="text-white">&#9776;</button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
