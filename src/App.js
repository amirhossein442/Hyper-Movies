import { Footer } from "./component/Footer/footer";
import { Header } from "./component/header/header";
import { Main0 } from "./component/main/Main0";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";
import { TvShowsPage } from "./Pages/TvShowsPage";
import { More } from "./Pages/More";
import { PeoplePage } from "./Pages/PeoplePage";
import { SearchPage } from "./Pages/SearchPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main0 />}/>
        <Route path="/tvshows" element={< TvShowsPage />}/>
        <Route path="/search" element={<SearchPage />}/>
        <Route path="/more/:id" element={< More />}/>
        <Route path="/people" element={<PeoplePage />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
