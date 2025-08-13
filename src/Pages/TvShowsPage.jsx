import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const TvShowsPage = () => {
  const [TvShoesMovie, setTvShoesMovie] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=c749ba85a95fb5a1032d6cc9d8bf39a0"
      )
      .then((res) => setTvShoesMovie(res.data.results));
  }, []);
  console.log(TvShoesMovie)
  return (
    <div className="bg-[rgb(2_13_24)] ">
      <header
        className="md:px-1"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0 0 0 / 90%), rgb(2 13 24/ 74%), rgb(2 13 24/ 90%)),url(/images/bg-cinema.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
          objectFit: "top",
        }}
      >
        <div className="container mx-auto text-center pt-16 pb-24">
          <h1 className="text-white text-4xl  pb-5 font-bold">
            TVSHOES LISTING
          </h1>
          <div className="flex justify-center items-center z-10">
            <Link to="/" className="text-blue-300 text-xl">
              Movie<span className="ml-5">&gt;</span>
            </Link>
            <p className="text-slate-300 ml-5">TvSHOES LISTING</p>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-10 pt-10 aspect-12/9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pb-24">
        {TvShoesMovie.map((movie, index) => (
            <Link to={`/more/${movie.id}`} className="relative">
              <img
                alt={movie.title}
                className=" object-fill rounded"
                src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
              />
              <div className=" absolute inset-0 bg-gradient-to-b from-slate-800/30 hover:from-slate-900 to-slate-900/60 hover:to-rose-500/60"></div>

              <div className="absolute bottom-14 left-5 flex-column text-2xl text-white">
                <span className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="gold"
                    className="absolute -bottom-10"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <span className="absolute ml-3 -bottom-10 left-7 w-40">
                    {Math.round(movie.vote_average)}
                    <span className="absolute text-xl -bottom-1"> /10</span>
                  </span>
                  <span className="text-white bottom-1 text-2xl ">
                    {movie.title}
                  </span>
                </span>
              </div>
            </Link>
        ))}
        
      </div>
    </div>
  );
};
