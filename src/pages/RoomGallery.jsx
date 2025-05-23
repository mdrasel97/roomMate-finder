import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const RoomGallery = () => {
  const images = [
    "https://i.ibb.co/tTNSMDDy/682b5d8db788081a9e0a806a-28a564b5-c586-4112-916c-e386842af676.jpg",
    "https://i.ibb.co/sdH6vqxp/682b5d8d1195b45fe8f740a7-295007dc-e45c-4de8-a7ba-eedaf6b60731.jpg",
    "https://i.ibb.co/W4wts2h0/682b5d8db788081a9e0a8071-dda56e97-09d0-431c-a2e5-2f7eac126b3c.jpg",
    "https://i.ibb.co/TxvnwYqH/pexels-pixabay-237371.jpg",
    "https://i.ibb.co/6q43MXc/pexels-fotoaibe-1743229.jpg",
    "https://i.ibb.co/PGThpL52/pexels-vlada-karpovich-4050387.jpg",
  ];
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Room Gallery</h2>
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={20}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 3,
            },
          }}
          className="rounded-2xl"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="overflow-hidden rounded-xl shadow">
                <img
                  src={src}
                  alt={`Room ${index + 1}`}
                  className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default RoomGallery;
