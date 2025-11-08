import axios from "axios";
import {createContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export const LoginContext = createContext();

export const LoginContextProvider = ({ children }) => {
  const [profile, setProfile] = useState({});
  const [showProfile, setShowProfile] = useState(false);
  const [session, setSession] = useState(initSession);

  function initSession() {
    return localStorage.getItem("session")
      ? localStorage.getItem("session")
      : null;
  }

  async function getUserData() {
    const profileResult = await axios.get(
      `https://api.themoviedb.org/3/account?api_key=c749ba85a95fb5a1032d6cc9d8bf39a0&session_id=${session}`
    );
    setProfile(profileResult.data)
  }
  
  useEffect(() => {
    if (session) {
      getUserData()
    }
  },[session]);

  
  async function login(userName, password) {
    try {
      const resultToken = await axios.get(
        "https://api.themoviedb.org/3/authentication/token/new?api_key=c749ba85a95fb5a1032d6cc9d8bf39a0"
      );
      const authorize = await axios.post(
        "https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=c749ba85a95fb5a1032d6cc9d8bf39a0",
        {
          username: userName,
          password: password,
          request_token: resultToken.data.request_token,
        }
      );
      const session = await axios.post(
        "https://api.themoviedb.org/3/authentication/session/new?api_key=c749ba85a95fb5a1032d6cc9d8bf39a0",
        {
          request_token: resultToken.data.request_token,
        }
      );
      setSession(session.data.session_id);
      localStorage.setItem("session", session.data.session_id);
      toast.success("Successfully logged in!");
      setShowProfile(true);
    } catch (error) {
      toast.error("Invalid username and password");
      setShowProfile(false);
    }
  }

  function logOut() {
    setSession(null);
    setShowProfile(false);
    localStorage.removeItem("session");
    toast.success("Successfully logged out!");
  }

  return (
    <LoginContext.Provider
      value={{ profile, setProfile, login, showProfile, session, logOut }}
    >
      {children}
      <Toaster />
    </LoginContext.Provider>
  );
};
