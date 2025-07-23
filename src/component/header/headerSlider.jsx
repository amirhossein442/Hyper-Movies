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
        modules={[Autoplay, Pagination]}
        pagination={{
          dynamicBullets: true,
        }}
        slidesPerView={4}
        spaceBetween={20}
        autoplay={{ delay: 2000 }}
        loop
      >
        {[0, 1, 2, 3, 4].map((number) => (
          <SwiperSlide key={number}>
            <img
              onMouseOver={handelBg}
              className="w-full h-[350px] rounded object-cover"
              src={`/images/header-poster${number}.jpg`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
