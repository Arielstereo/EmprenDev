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
    <button
      onClick={toggleTheme}
      aria-label={
        isDarkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"
      }
      className="w-10 h-10 flex items-center justify-center rounded-full text-txt-secondary hover:text-accent dark:hover:text-accent-hover hover:bg-accent-subtle focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors"
    >
      {isDarkMode ? (
        <span
          className="icon-[line-md--sun-rising-filled-loop] text-2xl"
          role="img"
          aria-hidden="true"
        ></span>
      ) : (
        <span
          className="icon-[line-md--moon-filled-loop] text-2xl"
          role="img"
          aria-hidden="true"
        ></span>
      )}
    </button>
  );
};

export default ModeButton;
