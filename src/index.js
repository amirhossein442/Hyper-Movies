import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "swiper/css/pagination";
import "swiper/css";
import { FavoriteMovieContextProvider } from "./Context/FavoriteMovieContext";
import { LoginContextProvider } from "./Context/LoginContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <LoginContextProvider>
    <FavoriteMovieContextProvider>
      <App />
    </FavoriteMovieContextProvider>
  </LoginContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
