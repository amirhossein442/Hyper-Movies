import { useState } from "react";
import { FollowUs } from "./foloowUs";
import { HeaderSlider } from "./headerSlider";
import { Navigation } from "./navigation";
import { SearchBox } from "./searchBox";

export const Header = () => {
  return (
    <header className="md:pt-7 md:pb-3 md:px-10 bg-black">
      <Navigation />
    </header>
  );
};
