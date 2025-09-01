import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export const Navigation = () => {
  const [isHideMenu, setIsHideMenu] = useState("false");
  const location = useLocation()
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
      path: "/people",
      name: "People",
    },
    {
      path: "/more",
      name: "More",
    },
    {
      path: "/favoritelike",
      name:"Favorites"
    }
  ];

  const isActiveClass = ({isActive})=> {
    return isActive ? "text-rose-400" : "null"
  }

  return (
    <>
      <nav className="flex items-center text-slate-200 bg-slate-900 px-6 pt-6 md:bg-transparent ">
        <div className="flex items-center">
          <NavLink to={"/"}>
            <h1 className="text-2xl mr-12 pb-2">
              Hyper<span className="text-rose-600 font-bold">Movies</span>
              <p className="text-xs text-center text-slate-400">Film review</p>
            </h1>
          </NavLink>

          <ul className="hidden md:flex gap-6 uppercase">
            {menuItems.map((item, index) => (
              <li key={index} className="hover:text-rose-600 transition-all duration-300">
                <NavLink className={isActiveClass} to={item.path}>{item.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden md:block ml-auto uppercase">
          <ul className="flex gap-8">
            <li>
              <a href="#" className="md:hidden lg:block">
                Login
              </a>
            </li>
            <li>
              <a
                className="bg-rose-700 hover:bg-rose-600 px-6 py-3 rounded-2xl text-white"
                href="#"
              >
                Sign up
              </a>
            </li>
          </ul>
        </div>
        <div className="md:hidden ml-auto">
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
        <ul className="bg-slate-900 border-t-2 border-slate-400 text-center text-slate-200 py-4">
          {menuItems.map((item, index) => (
              <li key={index} className="hover:text-rose-600 py-2 transition-all duration-300">
                <NavLink className={isActiveClass} to={item.path} onClick={()=> setIsHideMenu("false")}>{item.name.toUpperCase()}</NavLink>
              </li>
            ))}
          <li className="py-4">
            <a
              className="bg-rose-700 hover:bg-rose-600 px-6 py-3 rounded-2xl text-white"
              href="#"
            >
              Sign up
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
