// import React from 'react';
// import './FAQ.css';

// const FAQ = () => {
//   const faqs = [
//     {
//       question: 'What is Vishwapreneur?',
//       answer: '- Vishwapreneur is a National Level Entrepreneurial Summit showcasing entrepreneurs, creators, and innovative minds of our century who had the courage to think out of the box. Vishwapreneur is a platform for budding entrepreneurs to seek motivation & guidance through the experiences of successful business tycoons.',
//     },
//     {
//       question: 'Who can participate in the event?',
//       answer: '- Anyone and everyone who is interested in entrepreneurship, innovation, and business, and wants to do something different from the rest of the people should participate in the event.',
//     },

//     {
//       question: 'What is the purpose of the Vishwapreneur?',
//       answer: '- The purpose of the summit is to provide a platform for budding entrepreneurs to seek motivation and guidance through the experiences of successful business tycoons.',
//     },
//     {
//       question: 'Who will be the speakers this year?',
//       answer: '- The Vishwapreneur will feature successful entrepreneurs, business leaders, experts in the field of entrepreneurship, or anyone who has done something BIG in their life.',
//     },
//     {
//       question: 'What are the dates and timings?',
//       answer: '- Dates are 4th and 5th March and stay tuned for the timings.',
//     },
//     {
//       question: 'How can I register for the summit?',
//       answer: '- You can register for the summit by visiting the website or directly by signing up on VISHWAPRENEUR.',
//     },
//   ];

//   return (
//     <div className="faq-section">
//       <h1 className="main-heading bg-gradient-to-r from-[#b74b9b] to-white text-transparent bg-clip-text text-4xl font-bold text-center py-8">FAQ's</h1>

//       <div className="faq-list">
//         {faqs.map((faq, index) => (
//           <div className="faq-item" key={index}>
//             <div className="question">
//               <span>{faq.question}</span>
//             </div>
//             <div className="answer">{faq.answer}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FAQ;

import React, { useState } from 'react';
import './FAQ.css'; // Replace with the correct path to your CSS file

const FaqAccordion = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (index) => {
    setSelectedItem(selectedItem === index ? null : index);
  };

  return (
    <div>
    <h1 className='pt-12 bg-gradient-to-r from-[#b74b9b] to-white text-transparent bg-clip-text text-3xl font-bold text-center py-8 '>FAQ's</h1>
    <div class="faqs">
      <div class="questions">
        <div class="top" data-aos="fade-right" data-aos-duration="2000">
          <div>
            <details>
              <summary>What is Vishwapreneur?</summary>
              <p class="answer">
                Vishwapreneur is a National Level Entrepreneurial Summit
                showcasing entrepreneurs, creators and innovative minds of our
                century who had the courage to think out of the box.
                Vishwapreneur is a platform for budding entrepreneurs to seek
                motivation & guidance through the experiences of successful
                business tycoons.
              </p>
            </details>
          </div>
          <div>
            <details>
              <summary>Who can participate in the event?</summary>
              <p class="answer">
                Anyone and everyone who is interested in entrepreneurship, innovation, and business.
                and wants to do something different from the rest of the people should
                participate in the event. 
              </p>
            </details>
          </div>
        </div>
        <div class="mid" data-aos="fade-right" data-aos-duration="2000">
          <div>
            <details>
              <summary>What is the purpose of the Vishwapreneur?</summary>
              <p class="answer">
              The purpose of the summit is to provide a platform for budding entrepreneurs to seek motivation and guidance through
              the experiences of successful business tycoons. </p>
            </details>
          </div>
          <div>
            <details>
              <summary>Who will be the speakers this year?</summary>
              <p class="answer">The Vishwapreneur will feature successful entrepreneurs, business leaders, experts in
              the field of entrepreneurship or anyone who has done something BIG in their life.</p>
            </details>
          </div>
        </div>
        <div class="bottom" data-aos="fade-right" data-aos-duration="2000">
          <div>
            <details>
              <summary>What are the dates and timings?</summary>
              <p class="answer">Dates are 4th and 5th March and stay tuned for the timings.</p>
            </details>
          </div>
          <div>
            <details>
              <summary>How can I register for the summit?</summary>
              <p class="answer">You can register for the summit by visiting the website or directly by signing up on <a class="link-reg" href="https://learner.vierp.in/event">VISHWAPRENEUR </a></p>
            </details>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  </div>

  );
};

export default FaqAccordion;

