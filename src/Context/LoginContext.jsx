import { Children, createContext, useState } from "react";

export const LoginContext = createContext()

export const LoginContextProvider=({children}) => {
    const[profile,setProfile] = useState({})
    
    return(
        <LoginContext.Provider value={{profile, setProfile}}>
            {children}
        </LoginContext.Provider>
    )
}