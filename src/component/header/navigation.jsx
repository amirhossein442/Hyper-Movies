import React from "react";

export const Navigation = () => {
  return (
    <nav className="container flex mt-10 items-center text-slate-200">
      <div className="flex items-center">
        <h1 className="text-2xl mr-12">
          Hyper<span className="text-rose-600 font-bold">Movies</span>
          <p className="text-xs text-center text-slate-400">Film review</p>
        </h1>

        <ul className="flex gap-6 uppercase">
          <li>
            <a href="#">Movie</a>
          </li>
          <li>
            <a href="#">Tvshows</a>
          </li>
          <li>
            <a href="#">people</a>
          </li>
          <li>
            <a href="#">More</a>
          </li>
        </ul>
      </div>
      <div className="ml-auto uppercase">
        <ul className="flex gap-8">
          <li>
            <a href="#">Login</a>
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
    </nav>
  );
};
