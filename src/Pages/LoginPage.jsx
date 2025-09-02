import { useContext, useState } from "react";
import { LoginContext } from "../Context/LoginContext";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [pictureProf, setPictureProf] = useState("");
  const { setProfile, profile } = useContext(LoginContext);

  const handelSubmit = (e) => {
    e.preventDefault();
    setProfile({
      firstName: firstName,
      lastName: lastName,
      pictureProf: pictureProf,
    });
  };

  const handelPicProf = (e) => {
    const pic = e.target.files[0];
    if (pic) {
      setPictureProf(URL.createObjectURL(pic));
    }
  };
  return (
    <div className="bg-slate-900 ">
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
        <form
          onSubmit={handelSubmit}
          className="container mx-auto flex  items-center justify-center flex-col py-10  gap-4 w-2/4 border-2 border-slate-700 rounded-3xl backdrop-blur-md"
        >
          <input
            className="w-3/4 h-14  rounded-sm bg-transparent border-4 border-rose-700 outline-none text-white  border-t-0 border-l-0 border-r-0 text-2xl "
            type="text"
            placeholder="firstName..."
            onChange={(e) => setfirstName(e.target.value)}
            value={firstName}
          />
          <input
            className="w-3/4 h-14  rounded-sm bg-transparent border-4 border-rose-700 outline-none text-white  border-t-0 border-l-0 border-r-0 text-2xl"
            type="text"
            placeholder="lastName..."
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
          <input
            className="w-24 md:w-2/4 text-sm text-gray-300 
             file:mr-4 file:py-2 md:file:px-3
             file:rounded-xl file:border-0
             file:text-sm file:font-semibold
             file:bg-rose-700 file:text-white
             hover:file:bg-rose-600
             cursor-pointer"
            type="file"
            onChange={handelPicProf}
          />
          <button
            type="submit"
            className=" bg-rose-700 hover:bg-rose-600 transition-all py-3 mt-10 rounded-2xl font-bold text-white w-3/4 md:w-1/4 flex items-center justify-center mb-3 "
          >
            Login
          </button>
        </form>
        <div className="flex container mx-auto  justify-center items-center  text-rose-500 mt-5 text-3xl ">
          {profile.firstName && (
            <>
              <h1 className="text-4xl mr-2">Welcom </h1>
              <p className="text-white">
                {profile.firstName}
                <span> {profile.lastName}</span>
              </p>
            </>
          )}
        </div>
      </header>
    </div>
  );
};
