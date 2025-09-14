import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FavoriteMovieContext } from "../Context/FavoriteMovieContext";
import toast from "react-hot-toast";
import { Title } from "../component/Title";

export const More = () => {
  const { addFavoriteMovie, setAddFavoriteMovie } =
    useContext(FavoriteMovieContext);
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [headerBg, setHeaderBg] = useState("");
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if (movie && addFavoriteMovie.find((m) => m.id === movie.id)) {
      setLiked(true);
    } else {
      setLiked(false);
    }
  }, [movie, addFavoriteMovie]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=c749ba85a95fb5a1032d6cc9d8bf39a0`
      )
      .then((res) => {
        setMovie(res.data);
        setHeaderBg(res.data.backdrop_path);
      });
  }, []);

  const handelLiked = (m) => {
    if (addFavoriteMovie.find((movie) => movie.id === m.id)) {
      const update = addFavoriteMovie.filter((movie) => movie.id !== m.id);
      setAddFavoriteMovie(update);
      localStorage.setItem("favoriteMovies", JSON.stringify(update));
    } else {
      const update = [...addFavoriteMovie, m];
      setAddFavoriteMovie(update);
      localStorage.setItem("favoriteMovies", JSON.stringify(update));
    }
  };

  const handelRated = async (movieId, rating) => {
    try {
      const { data } = await axios.post(
        `https://api.themoviedb.org/3/movie/${movieId}/rating?api_key=c749ba85a95fb5a1032d6cc9d8bf39a0&session_id=4cb958747a69e8ed0ffd75575c07b269e8b18204`,
        {
          value: rating,
        }
      );
      toast.success("Movie rating added!");
    } catch (errore) {
      toast.error("This didn't work.");
    }
  };

  return (
    <div>
      <header
        className="md:px-1 "
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0 0 0 / 100%), 
          rgb(2 13 24/ 74%), rgb(0 0 0/ 100%)),
          url(https://image.tmdb.org/t/p/w780${headerBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          objectFit: "contain",
        }}
      >
        <div className="container mx-auto">
          {movie ? (
            <div className="pb-60">
              <Title>{movie.title}</Title>
              <div className="flex pt-10 justify-center">
                <img
                  className="ml-10 mr-10 w-32 h-52 sm:w-full sm:h-auto lg:h-[500px] object-contain"
                  src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
                  alt={movie.title}
                />
                <div>
                  <h2 className=" text-white text-2xl sm:text-3xl">
                    {movie.title}
                    <span className="hidden sm:block text-slate-300 text-base ml-4">
                      {movie.release_date}
                    </span>
                  </h2>
                  <h3 className="  text-slate-300 mt-5 sm:w-30 sm:w-full text-xs leading-6 sm:text-xl sm:leading-8">
                    {movie.overview}
                  </h3>
                  <div className="sm:flex">
                    <div className="flex items-center ">
                      <button
                        onClick={() => handelLiked(movie)}
                        className="mt-5  py-3 px-3 border-rose-500 "
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          fill="#e11d48"
                          className="bi bi-heart-fill"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                          />
                        </svg>
                      </button>

                      {liked ? (
                        <p className=" mt-4 p-1 px-3 text-rose-600 sm:text-xl font-bold rounded-lg">
                          {" "}
                          Remove to Favorite
                        </p>
                      ) : (
                        <p className=" mt-4 p-1 px-3 text-rose-600  sm:text-xl font-bold rounded-lg">
                          {" "}
                          Add to Favorite
                        </p>
                      )}
                    </div>

                    <div className="flex-col sm:flex-row">
                      <div className="flex">
                        <select
                          className="ml-5 mt-4 h-10 bg-transparent text-rose-600 text-2xl focus:outline-none"
                          onChange={(e) =>
                            handelRated(movie.id, parseFloat(e.target.value))
                          }
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="3">4</option>
                          <option value="3">5</option>
                          <option value="3">6</option>
                          <option value="3">7</option>
                          <option value="3">8</option>
                          <option value="3">9</option>
                          <option value="10">10</option>
                        </select>
                        <p className=" mt-5 p-1 px-3 text-rose-600 sm:text-xl font-bold rounded-lg">
                          Rated
                        </p>
                      </div>
                    </div>
                  </div>
                  <span className="flex bottom-5 items-center ">
                    {[...Array(Math.round(movie.vote_average))].map(
                      (_, index) => (
                        <svg
                          key={index}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="gold"
                          className="mt-5 w-3 h-5 lg:w-8 lg:h-8"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                      )
                    )}
                    <span className="hidden sm:block text-white ml-2 ">
                      {Math.round(movie.vote_average)}
                      <span> /10</span>
                    </span>
                  </span>
                </div>
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
