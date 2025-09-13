import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";

export const SearchPage = () => {
  const [movieSearch, setMovieSearch] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  console.log(query);
  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (query && query.trim() !== "") {
        axios
          .get(`https://api.themoviedb.org/3/search/movie`, {
            params: {
              api_key: "c749ba85a95fb5a1032d6cc9d8bf39a0",
              query: query,
            },
          })
          .then((res) => setMovieSearch(res.data.results));
      }
    }, 3000);
    return() => {
      clearTimeout(timeOut)
    }
  }, [query]);

  return (
    <div className=" bg-slate-900 pb-40">
      {movieSearch.length === 0 ? (
        <p className="text-white text-3xl flex justify-center">IS NOT DEFIND</p>
      ) : (
        <div className="container mx-auto px-10 pt-10 aspect-12/9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pb-24">
          {movieSearch.map((movie) => (
            <Link to={`/more/${movie.id}`} key={movie.id} className="relative">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="rounded shadow-lg"
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
                  <span className="text-white bottom-1 text-sm ">
                    {movie.title}
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
