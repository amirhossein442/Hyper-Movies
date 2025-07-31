import { useState } from "react";
import { FollowUs } from "./foloowUs";
import { HeaderSlider } from "./headerSlider";
import { Navigation } from "./navigation";
import { SearchBox } from "./searchBox";

export const Header = () => {
    const [headerBg, setHeaderBg] = useState("/images/bg-cinema.jpg")
  return (
    <header
      className="md:py-10 md:px-10 pb-32 "
      style={{
        backgroundImage:
          `linear-gradient(to bottom, rgba(0 0 0 / 100%), rgb(2 13 24/ 74%), rgb(2 13 24/ 90%)),url(${headerBg})`,
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
