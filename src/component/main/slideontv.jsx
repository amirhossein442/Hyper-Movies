import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const SlideMovie2 = () => {
  const [movies2, setMovies2] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=c749ba85a95fb5a1032d6cc9d8bf39a0"
      )
      .then((res) => setMovies2(res.data.results));
  }, []);
  console.log(movies2);
  return (
    <div className="container lg:w-8/12 mr-20">
      <h1 className="text-3xl font-bold text-white mb-5 ml-4 sm:ml-0">On TV</h1>
      <Swiper
        modules={[Navigation]}
        breakpoints={{
          320: {
            spaceBetween: 10,
            slidesPerView: 1,
          },
          640: {
            spaceBetween: 20,
            slidesPerView: 2,
            centeredSlides: true,
          },
          768: {
            spaceBetween: 20,
            slidesPerView: 3,
            centeredSlides: true,
          },
          1024: {
            spaceBetween: 20,
            slidesPerView: 4,
            centeredSlides: true,
          },
        }}
        navigation={true}
        loop
      >
        {movies2.map((movie2, index) => (
          <SwiperSlide key={index} className="p-10 sm:p-0">
            <Link to={`/more/${movie2.id}`} className="relative">
              <img
                alt="img"
                className="w-[400px] h-[280px] sm:w-full object-fill rounded"
                src={`https://image.tmdb.org/t/p/w300${movie2.poster_path}`}
              />
              <div className=" absolute inset-0 bg-gradient-to-b from-slate-800/30 hover:from-slate-900 to-slate-900/60 hover:to-rose-500/60"></div>

              <div className="absolute bottom-14 left-5 flex-column text-2xl text-white">
                <span className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="gold"
                    className="absolute -bottom-5"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <span className="absolute -bottom-6 left-7">
                    {Math.round(movie2.vote_average)}<span className="absolute text-xl -bottom-1"> /10</span>
                  </span>
                  <span className="text-white bottom-1 text-sm w-32">
                    {movie2.title}
                  </span>
                </span>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
