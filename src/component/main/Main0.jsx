import { useState } from "react";
import { FollowUs } from "../header/foloowUs";
import { HeaderSlider } from "../header/headerSlider";
import { Main1 } from "./main1";
import { Main2 } from "./Main2";

export const Main0 = () => {
  const [headerBg, setHeaderBg] = useState("/images/bg-cinema.jpg");

  return (
    <div className="bg-[rgb(2_13_24)]">
      <header
        className="md:px-1 "
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0 0 0 / 100%), rgb(2 13 24/ 24%), rgb(2 13 24/ 50%)),url(${headerBg})`,
          backgroundSize:"cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          objectFit: "fill",
        }}
      >
        <div className="container mx-auto">
          <FollowUs />
          <HeaderSlider setHeaderBg={setHeaderBg} />
        </div>
      </header>

      <div className="container mx-auto ">
        <Main1 />
        <Main2 />
      </div>
    </div>
  );
};
