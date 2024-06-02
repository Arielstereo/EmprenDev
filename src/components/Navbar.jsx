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
    <nav className="py-6 px-16 lg:hover:py-8 fixed top-0 z-50 w-full bg-slate-50 dark:bg-gradient-to-r dark:bg-slate-950 dark:to-slate-800 shadow-sm shadow-slate-800 dark:shadow-slate-600">
      <div
        className={`flex gap-4 lg:justify-between lg:px-8 ${
          !isOpen ? "flex-row" : "flex-col"
        }`}
      >
        <button onClick={toggleMenu} className="lg:hidden block">
          {!isOpen ? (
            <svg
              className={`h-8 w-8 text-gray-800 dark:text-gray-200 transform ${
                isOpen ? "rotate-90" : "rotate-0"
              } transition-transform duration-300`}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          ) : (
            <svg
              className={`h-7 w-7 text-gray-800 dark:text-gray-200 transform ${
                isOpen ? "rotate-90" : "rotate-0"
              } transition-transform duration-300`}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <g fill="none" fill-rule="evenodd">
                <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                <path
                  fill="currentColor"
                  d="m12 14.122l5.303 5.303a1.5 1.5 0 0 0 2.122-2.122L14.12 12l5.304-5.303a1.5 1.5 0 1 0-2.122-2.121L12 9.879L6.697 4.576a1.5 1.5 0 1 0-2.122 2.12L9.88 12l-5.304 5.304a1.5 1.5 0 1 0 2.122 2.12z"
                />
              </g>
            </svg>
          )}
        </button>
        <a
          href="#"
          className={`flex flex-row gap-2 mx-auto items-center lg:mx-0 mt-2 ${
            !isOpen ? "block" : "hidden"
          }`}
        >
          <img className="hidden lg:block lg:w-12 lg:h-12" src="/logo2.png" alt="logo" />
          <span className="text-black dark:text-white text-lg font-black">
            EmprenDev
          </span>
        </a>
        <button
          onClick={toggleTheme}
          className={`pt-2 block lg:hidden ${isOpen ? "hidden" : "block"}`}
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="#eab308"
                stroke-dasharray="4"
                stroke-dashoffset="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M13 4h1.5M13 4h-1.5M13 4v1.5M13 4v-1.5">
                  <animate
                    id="IconifyId18facebe9ca95ff7611"
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="0.7s;IconifyId18facebe9ca95ff7611.begin+6s"
                    dur="0.4s"
                    values="4;0"
                  />
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="IconifyId18facebe9ca95ff7611.begin+2s;IconifyId18facebe9ca95ff7611.begin+4s"
                    dur="0.4s"
                    values="4;0"
                  />
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="IconifyId18facebe9ca95ff7611.begin+1.2s;IconifyId18facebe9ca95ff7611.begin+3.2s;IconifyId18facebe9ca95ff7611.begin+5.2s"
                    dur="0.4s"
                    values="0;4"
                  />
                  <set
                    attributeName="d"
                    begin="IconifyId18facebe9ca95ff7611.begin+1.8s"
                    to="M12 5h1.5M12 5h-1.5M12 5v1.5M12 5v-1.5"
                  />
                  <set
                    attributeName="d"
                    begin="IconifyId18facebe9ca95ff7611.begin+3.8s"
                    to="M12 4h1.5M12 4h-1.5M12 4v1.5M12 4v-1.5"
                  />
                  <set
                    attributeName="d"
                    begin="IconifyId18facebe9ca95ff7611.begin+5.8s"
                    to="M13 4h1.5M13 4h-1.5M13 4v1.5M13 4v-1.5"
                  />
                </path>
                <path d="M19 11h1.5M19 11h-1.5M19 11v1.5M19 11v-1.5">
                  <animate
                    id="IconifyId18facebe9ca95ff7612"
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="1.1s;IconifyId18facebe9ca95ff7612.begin+6s"
                    dur="0.4s"
                    values="4;0"
                  />
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="IconifyId18facebe9ca95ff7612.begin+2s;IconifyId18facebe9ca95ff7612.begin+4s"
                    dur="0.4s"
                    values="4;0"
                  />
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="IconifyId18facebe9ca95ff7612.begin+1.2s;IconifyId18facebe9ca95ff7612.begin+3.2s;IconifyId18facebe9ca95ff7612.begin+5.2s"
                    dur="0.4s"
                    values="0;4"
                  />
                  <set
                    attributeName="d"
                    begin="IconifyId18facebe9ca95ff7612.begin+1.8s"
                    to="M17 11h1.5M17 11h-1.5M17 11v1.5M17 11v-1.5"
                  />
                  <set
                    attributeName="d"
                    begin="IconifyId18facebe9ca95ff7612.begin+3.8s"
                    to="M18 12h1.5M18 12h-1.5M18 12v1.5M18 12v-1.5"
                  />
                  <set
                    attributeName="d"
                    begin="IconifyId18facebe9ca95ff7612.begin+5.8s"
                    to="M19 11h1.5M19 11h-1.5M19 11v1.5M19 11v-1.5"
                  />
                </path>
                <path d="M19 4h1.5M19 4h-1.5M19 4v1.5M19 4v-1.5">
                  <animate
                    id="IconifyId18facebe9ca95ff7613"
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="2.9s;IconifyId18facebe9ca95ff7613.begin+6s"
                    dur="0.4s"
                    values="4;0"
                  />
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="IconifyId18facebe9ca95ff7613.begin+2s"
                    dur="0.4s"
                    values="4;0"
                  />
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="IconifyId18facebe9ca95ff7613.begin+1.2s;IconifyId18facebe9ca95ff7613.begin+3.2s"
                    dur="0.4s"
                    values="0;4"
                  />
                  <set
                    attributeName="d"
                    begin="IconifyId18facebe9ca95ff7613.begin+1.8s"
                    to="M20 5h1.5M20 5h-1.5M20 5v1.5M20 5v-1.5"
                  />
                  <set
                    attributeName="d"
                    begin="IconifyId18facebe9ca95ff7613.begin+5.8s"
                    to="M19 4h1.5M19 4h-1.5M19 4v1.5M19 4v-1.5"
                  />
                </path>
              </g>
              <g
                fill-opacity="0"
                stroke="#eab308"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <path
                  fill="#eab308"
                  stroke-dasharray="56"
                  stroke-dashoffset="56"
                  d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    dur="0.6s"
                    values="56;0"
                  />
                  <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="1.5s"
                    dur="0.5s"
                    values="0;1"
                  />
                </path>
              </g>
            </svg>
          )}
        </button>
        <ul
          className={`flex flex-col items-center lg:flex lg:flex-row py-4 gap-4 md:gap-16 " ${
            isOpen
              ? "h-full animate__animated animate__slideInDown animate__slower"
              : "hidden"
          }`}
        >
          <li className="font-semibold text-xl">
            <a
              className="lg:hidden text-slate-950 dark:text-white text-base hover:text-blue-800 dark:hover:text-yellow-100"
              href="#"
            >
              Inicio
            </a>
          </li>
          <li className="font-semibold text-xl">
            <a
              className="text-slate-950 dark:text-white text-base hover:text-blue-800 dark:hover:text-yellow-100"
              href="#features"
            >
              Beneficios
            </a>
          </li>
          <li className="font-semibold text-xl">
            <a
              className="text-slate-950 dark:text-white text-base hover:text-blue-800 dark:hover:text-yellow-100"
              href="#price"
            >
              Precios
            </a>
          </li>
          <li className="font-semibold text-xl">
            <a
              className="text-slate-950 dark:text-white text-base hover:text-blue-800 dark:hover:text-yellow-100"
              href="#landing"
            >
              Landing
            </a>
          </li>
          <li className="font-semibold text-xl">
            <a
              className="text-slate-950 dark:text-white text-base hover:text-blue-800 dark:hover:text-yellow-100"
              href="#website"
            >
              Website
            </a>
          </li>
          <li className="font-semibold text-xl">
            <a
              className="text-slate-950 dark:text-white text-base hover:text-blue-800 dark:hover:text-yellow-100"
              href="#contact"
            >
              Contacto
            </a>
          </li>
          <li>
            <button
              onClick={toggleTheme}
              className={`hidden lg:block ${isOpen ? "hidden" : "block"}`}
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="#eab308"
                    stroke-dasharray="4"
                    stroke-dashoffset="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M13 4h1.5M13 4h-1.5M13 4v1.5M13 4v-1.5">
                      <animate
                        id="IconifyId18facebe9ca95ff7611"
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="0.7s;IconifyId18facebe9ca95ff7611.begin+6s"
                        dur="0.4s"
                        values="4;0"
                      />
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="IconifyId18facebe9ca95ff7611.begin+2s;IconifyId18facebe9ca95ff7611.begin+4s"
                        dur="0.4s"
                        values="4;0"
                      />
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="IconifyId18facebe9ca95ff7611.begin+1.2s;IconifyId18facebe9ca95ff7611.begin+3.2s;IconifyId18facebe9ca95ff7611.begin+5.2s"
                        dur="0.4s"
                        values="0;4"
                      />
                      <set
                        attributeName="d"
                        begin="IconifyId18facebe9ca95ff7611.begin+1.8s"
                        to="M12 5h1.5M12 5h-1.5M12 5v1.5M12 5v-1.5"
                      />
                      <set
                        attributeName="d"
                        begin="IconifyId18facebe9ca95ff7611.begin+3.8s"
                        to="M12 4h1.5M12 4h-1.5M12 4v1.5M12 4v-1.5"
                      />
                      <set
                        attributeName="d"
                        begin="IconifyId18facebe9ca95ff7611.begin+5.8s"
                        to="M13 4h1.5M13 4h-1.5M13 4v1.5M13 4v-1.5"
                      />
                    </path>
                    <path d="M19 11h1.5M19 11h-1.5M19 11v1.5M19 11v-1.5">
                      <animate
                        id="IconifyId18facebe9ca95ff7612"
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="1.1s;IconifyId18facebe9ca95ff7612.begin+6s"
                        dur="0.4s"
                        values="4;0"
                      />
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="IconifyId18facebe9ca95ff7612.begin+2s;IconifyId18facebe9ca95ff7612.begin+4s"
                        dur="0.4s"
                        values="4;0"
                      />
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="IconifyId18facebe9ca95ff7612.begin+1.2s;IconifyId18facebe9ca95ff7612.begin+3.2s;IconifyId18facebe9ca95ff7612.begin+5.2s"
                        dur="0.4s"
                        values="0;4"
                      />
                      <set
                        attributeName="d"
                        begin="IconifyId18facebe9ca95ff7612.begin+1.8s"
                        to="M17 11h1.5M17 11h-1.5M17 11v1.5M17 11v-1.5"
                      />
                      <set
                        attributeName="d"
                        begin="IconifyId18facebe9ca95ff7612.begin+3.8s"
                        to="M18 12h1.5M18 12h-1.5M18 12v1.5M18 12v-1.5"
                      />
                      <set
                        attributeName="d"
                        begin="IconifyId18facebe9ca95ff7612.begin+5.8s"
                        to="M19 11h1.5M19 11h-1.5M19 11v1.5M19 11v-1.5"
                      />
                    </path>
                    <path d="M19 4h1.5M19 4h-1.5M19 4v1.5M19 4v-1.5">
                      <animate
                        id="IconifyId18facebe9ca95ff7613"
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="2.9s;IconifyId18facebe9ca95ff7613.begin+6s"
                        dur="0.4s"
                        values="4;0"
                      />
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="IconifyId18facebe9ca95ff7613.begin+2s"
                        dur="0.4s"
                        values="4;0"
                      />
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="IconifyId18facebe9ca95ff7613.begin+1.2s;IconifyId18facebe9ca95ff7613.begin+3.2s"
                        dur="0.4s"
                        values="0;4"
                      />
                      <set
                        attributeName="d"
                        begin="IconifyId18facebe9ca95ff7613.begin+1.8s"
                        to="M20 5h1.5M20 5h-1.5M20 5v1.5M20 5v-1.5"
                      />
                      <set
                        attributeName="d"
                        begin="IconifyId18facebe9ca95ff7613.begin+5.8s"
                        to="M19 4h1.5M19 4h-1.5M19 4v1.5M19 4v-1.5"
                      />
                    </path>
                  </g>
                  <g
                    fill-opacity="0"
                    stroke="#eab308"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  >
                    <path
                      fill="#eab308"
                      stroke-dasharray="56"
                      stroke-dashoffset="56"
                      d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
                    >
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        dur="0.6s"
                        values="56;0"
                      />
                      <animate
                        fill="freeze"
                        attributeName="fill-opacity"
                        begin="1.5s"
                        dur="0.5s"
                        values="0;1"
                      />
                    </path>
                  </g>
                </svg>
              )}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
