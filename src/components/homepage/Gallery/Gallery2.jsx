// import { useScroll, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
// import image from "../images/f55.svg";

const Gallery2 = () => {
  let newImages = [
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(71).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp",
  ];
  const [images, setImages] = useState(newImages);
  const [imageIndex, setImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
useEffect(() => {
  const intervalId = setInterval(() => {
    // Get the next image index
    const newIndex = (imageIndex + 1) % images.length;

    // Update the image index
    setImageIndex(newIndex);
  }, 5000); // 5000 milliseconds = 5 seconds

  // Clear the interval when the component unmounts
  return () => clearInterval(intervalId);
}, [imageIndex, images]);
  useEffect(() => {
    const loadingTimeout = setTimeout(
      () => {
        setIsLoaded(true);
      },

      0
    );

    return () => clearTimeout(loadingTimeout);
  }, []);
 useEffect(() => {
   const intervalId = setInterval(() => {
     // Get two random indices to swap
     const index1 = Math.floor(Math.random() * images.length);
     let index2 = Math.floor(Math.random() * images.length);

     // Make sure index2 is different from index1
     while (index2 === index1) {
       index2 = Math.floor(Math.random() * images.length);
     }

     // Perform the swap
     const newArray = [...images];
     [newArray[index1], newArray[index2]] = [
       newArray[index2],
       newArray[index1],
     ];

     // Update the state
     setImages(newArray);
   }, 5000); // 5000 milliseconds = 5 seconds

   // Clear the interval when the component unmounts
   return () => clearInterval(intervalId);
 }, [images]);
  const leftSlide = (index) => {
    const transitionDelay = isLoaded ? `${index * 35}ms` : "0ms";
    return {
      transitionDelay,
      transitionDuration: "750ms",
      transitionTimingFunction: "ease-out",
      transform: isLoaded ? "translateX(0)" : "translateX(-100%)",
    };
  };

  const rightSlide = (index) => {
    const transitionDelay = isLoaded ? `${index * 50}ms` : "0ms";
    return {
      transitionDelay,
      transitionDuration: "750ms",
      transitionTimingFunction: "ease-out",
      transform: isLoaded ? "translateX(0)" : "translateX(100%)",
    };
  };

  const downSlide = (index) => {
    const transitionDelay = isLoaded ? `${index * 80}ms` : "0ms";
    return {
      transitionDelay,
      transitionDuration: "650ms",
      transitionTimingFunction: "ease-out",
      transform: isLoaded ? "translateY(0)" : "translateY(-100%)",
    };
  };

  const upSlide = (index) => {
    const transitionDelay = isLoaded ? `${index * 80}ms` : "0ms";
    return {
      transitionDelay,
      transitionDuration: "500ms",
      transitionTimingFunction: "ease-out",
      transform: isLoaded ? "translateY(0)" : "translateY(100%)",
    };
  };

  // const ref = useRef<HTMLDivElement>(null);
  // const { scrollYProgress } =  useScroll({
  //   target: ref,
  //   offset: ["0 1", "1.33 1"]
  // });

  return (
    <div className="container1 w-full bg-black mx-auto px-5 py-2 sm:px-10 md:px-16 lg:px-32 lg:pt-10 lg:pb-32">
      {/* <motion.div className="container mx-auto px-5 py-2 sm:px-10 md:px-16 lg:px-32 lg:pt-24" ref={ref} style={{scale: scrollYProgress, opacity: scrollYProgress}}> */}
      <h1 className="main-heading pt-10  bg-gradient-to-r from-[#b74b9b] to-white text-transparent bg-clip-text text-3xl font-bold text-center py-8">
        Gallery
      </h1>

      <div className="-m-1 flex flex-wrap">
        {/* Grid 1 of 3 images */}
        <div className="w-full md:w-1/2">
          <div className="flex flex-wrap">
            {/* Img 1 */}
            <div
              className="w-1/2 p-1 md:p-5  transform-op"
              style={downSlide(0)}
            >
              <img
                alt="gallery"
                className="  gap-12   border-red-50 border-r-2 border-t-2 block h-full w-full rounded-lg object-cover object-center transition duration-300 transform hover:scale-110 "
                src={images[3]}
              />
            </div>
            {/* img 2 */}
            <div className="w-1/2 p-1 md:p-5" style={downSlide(1)}>
              <img
                alt="gallery"
                className="border-red-50 border-r-2 border-t-2 block h-full w-full rounded-lg object-cover object-center md:w-auto transition duration-300 transform hover:scale-110"
                src={images[0]}
              />
            </div>
            {/* img 3 */}
            <div className="w-full p-1 md:p-5" style={leftSlide(2)}>
              <img
                alt="gallery"
                className="border-red-50 border-r-2 border-t-2 block h-full w-full rounded-lg object-cover object-center transition duration-300 transform hover:scale-105"
                src={images[1]}
              />
            </div>
          </div>
        </div>

        {/* Grid 1 of 3 images */}
        <div className="w-full md:w-1/2">
          <div className="flex flex-wrap">
            {/* Img 1 */}
            <div className="w-full p-1 md:p-5" style={rightSlide(0)}>
              <img
                alt="gallery"
                className="border-red-50 border-r-2 border-t-2 block h-full w-full rounded-lg object-cover object-center transition duration-300 transform hover:scale-105"
                src={images[2]}
              />
            </div>
            {/* img 2 */}
            <div className="w-1/2 p-1 md:p-5" style={upSlide(1)}>
              <img
                alt="gallery"
                className="border-red-50 border-r-2 border-t-2 block h-full w-full rounded-lg object-cover object-center md:w-auto transition duration-300 transform hover:scale-110"
                src={images[3]}
              />
            </div>
            {/* img 3 */}
            <div className="w-1/2 p-1 md:p-5 " style={upSlide(2)}>
              <img
                alt="gallery"
                className="border-red-50 border-r-2 border-t-2 block h-full w-full rounded-lg object-cover object-center transition duration-300 transform hover:scale-110"
                src={images[4]}
              />
            </div>
          </div>
        </div>
        {/* <div className="w-screen h-[20rem] overflow-hidden bg-contain">
          <img src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" className="w-[80rem] " alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default Gallery2;
