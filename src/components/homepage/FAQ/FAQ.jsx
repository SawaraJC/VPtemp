import React from 'react';
import './FAQ.css';

const FAQ = () => {
  const faqs = [
    {
      question: 'What is Vishwapreneur?',
      answer: '- Vishwapreneur is a National Level Entrepreneurial Summit showcasing entrepreneurs, creators, and innovative minds of our century who had the courage to think out of the box. Vishwapreneur is a platform for budding entrepreneurs to seek motivation & guidance through the experiences of successful business tycoons.',
    },
    {
      question: 'Who can participate in the event?',
      answer: '- Anyone and everyone who is interested in entrepreneurship, innovation, and business, and wants to do something different from the rest of the people should participate in the event.',
    },
    // Add more questions and answers as needed
    {
      question: 'What is the purpose of the Vishwapreneur?',
      answer: '- The purpose of the summit is to provide a platform for budding entrepreneurs to seek motivation and guidance through the experiences of successful business tycoons.',
    },
    {
      question: 'Who will be the speakers this year?',
      answer: '- The Vishwapreneur will feature successful entrepreneurs, business leaders, experts in the field of entrepreneurship, or anyone who has done something BIG in their life.',
    },
    {
      question: 'What are the dates and timings?',
      answer: '- Dates are 4th and 5th March and stay tuned for the timings.',
    },
    {
      question: 'How can I register for the summit?',
      answer: '- You can register for the summit by visiting the website or directly by signing up on VISHWAPRENEUR.',
    },
  ];

  return (
    <div className="faq-section">
      <h1 className="main-heading bg-gradient-to-r from-[#b74b9b] to-white text-transparent bg-clip-text text-4xl font-bold text-center py-8">FAQ's</h1>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <div className="question">
              <span>{faq.question}</span>
            </div>
            <div className="answer">{faq.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;


