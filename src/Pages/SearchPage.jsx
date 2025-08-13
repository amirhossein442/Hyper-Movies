import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";

export const SearchPage = () => {
  const [movieSearch, setMovieSearch] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
    if (query && query.trim() !== "") {
      axios
        .get(`https://api.themoviedb.org/3/search/movie`, {
          params: {
            api_key: "c749ba85a95fb5a1032d6cc9d8bf39a0",
            query: query
          }
        })
        .then((res) => setMovieSearch(res.data.results))
        .catch((err) => console.error(err));
    }
  }, [query]);

  return (
    <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 p-5">
      {movieSearch.map((movie) => (
        <Link to={`/more/${movie.id}`} key={movie.id} className="relative">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="rounded shadow-lg"
          />
          <p className="text-white mt-2 text-center">{movie.title}</p>
        </Link>
      ))}
    </div>
  );
};
