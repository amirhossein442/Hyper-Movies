import React, { useContext, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { LoginContext } from "../../Context/LoginContext";

export const Navigation = () => {
  const { profile, session } = useContext(LoginContext);
  const [isHideMenu, setIsHideMenu] = useState("false");
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
      <nav className="flex items-center text-slate-200 justify-between   px-6 pt-6 md:bg-transparent ">
        <div className="flex items-center">
          <NavLink to={"/"}>
            <h1 className="text-2xl mr-12 pb-2">
              Hyper<span className="text-rose-600 font-bold">Movies</span>
              <p className="text-xs text-center text-slate-400">Film review</p>
            </h1>
          </NavLink>

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
          <Link to={"/login"} className="text-white lg:ml-4 w-30  items-center">
            {profile.avatar?.tmdb.avatar_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w300${profile.avatar?.tmdb.avatar_path}`}
                className=" rounded-full w-16 h-16 object-cover "
                alt={profile.userName}
              />
            ) : (
              <img
                src="images/profile.jpg"
                alt={profile.username}
                className=" rounded-full w-16 h-16 object-cover "
              />
            )}

            <p className="flex justify-center w-14 text-sm ">
              {profile.username}
            </p>
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

        <div className="lg:hidden ml-auto">
          <button onClick={() => setIsHideMenu(!isHideMenu)}>
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
        </div>
      </nav>

      <div
        className={`z- transition-all duration-500${
          isHideMenu ? " hidden " : "opacity-100"
        }`}
      >
        <ul className="bg-slate-900 border-t-2 border-slate-500 text-center text-slate-200 py-4">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="hover:text-rose-600 py-2 transition-all duration-300"
            >
              <NavLink
                className={isActiveClass}
                to={item.path}
                onClick={() => setIsHideMenu("false")}
              >
                {item.name.toUpperCase()}
              </NavLink>
            </li>
          ))}
          <div className="flex justify-center items-center pt-1 gap-4 border-t-2 border-slate-600">
            <li className="py-4">
              <Link
                className="bg-rose-700 hover:bg-rose-600 px-6 py-3 rounded-2xl text-white"
                to={"/login"}
              >
                Sign up
              </Link>
            </li>
            <li>
              <Link to={"/login"}>Login</Link>
            </li>
          </div>
        </ul>
      </div>
    </>
  );
};
