import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "neon"
  );

  const themes = {
    neon: "bg-linear-to-br from-indigo-600 via-purple-600 to-pink-500 text-white",
    dark: "bg-gray-900 text-white",
    light: "bg-gray-100 text-black"
  };

  //  Save theme in localStorage
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: changeTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
}
