import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import axios from "axios";

export const HeaderSlider = ({ setHeaderBg }) => {
  const [movieHeader, setMovieHeader] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=c749ba85a95fb5a1032d6cc9d8bf39a0"
      )
      .then((res) => setMovieHeader(res.data.results));
  }, []);
  console.log(movieHeader);

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
        loop={true}
      >
        {movieHeader.map((movie) => (
          <SwiperSlide key={movie.id}>
            <img
              alt="img"
              onMouseOver={()=> setHeaderBg(`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`)}
              className="w-full h-[450px] sm:h-[400px]  rounded object-cover p-5 sm:p-0 "
              src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
