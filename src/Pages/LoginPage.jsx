import { useContext, useState } from "react";
import { LoginContext } from "../Context/LoginContext";
import { Link } from "react-router-dom";
import { Title } from "../component/Title";

export const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { login, logOut, session, profile } = useContext(LoginContext);
  const handelSubmit = (e) => {
    e.preventDefault();
    login(userName, password);
  };

  function handelLogOut() {
    setUserName("")
    setPassword("")
    logOut();
  }
  return (
    <div className="bg-slate-900 ">
      <Title>Login</Title>
      <header
        className="md:px-1 py-10"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0 0 0 / 90%), rgb(2 13 24/ 74%), rgb(2 13 24/ 90%)),url(/images/bg-cinema.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
          objectFit: "top",
        }}
      >
        {session ? (
          <div className="container mx-auto flex  items-center justify-center  flex-col pb-96">
            <h1 className="text-white mb-10 text-2xl sm:text-3xl md:text-5xl">
              <span className="text-rose-600 font-bold">Welcome</span>{" "}
              {profile.username}
            </h1>
            <button
              type="button"
              className=" bg-rose-700 hover:bg-rose-600 transition-all py-3 rounded-2xl font-bold text-white w-1/4 flex items-center justify-center mb-3"
              onClick={handelLogOut}
            >
              Log Out
            </button>
          </div>
        ) : (
          <form
            onSubmit={handelSubmit}
            className="container mx-auto flex items-center justify-center flex-col py-12 mb-96 gap-4 w-2/4 border-2 border-slate-700 rounded-3xl backdrop-blur-md"
          >
            <input
              className="w-3/4 h-14  rounded-sm bg-transparent border-4 border-rose-700 outline-none text-white  border-t-0 border-l-0 border-r-0 sm:text-2xl "
              type="text"
              placeholder="User name..."
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
            />
            <input
              className="w-3/4 h-14  rounded-sm bg-transparent border-4 border-rose-700 outline-none text-white  border-t-0 border-l-0 border-r-0 sm:text-2xl"
              type="password"
              placeholder="Password..."
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <button
              type="submit"
              className=" bg-rose-700 hover:bg-rose-600 transition-all py-3 mt-10 rounded-2xl font-bold text-white w-3/4 md:w-1/4 flex items-center justify-center mb-3 "
            >
              Login
            </button>
          </form>
        )}
      </header>
    </div>
  );
};
