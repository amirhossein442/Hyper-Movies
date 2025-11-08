import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export const SearchBox = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (searchValue.trim() !== "") {
      navigate(`/search?query=${encodeURIComponent(searchValue)}`);
    }
  }, [searchValue]);

  return (
    <section className="mt-5 pt-5 px-10 sm:p-0 text-state-300">
      <div className="relative mt-0">
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          type="text"
          className="w-full  bg-slate-600 text-2xl p-2 border-4 border-slate-900 outline-none 
          placeholder:text-sm"
          placeholder="Search for a movie, series, or show..."
        />
        <button
          onClick={() =>
            navigate(`/search?query=${encodeURIComponent(searchValue)}`)
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="absolute right-7 top-3"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </button>
      </div>
    </section>
  );
};
