// import React from 'react';
// import './Guest.css';

// const guestsData = [
//   {
//     id: 1,
//     name: 'Guest 1',
//     post: 'Role 1',
//     // image: guest1Image,
//     info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//   },
//   {
//     id: 1,
//     name: 'Guest 1',
//     post: 'Role 1',
//     // image: guest1Image,
//     info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//   },
//   {
//     id: 1,
//     name: 'Guest 1',
//     post: 'Role 1',
//     // image: guest1Image,
//     info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//   },
//   {
//     id: 1,
//     name: 'Guest 1',
//     post: 'Role 1',
//     // image: guest1Image,
//     info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//   },
//   {
//     id: 1,
//     name: 'Guest 1',
//     post: 'Role 1',
//     // image: guest1Image,
//     info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//   },
//   {
//     id: 1,
//     name: 'Guest 1',
//     post: 'Role 1',
//     // image: guest1Image,
//     info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//   },
//   // Add other guest objects here...
// ];

// const Guest = () => {
//   return (
//     <div className="guest-section">
//       {guestsData.map((guest) => (
//         <div key={guest.id} className="guest-card">
//           <div className="guest-content">
//             {/* <img src={guest.image} alt={guest.name} className="guest-image" /> */}
//             <h3>{guest.name}</h3>
//             <p>{guest.post}</p>
//             <p>{guest.info}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Guest;

// import React from 'react';
// import './Guest.css';
// import { FaEnvelope, FaHandsHelping, FaUserFriends, FaMicrophone } from 'react-icons/fa';

// const Guest = () => {
//   return (
//     <div className="contact-section">
//       <h1 className="main-heading bg-gradient-to-r from-[#b74b9b] to-white text-transparent bg-clip-text text-4xl font-bold text-center py-8">Guests</h1>
//       <div className="contact-info">
//         {/* Queries Section */}
//         <div className="contact-category">
//           <div className="category-icon big-icon">
//             <FaEnvelope size={60} className="centered-icon" />
//           </div>
//           <h3 className="bigger-heading">Queries</h3>
//           <p><a href="mailto:contact@vishwapreneur.in" className="gradient-text">Email: contact@vishwapreneur.in</a></p>
//         </div>

//         {/* Sponsorship Opportunities Section */}
//         <div className="contact-category">
//           <div className="category-icon big-icon">
//             <FaHandsHelping size={60} className="centered-icon" />
//           </div>
//           <h3 className="bigger-heading">Sponsorship Opportunities</h3>
//           <p><a href="mailto:edcflm.sponsorship@gmail.com" className="gradient-text">Email: edcflm.sponsorship@gmail.com</a></p>
//         </div>

//         {/* Collaboration Opportunities Section */}
//         <div className="contact-category">
//           <div className="category-icon big-icon">
//             <FaUserFriends size={60} className="centered-icon" />
//           </div>
//           <h3 className="bigger-heading">Collaboration Opportunities</h3>
//           <p><a href="mailto:pr@vishwapreneur.in" className="gradient-text">Email: pr@vishwapreneur.in</a></p>
//         </div>

//         {/* Speaking Opportunities Section */}
//         <div className="contact-category">
//           <div className="category-icon big-icon">
//             <FaMicrophone size={60} className="centered-icon" />
//           </div>
//           <h3 className="bigger-heading">Speaking Opportunities</h3>
//           <p><a href="mailto:curator@vishwapreneur.in" className="gradient-text">Email: curator@vishwapreneur.in</a></p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Guest;





import React from 'react';
import './Guest.css';
import guest1Image from '../../../assets/image.png'; // Import guest images accordingly
import guest2Image from '../../../assets/image.png';

const Guest = () => {
  return (
    <div className="contact-section">
      <h1 className="main-heading bg-gradient-to-r from-[#b74b9b] to-white text-transparent bg-clip-text text-4xl font-bold text-center py-8">Guests</h1>
      <div className="contact-info">
        {/* Guest 1 Section */}
        <div className="contact-category">
          <div className="category-icon big-icon">
            <img src={guest1Image} alt="Guest 1" className="centered-icon" />
          </div>
          <h3 className="bigger-heading">Guest 1</h3>
          <p><a href="mailto:contact@vishwapreneur.in" className="gradient-text">Role 1</a></p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

        {/* Guest 2 Section */}
        <div className="contact-category">
          <div className="category-icon big-icon">
            <img src={guest2Image} alt="Guest 2" className="centered-icon" />
          </div>
          <h3 className="bigger-heading">Guest 2</h3>
          <p><a href="mailto:edcflm.sponsorship@gmail.com" className="gradient-text">Role 2</a></p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

        <div className="contact-category">
          <div className="category-icon big-icon">
            <img src={guest2Image} alt="Guest 2" className="centered-icon" />
          </div>
          <h3 className="bigger-heading">Guest 2</h3>
          <p><a href="mailto:edcflm.sponsorship@gmail.com" className="gradient-text">Role 2</a></p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

        <div className="contact-category">
          <div className="category-icon big-icon">
            <img src={guest2Image} alt="Guest 2" className="centered-icon" />
          </div>
          <h3 className="bigger-heading">Guest 2</h3>
          <p><a href="mailto:edcflm.sponsorship@gmail.com" className="gradient-text">Role 2</a></p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      
      </div>
    </div>
  );
};

export default Guest;
