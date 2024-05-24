import { useEffect, useState } from "react";
import "animate.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
    <nav className="py-4 px-16 lg:hover:py-8 fixed top-0 z-50 w-full bg-white shadow-sm shadow-slate-800 dark:shadow-slate-50">
      <div
        className={`flex gap-4 lg:justify-between lg:px-8 ${
          !isOpen ? "flex-row" : "flex-col"
        }`}
      >
        <button onClick={toggleMenu} className="lg:hidden block">
          {!isOpen ? (
            <svg
              className={`h-6 w-6 transform ${
                isOpen ? "rotate-90" : "rotate-0"
              } transition-transform duration-300`}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          ) : (
            <svg
              className={`h-6 w-6 transform mt-4 ${
                isOpen ? "rotate-90" : "rotate-0"
              } transition-transform duration-300`}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#000"
                stroke-linecap="round"
                stroke-width="2"
                d="M20 20L4 4m16 0L4 20"
              />
            </svg>
          )}
        </button>
        <a
          href="#"
          className={`flex flex-row-reverse lg:flex-row gap-2 mx-auto lg:mx-0 py-2 mt-2 ${
            !isOpen ? "block" : "hidden"
          }`}
        >
          <img src="/logo.png" alt="logo" className="w-8 h-8 md:w-10 md:h-10" />
          <span className="text-black md:pt-2 text-lg"> EmprenDev</span>
        </a>
        <ul
          className={`flex flex-col items-center lg:flex lg:flex-row py-4 gap-4 md:gap-16 " ${
            isOpen
              ? "h-full animate__animated animate__slideInDown animate__slower"
              : "hidden"
          }`}
        >
          <li className="font-semibold text-xl">
            <a
              className="lg:hidden text-slate-950 text-base hover:text-blue-800"
              href="#"
            >
              Inicio
            </a>
          </li>
          <li className="font-semibold text-xl">
            <a
              className="text-slate-950 text-base hover:text-blue-800"
              href="#features"
            >
              Beneficios
            </a>
          </li>
          <li className="font-semibold text-xl">
            <a
              className="text-slate-950 text-base hover:text-blue-800"
              href="#price"
            >
              Precios
            </a>
          </li>
          <li className="font-semibold text-xl">
            <a
              className="text-slate-950 text-base hover:text-blue-800"
              href="#landing"
            >
              Landing
            </a>
          </li>
          <li className="font-semibold text-xl">
            <a
              className="text-slate-950 text-base hover:text-blue-800"
              href="#website"
            >
              Website
            </a>
          </li>
          <li className="font-semibold text-xl">
            <a
              className="text-slate-950 text-base hover:text-blue-800"
              href="#contact"
            >
              Contacto
            </a>
          </li>
          <li>
            <button
              onClick={toggleTheme}
              className="pt-2"
            >
              {isDarkMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="#eab308"
                    stroke-dasharray="2"
                    stroke-dashoffset="2"
                    stroke-linecap="round"
                    stroke-width="2"
                  >
                    <path d="M0 0">
                      <animate
                        fill="freeze"
                        attributeName="d"
                        begin="0.6s"
                        dur="0.2s"
                        values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
                      />
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="0.6s"
                        dur="0.2s"
                        values="2;0"
                      />
                    </path>
                    <path d="M0 0">
                      <animate
                        fill="freeze"
                        attributeName="d"
                        begin="0.9s"
                        dur="0.2s"
                        values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
                      />
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="0.9s"
                        dur="1.2s"
                        values="2;0"
                      />
                    </path>
                    <animateTransform
                      attributeName="transform"
                      dur="30s"
                      repeatCount="indefinite"
                      type="rotate"
                      values="0 12 12;360 12 12"
                    />
                  </g>
                  <mask id="IconifyId18facebe9ca95ff769">
                    <circle cx="12" cy="12" r="12" fill="#fff" />
                    <circle cx="18" cy="6" r="12" fill="#fff">
                      <animate
                        fill="freeze"
                        attributeName="cx"
                        dur="0.4s"
                        values="18;22"
                      />
                      <animate
                        fill="freeze"
                        attributeName="cy"
                        dur="0.4s"
                        values="6;2"
                      />
                      <animate
                        fill="freeze"
                        attributeName="r"
                        dur="0.4s"
                        values="12;3"
                      />
                    </circle>
                    <circle cx="18" cy="6" r="10">
                      <animate
                        fill="freeze"
                        attributeName="cx"
                        dur="0.4s"
                        values="18;22"
                      />
                      <animate
                        fill="freeze"
                        attributeName="cy"
                        dur="0.4s"
                        values="6;2"
                      />
                      <animate
                        fill="freeze"
                        attributeName="r"
                        dur="0.4s"
                        values="10;1"
                      />
                    </circle>
                  </mask>
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    fill="#eab308"
                    mask="url(#IconifyId18facebe9ca95ff769)"
                  >
                    <animate
                      fill="freeze"
                      attributeName="r"
                      dur="0.4s"
                      values="10;6"
                    />
                  </circle>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" stroke="#eab308" stroke-dasharray="4" stroke-dashoffset="4" stroke-linecap="round" stroke-linejoin="round"><path d="M13 4h1.5M13 4h-1.5M13 4v1.5M13 4v-1.5"><animate id="IconifyId18facebe9ca95ff7611" fill="freeze" attributeName="stroke-dashoffset" begin="0.7s;IconifyId18facebe9ca95ff7611.begin+6s" dur="0.4s" values="4;0"/><animate fill="freeze" attributeName="stroke-dashoffset" begin="IconifyId18facebe9ca95ff7611.begin+2s;IconifyId18facebe9ca95ff7611.begin+4s" dur="0.4s" values="4;0"/><animate fill="freeze" attributeName="stroke-dashoffset" begin="IconifyId18facebe9ca95ff7611.begin+1.2s;IconifyId18facebe9ca95ff7611.begin+3.2s;IconifyId18facebe9ca95ff7611.begin+5.2s" dur="0.4s" values="0;4"/><set attributeName="d" begin="IconifyId18facebe9ca95ff7611.begin+1.8s" to="M12 5h1.5M12 5h-1.5M12 5v1.5M12 5v-1.5"/><set attributeName="d" begin="IconifyId18facebe9ca95ff7611.begin+3.8s" to="M12 4h1.5M12 4h-1.5M12 4v1.5M12 4v-1.5"/><set attributeName="d" begin="IconifyId18facebe9ca95ff7611.begin+5.8s" to="M13 4h1.5M13 4h-1.5M13 4v1.5M13 4v-1.5"/></path><path d="M19 11h1.5M19 11h-1.5M19 11v1.5M19 11v-1.5"><animate id="IconifyId18facebe9ca95ff7612" fill="freeze" attributeName="stroke-dashoffset" begin="1.1s;IconifyId18facebe9ca95ff7612.begin+6s" dur="0.4s" values="4;0"/><animate fill="freeze" attributeName="stroke-dashoffset" begin="IconifyId18facebe9ca95ff7612.begin+2s;IconifyId18facebe9ca95ff7612.begin+4s" dur="0.4s" values="4;0"/><animate fill="freeze" attributeName="stroke-dashoffset" begin="IconifyId18facebe9ca95ff7612.begin+1.2s;IconifyId18facebe9ca95ff7612.begin+3.2s;IconifyId18facebe9ca95ff7612.begin+5.2s" dur="0.4s" values="0;4"/><set attributeName="d" begin="IconifyId18facebe9ca95ff7612.begin+1.8s" to="M17 11h1.5M17 11h-1.5M17 11v1.5M17 11v-1.5"/><set attributeName="d" begin="IconifyId18facebe9ca95ff7612.begin+3.8s" to="M18 12h1.5M18 12h-1.5M18 12v1.5M18 12v-1.5"/><set attributeName="d" begin="IconifyId18facebe9ca95ff7612.begin+5.8s" to="M19 11h1.5M19 11h-1.5M19 11v1.5M19 11v-1.5"/></path><path d="M19 4h1.5M19 4h-1.5M19 4v1.5M19 4v-1.5"><animate id="IconifyId18facebe9ca95ff7613" fill="freeze" attributeName="stroke-dashoffset" begin="2.9s;IconifyId18facebe9ca95ff7613.begin+6s" dur="0.4s" values="4;0"/><animate fill="freeze" attributeName="stroke-dashoffset" begin="IconifyId18facebe9ca95ff7613.begin+2s" dur="0.4s" values="4;0"/><animate fill="freeze" attributeName="stroke-dashoffset" begin="IconifyId18facebe9ca95ff7613.begin+1.2s;IconifyId18facebe9ca95ff7613.begin+3.2s" dur="0.4s" values="0;4"/><set attributeName="d" begin="IconifyId18facebe9ca95ff7613.begin+1.8s" to="M20 5h1.5M20 5h-1.5M20 5v1.5M20 5v-1.5"/><set attributeName="d" begin="IconifyId18facebe9ca95ff7613.begin+5.8s" to="M19 4h1.5M19 4h-1.5M19 4v1.5M19 4v-1.5"/></path></g><g fill-opacity="0" stroke="#eab308" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path fill="#eab308" stroke-dasharray="56" stroke-dashoffset="56" d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"/><animate fill="freeze" attributeName="fill-opacity" begin="1.5s" dur="0.5s" values="0;1"/></path></g></svg>
              )}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
