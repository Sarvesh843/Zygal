import React, { useState } from "react";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1, content: "Image 1" },
    { id: 2, content: "Image 2" },
    { id: 3, content: "Image 3" },
  ];

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full  max-w-lg mx-auto text-center">
      <div className="flex justify-center items-center h-full ">
        <div className="relative overflow-hidden w-4/5 h-48 bg-slate-400 rounded mt-6">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute w-full h-full top-0 left-0 transition-opacity duration-500 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              {slide.content}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-2">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`h-3 w-3 mx-1 rounded-full cursor-pointer ${
              index === currentSlide ? "bg-gray-800" : "bg-gray-400"
            }`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
      <button className="mt-4 py-2 px-4 bg-blue-500 text-white rounded">
        Button
      </button>
    </div>
  );
};

export default Carousel;
