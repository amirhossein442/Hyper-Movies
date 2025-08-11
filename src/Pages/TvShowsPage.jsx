import { Link } from "react-router-dom";

export const TvShowsPage = () => {
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

      <div className="container ml-auto pt-10">
        <h1>rfdg</h1>
      </div>
    </div>

  );
};
