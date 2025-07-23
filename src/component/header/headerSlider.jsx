import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Pagination } from "swiper/modules";

export const HeaderSlider = ({ setHeaderBg }) => {
  const handelBg = (e) => {
    return (
      console.log(e.target.currentSrc), setHeaderBg(e.target.currentSrc) // Assuming setHeaderBg is passed as a prop
    );
  };
  return (
    <div className="container">
      <Swiper
        breakpoints={{
          320: {
           slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        modules={[Autoplay]}
        slidesPerView={0}
        spaceBetween={0}
        autoplay={{ delay: 2000 }}
        loop
      >
        {[0, 1, 2, 3, 4].map((number) => (
          <SwiperSlide key={number}>
            <img
              onMouseOver={handelBg}
              className="w-full  lg:h-[380px]  rounded object-cover"
              src={`/images/header-poster${number}.jpg`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
