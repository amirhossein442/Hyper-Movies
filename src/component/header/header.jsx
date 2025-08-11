import { Navigation } from "./navigation";
import { SearchBox } from "./searchBox";

export const Header = () => {
  return (
    <header className="md:pt-3 md:pb-3 md:px-10 bg-black">
      <Navigation />
      <div className="container mx-auto">
        <SearchBox />
      </div>
    </header>
  );
};
