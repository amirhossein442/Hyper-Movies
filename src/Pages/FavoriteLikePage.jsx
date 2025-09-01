import { useContext, useEffect, useState } from "react";
import { FavoriteMovieContext } from "../Context/FavoriteMovieContext";
import { Link } from "react-router-dom";

export const FavoriteLikePage = () => {
  const { addFavoriteMovie } = useContext(FavoriteMovieContext);
  const [headerBg, setHeaderBg] = useState("/images/bg-cinema.jpg");

  useEffect(() => {
    console.log(addFavoriteMovie);
  }, [addFavoriteMovie]);

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
      </header>

      <div className="bg-slate-900 ">
        <div className="container mx-auto grid sm:grid-cols-4 gap-10 pb-40 py-10 px-5">
          {addFavoriteMovie.map((movie, index) => (
            <Link to={`/more/${movie.id}`} key={index} className="">
              <img
                className=""
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              />
              <h2 className=" text-white text-xl ">
                {movie.title}
                <span className="hidden sm:block text-slate-300 text-base ml-4">
                  {movie.release_date}
                </span>
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
