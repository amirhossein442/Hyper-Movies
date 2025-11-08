import { useContext, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { LoginContext } from "../../Context/LoginContext";

export const Navigation = () => {
  const { profile, session } = useContext(LoginContext);
  const [isHideMenu, setIsHideMenu] = useState(false);
  const location = useLocation();

  const menuItems = [
    {
      path: "/",
      name: "Movie",
    },
    {
      path: "/tvshows",
      name: "Tvshows",
    },
    {
      path: "/favoritelike",
      name: "Favorites",
    },
  ];

  const isActiveClass = ({ isActive }) => {
    return isActive ? "text-rose-400" : "null";
  };

  return (
    <>
      <nav className="flex items-center justify text-slate-200 justify-between px-6 pt-6 md:bg-transparent">
        
        <div className="flex  lg:hidden">
          <button onClick={() => setIsHideMenu(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </button>

          <NavLink to={"/"}>
            <h1 className=" text-2xl ml-5 ">
              Hyper<span className="text-rose-600 font-bold">Movies</span>
              <p className="text-xs text-center text-slate-400">Film review</p>
            </h1>
          </NavLink>
        </div>

        <div>
          <ul className="hidden lg:flex gap-6 uppercase">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="hover:text-rose-600 transition-all duration-300"
              >
                <NavLink className={isActiveClass} to={item.path}>
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {session ? (
          <Link to={"/login"} className="text-white ml-5 w-30 items-center">
            {profile.avatar?.tmdb.avatar_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w300${profile.avatar?.tmdb.avatar_path}`}
                className="rounded-full w-16 h-16 object-cover"
                alt={profile.userName}
              />
            ) : (
              <img
                src="images/profile.jpg"
                alt={profile.username}
                className="rounded-full w-16 h-16 object-cover"
              />
            )}
          </Link>
        ) : (
          <div className="hidden lg:block ml-auto uppercase">
            <ul className="flex gap-8">
              <li>
                <Link to={"/login"}>Login</Link>
              </li>
              <li>
                <Link
                  className="bg-rose-700 hover:bg-rose-600 px-6 py-3 rounded-2xl text-white mr-5"
                  to={"/login"}
                >
                  Sign up
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {isHideMenu && (
        <div
          onClick={() => setIsHideMenu(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        ></div>
      )}

      <div
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-gradient-to-b from-slate-950 to-slate-800 border-r border-slate-600 text-slate-200  transition-transform duration-500 ${
          isHideMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-slate-600">
          <NavLink to={"/"}>
            <h1 className=" text-xl">
              Hyper<span className="text-rose-600 font-bold">Movies</span>
              <p className="text-xs text-center text-slate-400">Film review</p>
            </h1>
          </NavLink>
          
          <button onClick={() => setIsHideMenu(false)}>✕</button>
        </div>

        <ul className="text-center mt-6">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="py-3 hover:text-rose-600 transition-all duration-300"
            >
              <NavLink
                className={isActiveClass}
                to={item.path}
                onClick={() => setIsHideMenu(false)}
              >
                {item.name.toUpperCase()}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="mt-6 border-t border-slate-600 pt-4 text-center">
          <Link
            className="bg-rose-700 hover:bg-rose-600 px-6 py-3 rounded-2xl text-white block mx-auto w-fit mb-3"
            to={"/login"}
            onClick={() => setIsHideMenu(false)}
          >
            Sign up
          </Link>
          <Link to={"/login"} onClick={() => setIsHideMenu(false)}>
            Login
          </Link>
        </div>
      </div>
    </>
  );
};
