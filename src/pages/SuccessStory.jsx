import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    content:
      "I found my perfect roommate within a week of joining! The matching system is so accurate, and we've been living together happily for 6 months now.",
    name: "Jessica Williams",
    role: "Graduate Student",
    avatar: "https://randomuser.me/api/portraits/women/17.jpg",
  },
  {
    content:
      "As someone new to the city, I was worried about finding a roommate I could trust. RoomieMatch made it easy to find someone compatible with my lifestyle.",
    name: "Mark Johnson",
    role: "Software Engineer",
    avatar: "https://randomuser.me/api/portraits/men/94.jpg",
  },
  {
    content:
      "The filtering options are amazing! I was able to find someone who shares my love for cooking and quiet evenings. Couldn't be happier with my match!",
    name: "Sophia Garcia",
    role: "Marketing Manager",
    avatar: "https://randomuser.me/api/portraits/women/28.jpg",
  },
  {
    content:
      "After a terrible roommate experience, I was hesitant to try again. But the detailed profiles on RoomieMatch helped me find the perfect person to share my apartment.",
    name: "David Chen",
    role: "Financial Analyst",
    avatar: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    content:
      "The secure messaging system made me feel comfortable chatting with potential roommates. I found someone who aligns with my clean living standards!",
    name: "Taylor Adams",
    role: "Healthcare Worker",
    avatar: "https://randomuser.me/api/portraits/women/62.jpg",
  },
];

const SuccessStory = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };
  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Success Stories</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Hear from users who found their perfect roommate match through our
            platform
          </p>
        </div>

        <div className="w-full max-w-4xl mx-auto p-4">
          <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-md">
            <div className="text-purple-500 text-6xl absolute top-2 left-4 opacity-10">
              "
            </div>
            <p className="text-gray-700 dark:text-gray-300 min-h-[120px] relative z-10">
              {testimonials[currentIndex].content}
            </p>
            <div className="flex items-center mt-6">
              <img
                src={testimonials[currentIndex].avatar}
                alt={testimonials[currentIndex].name}
                className="h-12 w-12 rounded-full mr-4"
              />
              <div>
                <h4 className="text-gray-900 dark:text-gray-100 font-semibold">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <FaChevronLeft color="white" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <FaChevronRight color="white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStory;
