import { useContext, useEffect, useState } from "react";
import { FavoriteMovieContext } from "../Context/FavoriteMovieContext";
import { Link } from "react-router-dom";
import { Title } from "../component/Title";
import { LoginContext } from "../Context/LoginContext";

export const FavoriteLikePage = () => {
  const { addFavoriteMovie } = useContext(FavoriteMovieContext);
  const {session} = useContext(LoginContext);
  useEffect(()=> {
    window.scrollTo({ top: 0, behavior: "smooth" });
  })
  return (
    <div>
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
            FAVORITE LISTING
          </h1>
          <div className="flex justify-center items-center z-10">
            <Link to="/" className="text-blue-300 text-xl">
              Movie<span className="ml-5">&gt;</span>
            </Link>
            <p className="text-slate-300 ml-5">FAVORITE LISTING</p>
          </div>
        </div>
        <Title>Faivorite</Title>
      </header>

      <div className="bg-[rgb(2_13_24)]">
        {session && addFavoriteMovie.length ? (
          <div className="container mx-auto grid sm:grid-cols-4 gap-10 pb-40 py-10 px-5">
            {addFavoriteMovie.map((movie, index) => (
              <Link to={`/more/${movie.id}`} className="relative" key={index}>
                <img
                  alt={movie.title}
                  className=" object-fill rounded"
                  src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
                />
                <div className=" absolute inset-0 bg-gradient-to-b  hover:from-slate-900/50  hover:to-rose-500/60"></div>

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
        ) : (
          <h1 className="text-white flex justify-center py-10 text-4xl font-bold">
            Favorites are empty.
          </h1>
        )}
      </div>
    </div>
  );
};
