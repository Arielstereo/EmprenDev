import { useEffect, useState } from "react";

const ModeButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (
      storedTheme === "dark" ||
      (!storedTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };
  return (
    <div className="absolute right-10 md:right-32 top-11">
      <button
        onClick={toggleTheme}
        aria-label={
          isDarkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"
        }
        className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500"
      >
        {isDarkMode ? (
          <span
            className="icon-[line-md--sun-rising-filled-loop] text-3xl text-slate-100 mt-2"
            role="img"
            aria-hidden="true"
          ></span>
        ) : (
          <span
            className="icon-[line-md--moon-filled-loop] text-3xl text-slate-900 mt-2"
            role="img"
            aria-hidden="true"
          ></span>
        )}
      </button>
    </div>
  );
};

export default ModeButton;
