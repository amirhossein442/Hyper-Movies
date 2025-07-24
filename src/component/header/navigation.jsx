import React, { useState } from "react";

export const Navigation = () => {
  const [isHideMenu, setIsHideMenu] = useState("false");

  return (
    <>
      <nav className="flex items-center text-slate-200 bg-slate-900 px-6 py-6 sm:bg-transparent ">
        <div className="flex items-center">
          <h1 className="text-2xl mr-12">
            Hyper<span className="text-rose-600 font-bold">Movies</span>
            <p className="text-xs text-center text-slate-400">Film review</p>
          </h1>

          <ul className="hidden md:flex gap-6 uppercase">
            <li className="hover:text-rose-600">
              <a href="#">Movie</a>
            </li>
            <li className="hover:text-rose-600">
              <a href="#">Tvshows</a>
            </li>
            <li className="hover:text-rose-600">
              <a href="#">people</a>
            </li>
            <li className="hover:text-rose-600">
              <a href="#">More</a>
            </li>
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
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </button>
        </div>
      </nav>

      <div>
        <ul
          className={`transition-all duration-500${
            isHideMenu
              ? "h-0 opacity-0"
              : "h-auto bg-slate-900 border-t-2 border-slate-400 text-center text-slate-200 py-4 "
          }`}
          >
          <li className="hover:text-rose-600 py-2">
            <a href="#">Movie</a>
          </li>
          <li className="hover:text-rose-600 py-2">
            <a href="#">Tvshows</a>
          </li>
          <li className="hover:text-rose-600 py-2">
            <a href="#">people</a>
          </li>
          <li className="hover:text-rose-600 py-2">
            <a href="#">More</a>
          </li>
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
