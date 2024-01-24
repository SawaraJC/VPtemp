import React, { useState, useEffect } from "react";
const Gallery = () => {
  const initialImagesOld = [
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1674560786/VP-23/3_yvc5dl.jpg",
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1675081788/vp-webp/1_1_irebrg.webp",
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1675082300/vp-webp/6_fese08.webp",
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1675082297/vp-webp/81_grisaj.webp",
    "https://edcviit.com/vishwapreneur/assets/img/gallery/tickets1.png",
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1675082950/vp-webp/s1_arvuep1_fmj4bg.webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(78).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(79).webp",
  ];
  const initialImages = [
    "https://res.cloudinary.com/dwrlwv8gz/image/upload/v1706081973/jbnz0qjrpjltls4rrrzz.png",
    "https://res.cloudinary.com/dwrlwv8gz/image/upload/v1706081973/lyz84st3hxvjvslp7mak.png",
    "https://res.cloudinary.com/dwrlwv8gz/image/upload/v1706081973/urcayxxw1sjyjewhddms.png",
    "https://res.cloudinary.com/dwrlwv8gz/image/upload/v1706081973/hjgeidhqmjaqrd45tatk.png",
    "https://res.cloudinary.com/dwrlwv8gz/image/upload/v1706081973/bqfpjgn9jt0irtgjd1aw.png",
    "https://res.cloudinary.com/dwrlwv8gz/image/upload/v1706081972/mrejx4b5kwbn6nvf1xhf.png",
    "https://res.cloudinary.com/dwrlwv8gz/image/upload/v1706081973/jbnz0qjrpjltls4rrrzz.png",
    "https://res.cloudinary.com/dwrlwv8gz/image/upload/v1706081973/lyz84st3hxvjvslp7mak.png",
    "https://res.cloudinary.com/dwrlwv8gz/image/upload/v1706081973/urcayxxw1sjyjewhddms.png",
    "https://res.cloudinary.com/dwrlwv8gz/image/upload/v1706081973/hjgeidhqmjaqrd45tatk.png",
    "https://res.cloudinary.com/dwrlwv8gz/image/upload/v1706081973/bqfpjgn9jt0irtgjd1aw.png",
    "https://res.cloudinary.com/dwrlwv8gz/image/upload/v1706081972/mrejx4b5kwbn6nvf1xhf.png",
  ];

  const getUniqueIndices = (length) => {
    const indices = [];
    while (indices.length < length) {
      const newIndex = Math.floor(Math.random() * initialImages.length);
      if (!indices.includes(newIndex)) {
        indices.push(newIndex);
      }
    }
    return indices;
  };

  const [visibleImageIndices, setVisibleImageIndices] = useState(
    getUniqueIndices(6)
  );
  const [opacity, setOpacity] = useState(Array(6).fill(1));

  useEffect(() => {
    const interval = setInterval(() => {
      const indexToReplace = Math.floor(Math.random() * 6);
      let newIndex;

      do {
        newIndex = Math.floor(Math.random() * initialImages.length);
      } while (visibleImageIndices.includes(newIndex));

      setOpacity((prevOpacity) => {
        const newOpacity = [...prevOpacity];
        newOpacity[indexToReplace] = 0;
        return newOpacity;
      });

      setTimeout(() => {
        setVisibleImageIndices((prevIndices) => {
          const newIndices = [...prevIndices];
          newIndices[indexToReplace] = newIndex;
          return newIndices;
        });

        setOpacity((prevOpacity) => {
          const newOpacity = [...prevOpacity];
          newOpacity[indexToReplace] = 1;
          return newOpacity;
        });
      }, 1000); // Delayed to match the transition duration
    }, 2000);

    return () => clearInterval(interval);
  }, [initialImages, visibleImageIndices]);

  const visibleImages = visibleImageIndices.map(
    (index) => initialImages[index]
  );
  const galleryImageClassNames = [
    "",
    "",
    "col-span-2 row-span-2",
    "md:col-span-2 md:row-span-2",
    "",
    "col-span-2 row-span-2 md:col-span-1 md:row-span-1",
  ];
  return (
    <div className="bg-black pt-10">
      <h1 className="main-heading  md:py-10  bg-gradient-to-r from-[#b74b9b] to-white text-transparent bg-clip-text text-3xl font-bold text-center py-8">
        Gallery
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:px-[10rem] ">
        {visibleImages.map((image, index) => (
          <div
            key={index}
            className={` relative aspect-w-4 aspect-h-3   ${galleryImageClassNames[index]}
            `}
            style={{
              opacity: opacity[index],
              transition: "opacity 1s ease-in-out",
            }}
          >
            <img
              src={image}
              alt={`Nature ${index + 1}`}
              className="rounded-xl object-cover w-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
