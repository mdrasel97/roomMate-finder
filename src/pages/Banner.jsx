import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router";
// import "swiper/css/navigation";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Find Your Perfect Roommate",
      subtitle:
        "Connect with compatible roommates based on lifestyle, budget, and location preferences",
      image:
        "https://i.ibb.co/xKzSWykB/682b5d8d9aa44d3871f2a188-d0fae16e-4070-43f5-909b-515558c3a90c.jpg",
      buttonText: "Browse Listings",
      buttonLink: "/browseListing",
    },
    {
      id: 2,
      title: "List Your Roommate Preferences",
      subtitle:
        "Create a detailed profile to find the most compatible roommate for your space",
      image:
        "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      buttonText: "Create Listing",
      buttonLink: "/addToFindRoommate",
    },
    {
      id: 3,
      title: "Safe & Secure Connections",
      subtitle:
        "Our platform ensures verified profiles and secure messaging for peace of mind",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      buttonText: "Learn More",
      buttonLink: "/",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-[350px] md:h-[450px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide
              ? "opacity-100"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          <div className="relative h-full flex items-center container-custom">
            <div className="max-w-xl text-white ml-10">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
                {slide.title}
              </h1>
              <p
                className="text-lg md:text-xl mb-8 animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                {slide.subtitle}
              </p>
              <button
                className="btn animate-fade-in"
                style={{ animationDelay: "0.4s" }}
              >
                <Link to={slide.buttonLink}>{slide.buttonText}</Link>
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide
                ? "bg-white"
                : "bg-white/50 hover:bg-white/70"
            } transition-all duration-300`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Banner;
