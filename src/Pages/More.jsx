import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const More = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [headerBg, setHeaderBg] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=c749ba85a95fb5a1032d6cc9d8bf39a0`
      )
      .then((res) => {
        setMovie(res.data);
        setHeaderBg(res.data.poster_path);
      });
  }, []);
  console.log(movie);
  return (
    <div>
      <header
        className="md:px-1 "
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0 0 0 / 100%), 
          rgb(2 13 24/ 74%), rgb(2 13 24/ 90%)),
          url(https://image.tmdb.org/t/p/w300${headerBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
          objectFit: "top",
        }}
      >
        <div className="container mx-auto">
          {movie ? (
            <div className="pb-24 flex pt-10 justify-center">
              <img
                className="ml-10 mr-10 w-32 h-52 sm:w-full sm:h-auto"
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
              />
              <div>
                <h2 className=" text-white text-3xl">
                  {movie.title}
                  <span className="hidden sm:block text-slate-300 text-base ml-4">{movie.release_date}</span>
                </h2>
                <h3 className=" text-slate-300 mt-5 text-sm leading-6 sm:text-2xl sm:leading-10">
                  {movie.overview}
                </h3>
              </div>
            </div>
          ) : (
            <p className="text-white py-10 flex justify-center text-3xl ">
              Loading movie information...
            </p>
          )}
        </div>
      </header>
    </div>
  );
};
