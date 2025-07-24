import { useState } from "react";
import { FollowUs } from "./foloowUs";
import { HeaderSlider } from "./headerSlider";
import { Navigation } from "./navigation";
import { SearchBox } from "./searchBox";

export const Header = () => {
    const [headerBg, setHeaderBg] = useState("/images/bg-cinema.jpg")
  return (
    <header
      className="md:py-10 md:px-10 "
      style={{
        backgroundImage:
          `linear-gradient(to bottom, rgba(30 41 59 / 100%), rgba(30 41 59 / 50%),rgba(30 41 59 / 20%)),url(${headerBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
        objectFit: "top",
      }}
    >
      <Navigation />
      <div className="container mx-auto">
        <SearchBox />
        <FollowUs />
        <HeaderSlider  setHeaderBg={setHeaderBg}/>
      </div>
    </header>
  );
};
