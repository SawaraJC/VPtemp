import React, { useState, useEffect } from "react";

const Gallery = () => {
  const initialImages = [
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(71).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(78).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(79).webp",
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

  return (
    <div className="grid grid-cols-4 gap-4 p-[10rem] bg-black">
      {visibleImages.map((image, index) => (
        <div
          key={index}
          className={` relative aspect-w-4 aspect-h-3 ${
            index === 2 || index === 3 ? "col-span-2 row-span-2" : ""
          }`}
          style={{
            opacity: opacity[index],
            transition: "opacity 1s ease-in-out",
          }}
        >
          <img
            src={image}
            alt={`Nature ${index + 1}`}
            className="rounded-xl object-cover w-full h-full"
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
