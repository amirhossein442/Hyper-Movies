import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

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
          500: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        modules={[Autoplay]}
        autoplay={{ delay: 2000 }}
        loop
      >
        {[0, 1, 2, 3, 4].map((number) => (
          <SwiperSlide key={number}>
            <img
              onMouseOver={handelBg}
              className="w-full h-[450px] sm:h-[400px]  rounded object-cover p-5 sm:p-0"
              src={`/images/header-poster${number}.jpg`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
