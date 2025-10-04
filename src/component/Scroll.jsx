import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
    const {pathname} = useLocation();
  useEffect(() => {
    if("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
};
