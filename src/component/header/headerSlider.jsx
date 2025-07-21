import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Pagination } from 'swiper/modules';




export const HeaderSlider = () => {
  return (
    <div className="container">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={4}
        spaceBetween={20}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop
      >
        {[1, 2, 3, 4,5].map((number) => (
          <SwiperSlide key={number}>
            <img
              className="w-full h-[22rem] object-cover"
              src={`http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider${number}.jpg`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
