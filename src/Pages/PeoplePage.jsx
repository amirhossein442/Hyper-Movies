import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const PeoplePage = () => {
  const [character, setCharacter] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/person/popular?api_key=c749ba85a95fb5a1032d6cc9d8bf39a0&language=en-US&page=2"
      )
      .then((res) => setCharacter(res.data.results));
  }, []);
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
            PEOPLE LISTING
          </h1>
          <div className="flex justify-center items-center z-10">
            <Link to="/" className="text-blue-300 text-xl">
              Movie<span className="ml-5">&gt;</span>
            </Link>
            <p className="text-slate-300 ml-5">PEOPLE LISTING</p>
          </div>
        </div>
      </header>
      <div className="px-16 sm:px-96 py-24 ">
        {character.map((people, index) => (
          <div key={index} className="flex border-2 border-rose-600 mb-5 text-white">
            <img
              className="w-32 h-32 object-cover "
              src={`https://image.tmdb.org/t/p/w300${people.profile_path}`}
              alt={people.name}
            />
            <p className="ml-5 mt-3">{people.name}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};
