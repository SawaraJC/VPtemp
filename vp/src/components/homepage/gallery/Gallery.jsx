import React from 'react';

const images = [
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(1).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(2).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(3).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(4).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(5).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(6).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(7).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(8).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(9).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(10).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(11).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(12).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(13).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(14).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(15).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(15).webp",
  ]

const Gallery = () => {
  return (
    <div>
        <div className="gallery-container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
            <div className="text-xl mb-5 font-semibold">
                GALLERY 
            </div>
        <div className="-m-1 flex flex-wrap md:-m-2">
          {images.map((image, index) => (
            <div key={index} className="relative flex w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-1 md:p-2">
              <img
                className="block mx-auto h-full object-cover object-center rounded-lg shadow-md transition duration-300 transform hover:scale-125"
                src={image}
                alt={`Image ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
