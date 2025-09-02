import { useContext, useState } from "react";
import { LoginContext } from "../Context/LoginContext";

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

  const handelPicProf= (e)=> {
    const pic = e.target.files[0]
    if (pic) {
      setPictureProf(URL.createObjectURL(pic))
    }
  }
  return (
    <div className="bg-slate-900 pb-52 pt-20 ">
      <form 
        onSubmit={handelSubmit}
        className="container mx-auto flex  items-center flex-col pt-10 gap-4 w-3/4 border-2 border-slate-800 bg-slate-950 rounded-2xl"
      >
        <input
          className="w-2/4 h-10 px-5 rounded-sm bg-slate-600"
          type="text"
          placeholder="firstName..."
          onChange={(e) => setfirstName(e.target.value)}
          value={firstName}
        />
        <input
          className="w-2/4 h-10 px-5 rounded-sm bg-slate-600 "
          type="text"
          placeholder="lastName..."
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
        />
        <input
        className="  w-2/4 text-sm text-gray-300 
             file:mr-4 file:py-2 file:px-4
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
          className=" bg-rose-700 hover:bg-rose-600 transition-all py-3 rounded-2xl font-bold text-white w-1/4 flex items-center justify-center mb-3 "
        >
          submit
        </button>
      </form>
      <div className="flex container mx-auto  justify-center items-center  text-rose-500 mt-5 text-3xl">
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
    </div>
  );
};
