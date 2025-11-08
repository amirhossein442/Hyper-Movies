import { Link } from "react-router-dom";
import { useAxios } from "../../hooks/axioshook";

export const Spotlight = () => {
  const [people] = useAxios("person/popular");
  return (
    <div className="hidden lg:block w-4/12 h-96 overflow-auto mt-20">
      <h2 className="text-white text-bold text-2xl mb-3">
        Spotlight Celebrities
      </h2>
      <hr />
      {people.map((character, index) => (
        <div key={index} className=" mt-5 text-white hover:cursor-pointer hover:text-rose-500 transition-all duration-300">
          <div className="flex items-center gap-4">
            <img
              src={`https://image.tmdb.org/t/p/w300${character.profile_path}`}
              alt="test"
              className="h-[70px] w-[70px] object-top object-cover"
            />
            <div className="flex flex-col">
              <span>{character.name}</span>
              <span className="text-gray-400">Actor</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
