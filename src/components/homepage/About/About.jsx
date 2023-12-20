import React from 'react'
import './About.css';


const About = () => {
  return (
    <>
     <div className='bg-black min-h-screen'>
    <h1 className="main-heading bg-gradient-to-r from-[#b74b9b] to-white text-transparent bg-clip-text text-3xl font-bold text-center py-8">About</h1>

    <div className='flex flex-col md:flex-row items-center justify-center'>
        <div className='md:w-1/2 lg:w-1/2 lg:ml-auto'>
            <img src='https://res.cloudinary.com/da5mmxnn3/image/upload/v1703051189/VP%2724/VP24_logo_oiho56.png' className="w-full lg:w-96 mx-auto"/>
        </div>

        <div className='md:w-1/2 lg:w-1/2 lg:py-10'>
            <p className='text-gray-300 mx-6 text-lg lg:text-xl lg:mx-16 lg:pl-10'>
                Vishwapreneur is a National Level Entrepreneurial Summit showcasing entrepreneurs, creators, and innovative minds of our century who had the courage to think out of the box. Vishwapreneur is a platform for budding entrepreneurs to seek motivation & guidance through the experiences of successful business tycoons.
            </p>
        </div>
    </div>
</div>


    </>
  )
}

export default About
