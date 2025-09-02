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
    <div className="bg-slate-900 pb-48">
      <form
        onSubmit={handelSubmit}
        className="container mx-auto flex  items-center flex-col pt-10 gap-4 w-full"
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
          type="file"
          onChange={handelPicProf}
        />
        <button
          type="submit"
          className=" bg-rose-700 hover:bg-rose-600 transition-all py-3 rounded-2xl text-white w-1/4 flex items-center justify-center mb-3 "
        >
          submit
        </button>
      </form>
      <div className="flex container mx-auto  justify-center  text-rose-500 text-2xl">
        <p>
          {profile.firstName}
          <span> {profile.lastName}</span>
        </p>
      </div>
    </div>
  );
};
