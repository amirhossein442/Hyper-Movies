import { Children, createContext, useState } from "react";

export const FavoriteMovieContext = createContext();

export const FavoriteMovieContextProvider = ({ children }) => {
  const [addFavoriteMovie, setAddFavoriteMovie] = useState(() => {
    return localStorage.getItem("favoriteMovies")
      ? JSON.parse(localStorage.getItem("favoriteMovies"))
      : [];
  });

  return (
    <FavoriteMovieContext.Provider
      value={{ addFavoriteMovie, setAddFavoriteMovie }}
    >
      {children}
    </FavoriteMovieContext.Provider>
  );
};
