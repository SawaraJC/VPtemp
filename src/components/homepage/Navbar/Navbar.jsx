// import React, { useState } from 'react'
// // import Button from './Button';

// const Navbar = () => {
//     let Links =[
//       {name:"HOME",link:"/"},
//       {name:"SERVICE",link:"/"},
//       {name:"ABOUT",link:"/"},
//       {name:"BLOG'S",link:"/"},
//       {name:"CONTACT",link:"/"},
//     ];
//     let [open,setOpen]=useState(false);
//   return (
//     <div className='shadow-md w-full fixed top-0 left-0'>
//       <div className='md:flex items-center justify-between bg-black py-4 md:px-10 px-7'>
//       <div className='font-bold text-2xl cursor-pointer flex items-center text-white'>
//         Vishwapreneur
//       </div>
      
//       <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
//       <ion-icon name={open ? 'close':'menu'} className='text-white'></ion-icon>
//       </div>

//       <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-black md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
//         {
//           Links.map((link)=>(
//             <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
//               <a href={link.link} className='text-white hover:text-gray-400 duration-500'>{link.name}</a>
//             </li>
//           ))
//         }
//       </ul>
//       </div>
//     </div>
//   )
// }

// export default Navbar;

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
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      <div>
        <h1 className="text-xl md:text-3xl lg:text-3xl ml-2">Vishwapreneur'24</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-105 duration-200"
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
    </div>
  );
};

export default Navbar;