import { Children, createContext, useState } from "react";

export const FavoriteMovieContext = createContext()

export const FavoriteMovieContextProvider=({children}) => {
    const[addFavoriteMovie,setAddFavoriteMovie] = useState([])
    
    return(
        <FavoriteMovieContext.Provider value={{addFavoriteMovie, setAddFavoriteMovie}}>
            {children}
        </FavoriteMovieContext.Provider>
    )
}