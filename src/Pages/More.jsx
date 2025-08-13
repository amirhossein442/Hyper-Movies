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
        setHeaderBg(res.data.backdrop_path);
      });
  }, []);
  
  return (
    <div>
      <header
        className="md:px-1 "
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0 0 0 / 100%), 
          rgb(2 13 24/ 44%), rgb(0 0 0/ 100%)),
          url(https://image.tmdb.org/t/p/w780${headerBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          objectFit: "contain",
        }}
      >
        <div className="container mx-auto">
          {movie ? (
            <div className="pb-20">
              <div className="flex pt-10 justify-center">
                <img
                  className="ml-10 mr-10 w-32 h-52 sm:w-full sm:h-auto lg:h-[500px] object-contain"
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt={movie.title}
                />
                <div>
                  <h2 className=" text-white text-2xl sm:text-3xl">
                    {movie.title}
                    <span className="hidden sm:block text-slate-300 text-base ml-4">
                      {movie.release_date}
                    </span>
                  </h2>
                  <h3 className=" hidden sm:block text-slate-300 mt-5 w-40 sm:w-full text-sm leading-6 sm:text-xl sm:leading-8">
                    {movie.overview}
                  </h3>
                  <div className="flex items-center ">
                    <button className="mt-5 border py-3 px-3 border-rose-500 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="#e11d48"
                        class="bi bi-heart-fill"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                        />
                      </svg>
                    </button>
                    <p className="text-rose-500 ml-3 mt-3">LIKE</p>
                  </div>

                  <span className="flex bottom-5 items-center ">
                    {[...Array(Math.round(movie.vote_average))].map(
                      (_, index) => (
                        <svg
                          key={index}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="gold"
                          className="mt-5 w-5 h-5 lg:w-8 lg:h-8"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                      )
                    )}
                    <span className="text-white ml-2 hidden sm:block">
                      {Math.round(movie.vote_average)}
                      <span className=""> /10</span>
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
