import { Footer } from "./component/Footer/footer";
import { Header } from "./component/header/header";
import { Main0 } from "./component/main/Main0";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";
import { TvShowsPage } from "./Pages/TvShowsPage";
import { More } from "./Pages/More";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main0 />}/>
        <Route path="/tvshows" element={< TvShowsPage />}/>
        <Route path="/more/:id" element={< More />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
