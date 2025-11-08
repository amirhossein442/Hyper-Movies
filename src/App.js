import { Footer } from "./component/Footer/footer";
import { Header } from "./component/header/header";
import { Main0 } from "./component/main/Main0";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";
import { TvShowsPage } from "./Pages/TvShowsPage";
import { More } from "./Pages/More";
import { SearchPage } from "./Pages/SearchPage";
import { FavoriteLikePage } from "./Pages/FavoriteLikePage";
import { LoginPage } from "./Pages/LoginPage";
import { ScrollToTop } from "./component/Scroll";
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  
  return (
    <Router>
      <SpeedInsights/>
      <ScrollToTop/>
      <Header />
      <Routes>
        <Route path="/" element={<Main0 />} />
        <Route path="/tvshows" element={<TvShowsPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/more/:id" element={<More />} />
        <Route path="/favoritelike" element={<FavoriteLikePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
