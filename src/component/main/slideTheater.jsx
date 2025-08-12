import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


export const SlideMovie = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=c749ba85a95fb5a1032d6cc9d8bf39a0"
      )
      .then((res) => setMovies(res.data.results));
  }, []);

  return (
    <div className="container lg:w-8/12 mr-20 mt-20">
      <h1 className="text-3xl font-bold text-white mb-5 ml-4 sm:ml-0">
        in theater
      </h1>
      <Swiper
        modules={[Navigation]}
        breakpoints={{
          320: {
            spaceBetween: 0,
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
        {movies.map((movie, index) => (
          <SwiperSlide key={index} className="p-10 sm:p-0">
            <Link to={`/more/${movie.id}`} className="relative">
              <img
                alt={movie.title}
                className="w-[400px] h-[280px]  object-fill rounded"
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
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
                    {Math.round(movie.vote_average)}
                    <span className="absolute text-xl -bottom-1"> /10</span>
                  </span>
                  <span className="text-white bottom-1 text-sm w-32">
                    {movie.title}
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
