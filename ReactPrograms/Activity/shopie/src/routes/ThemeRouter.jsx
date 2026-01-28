import { useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeRouter() {
  const location = useLocation();
  const { setTheme } = useContext(ThemeContext);

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setTheme("neon");
        break;

      case "/products":
        setTheme("dark");
        break;

      case "/cart":
        setTheme("light");
        break;

      case "/contact":
        setTheme("neon");
        break;

      case "/login":
        setTheme("dark");
        break;

      case "/signup":
        setTheme("light");
        break;

      default:
        setTheme("neon");
    }
  }, [location.pathname]);

  return null; // no UI
}
