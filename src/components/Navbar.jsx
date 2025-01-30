import { useEffect, useState } from "react";
import "animate.css";

const Navbar = () => {
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
    <nav className="hidden lg:block py-6 px-16 top-0 w-full bg-transparent">
      <div className="flex gap-4 justify-between px-8">
        <a
          href="#"
          className="flex flex-row gap-2 mx-0 items-center mt-1"
        >
          <span className="icon-[fa-solid--code] text-2xl dark:text-white  hover:text-indigo-600 dark:hover:text-indigo-300  animate-pulse" role="img" aria-hidden="true"></span>
          <span className="text-black dark:text-white  hover:text-indigo-600 dark:hover:text-indigo-300 text-lg font-semibold">
            EmprenDev
          </span>
        </a>
        <ul className="flex items-center gap-16">
          <li className="font-semibold text-xl">
            <a
              className="text-slate-950 dark:text-white text-base hover:text-indigo-600 dark:hover:text-indigo-300"
              href="#features"
            >
              Faq
            </a>
          </li>
          <li className="font-semibold text-xl">
            <a
              className="text-slate-950 dark:text-white text-base hover:text-indigo-600 dark:hover:text-indigo-300"
              href="#price"
            >
              Precios
            </a>
          </li>
          <li className="font-semibold text-xl">
            <a
              className="text-slate-950 dark:text-white text-base hover:text-indigo-600 dark:hover:text-indigo-300"
              href="#events"
            >
              Eventos
            </a>
          </li>
          <li className="font-semibold text-xl">
            <a
              className="text-slate-950 dark:text-white text-base hover:text-indigo-600 dark:hover:text-indigo-300"
              href="#web"
            >
              Emprendedores
            </a>
          </li>
          <li className="font-semibold text-xl">
            <a
              className="text-slate-950 dark:text-white text-base hover:text-indigo-600 dark:hover:text-indigo-300"
              href="#contact"
            >
              Contacto
            </a>
          </li>
          <li>
            <button onClick={toggleTheme} aria-label="dark mode button">
              {isDarkMode ? (
                <span className="icon-[line-md--sun-rising-filled-loop] text-3xl text-slate-100 mt-2" role="img" aria-hidden="true"></span>
              ) : (
                <span className="icon-[line-md--moon-filled-loop] text-3xl text-slate-500 mt-2" role="img" aria-hidden="true"></span>
              )}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
