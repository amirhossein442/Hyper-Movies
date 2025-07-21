import React from "react";
export const SearchBox = () => {
  return (
    <section className="container mt-12 text-state-300">
      <div className="relative">
        <input
          type="text"
          className="w-full bg-slate-600 text-2xl p-2 border-4 border-slate-900 outline-none 
          placeholder:text-sm mb-8"
          placeholder="Search for a movie, series, or show..."
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="currentColor"
          class="bi bi-search"
          viewBox="0 0 16 16"
          className="absolute right-7 top-4 "
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
        </svg>
      </div>
    </section>
  );
};
