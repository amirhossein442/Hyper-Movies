import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { useAxios } from "../../hooks/axioshook";

export const HeaderSlider = ({ setHeaderBg }) => {
  const [movies] = useAxios("movie/now_playing")

  return (
    <div className="container md:pb-24">
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
        autoplay={{ delay: 3000 }}
        
      >
        {movies.map((movie, index) => (
          <SwiperSlide key={index}>
            <Link to={`/more/${movie.id}`}>
            <img
              alt="img"
              onMouseOver={()=> setHeaderBg(`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`)}
              className="w-full h-[450px] sm:h-[400px]  rounded object-cover p-5 sm:p-0 "
              src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
            />
            </Link>
          </SwiperSlide>
          
        ))}
      </Swiper>
    </div>
  );
};
