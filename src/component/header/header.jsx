import { useState } from "react";
import { FollowUs } from "./foloowUs";
import { HeaderSlider } from "./headerSlider";
import { Navigation } from "./navigation";
import { SearchBox } from "./searchBox";

export const Header = () => {
    const [headerBg, setHeaderBg] = useState("/images/bg-cinema.jpg")
  return (
    <header
      className="py-12 px-36 "
      style={{
        backgroundImage:
          `linear-gradient(to bottom, rgba(0, 15, 48, 85%), rgba(0 15 48 / 30%),rgba(0 15 48 / 30%)),url(${headerBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
        objectFit: "top",
      }}
    >
      <div className="container mx-auto">
        <Navigation />
        <SearchBox />
        <FollowUs />
        <HeaderSlider  setHeaderBg={setHeaderBg}/>
      </div>
    </header>
  );
};
