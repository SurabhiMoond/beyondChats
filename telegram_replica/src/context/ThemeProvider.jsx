import { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [animating, setAnimating] = useState(false);

  const toggleTheme = () => {
    setAnimating(true);
    setTimeout(() => {
      setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
      setAnimating(false);
    }, 1000);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, animating }}>
      {children}
    </ThemeContext.Provider>
  );
};
