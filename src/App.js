import { Footer } from "./component/Footer/footer";
import { Header } from "./component/header/header";
import { Main0 } from "./component/main/Main0";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";
import { TvShowsPage } from "./Pages/TvShowsPage";
import { More } from "./Pages/More";
import { PeoplePage } from "./Pages/PeoplePage";
import { SearchPage } from "./Pages/SearchPage";
import { FavoriteLikePage } from "./Pages/FavoriteLikePage";
import { LoginPage } from "./Pages/LoginPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main0 />}/>
        <Route path="/tvshows" element={< TvShowsPage />}/>
        <Route path="/search" element={<SearchPage />}/>
        <Route path="/more/:id" element={< More />}/>
        <Route path="/favoritelike" element={< FavoriteLikePage />}/>
        <Route path="/people" element={<PeoplePage />}/>
        <Route path="/login" element={<LoginPage />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
