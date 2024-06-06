"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Banner = () => {
  const images = [
    { id: 1, src: "/images/slide-1.png", alt: "Slide 1" },
    { id: 2, src: "/images/slide-1.png", alt: "Slide 2" },
    { id: 3, src: "/images/slide-2.png", alt: "Slide 3" },
    { id: 4, src: "/images/slide-3.png", alt: "Slide 4" },
    { id: 5, src: "/images/slide-4.png", alt: "Slide 5" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="">
      <div id="carouselExampleCrossfade" className="relative" data-twe-carousel-init data-twe-ride="carousel">
        {/* Carousel indicators */}
        <div className="absolute inset-x-0 bottom-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0" data-twe-carousel-indicators>
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              data-twe-target="#carouselExampleCrossfade"
              data-twe-slide-to={index}
              className={`mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none ${
                activeIndex === index ? "opacity-100" : ""
              }`}
              aria-current={activeIndex === index ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
              onClick={() => setActiveIndex(index)}
            ></button>
          ))}
        </div>

        {/* Carousel items */}
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          {images.map((item, index) => (
            <div
              key={item.id}
              className={`relative float-left -mr-[100%] w-full transform-none transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none ${
                activeIndex === index ? "opacity-100" : "opacity-0"
              }`}
              data-twe-carousel-fade
              data-twe-carousel-item
              data-twe-carousel-active={activeIndex === index ? "true" : "false"}
            >
              <Image width={1000} height={500} src={item.src} className="block w-full" alt={item.alt} />
            </div>
          ))}
        </div>

        {/* Carousel controls - prev item */}
        <button
          className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          data-twe-target="#carouselExampleCrossfade"
          data-twe-slide="prev"
          onClick={handlePrev}
        >
          <span className="inline-block h-8 w-8">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </span>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Previous</span>
        </button>

        {/* Carousel controls - next item */}
        <button
          className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          data-twe-target="#carouselExampleCrossfade"
          data-twe-slide="next"
          onClick={handleNext}
        >
          <span className="inline-block h-8 w-8">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </span>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
