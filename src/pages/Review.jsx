import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./style.css";
import { EffectCoverflow, Pagination } from "swiper/modules";

const reviews = [
  {
    name: "Fatima Rahman",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    review: "This website is amazing! The lessons are very clear and helpful.",
  },
  {
    name: "Ahmed Karim",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review: "Highly recommended. My children love learning Quran here!",
  },
  {
    name: "Sarah Hossain",
    image: "https://randomuser.me/api/portraits/women/72.jpg",
    review: "The teachers are very supportive. Excellent platform.",
  },
  {
    name: "Yusuf Ali",
    image: "https://randomuser.me/api/portraits/men/85.jpg",
    review: "Great experience. The video lessons are top-notch.",
  },
];

const Review = () => {
  return (
    <div className="md:py-10 mx-auto md:w-2/3 justify-center ">
      <h2 className="text-xl md:text-3xl font-bold text-center md:mb-5">
        What Our Students Say
      </h2>
      <div className="flex justify-center w-11/12 md:w-8/12 mx-auto">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {reviews.map((item, index) => (
            <SwiperSlide
              key={index}
              className="w-72 border rounded-xl p-6 shadow-md text-center"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="mt-2 italic">"{item.review}"</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
