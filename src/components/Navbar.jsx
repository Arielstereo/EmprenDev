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
          className="flex flex-row mx-0 items-center mt-1 focus-visible:outline-blue-500"
          aria-label="Ir al inicio de EmprenDev"
        >
          <img
            src="./logo_png.webp"
            className="w-16 h-16 rounded-full"
            alt="logo EmprenDev"
          />
          <span className="text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-300 text-lg font-semibold">
            EmprenDev
          </span>
        </a>
        <ul className="flex items-center gap-16">
          <li className="font-semibold text-xl">
            <a
              className="text-slate-950 dark:text-white text-base hover:text-blue-600 dark:hover:text-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500"
              href="#features"
              aria-label="Ir a la sección de preguntas frecuentes"
            >
              Faq
            </a>
          </li>
          <li className="font-semibold text-xl">
            <a
              className="text-slate-950 dark:text-white text-base hover:text-blue-600 dark:hover:text-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500"
              href="#price"
              aria-label="Ir a la sección de precios"
            >
              Precios
            </a>
          </li>
          <li className="font-semibold text-xl">
            <a
              className="text-slate-950 dark:text-white text-base hover:text-blue-600 dark:hover:text-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500"
              href="#menu"
              aria-label="Ir a la sección de eventos"
            >
              Menu digital
            </a>
          </li>
          <li className="font-semibold text-xl">
            <a
              className="text-slate-950 dark:text-white text-base hover:text-blue-600 dark:hover:text-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500"
              href="#web"
              aria-label="Ir a la sección de emprendedores"
            >
              Emprendedores
            </a>
          </li>
          <li className="font-semibold text-xl">
            <a
              className="text-slate-950 dark:text-white text-base hover:text-blue-600 dark:hover:text-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500"
              href="#contact"
              aria-label="Ir a la sección de contacto"
            >
              Contacto
            </a>
          </li>
          <li>
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
                  className="icon-[line-md--moon-filled-loop] text-3xl text-slate-500 mt-2"
                  role="img"
                  aria-hidden="true"
                ></span>
              )}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
