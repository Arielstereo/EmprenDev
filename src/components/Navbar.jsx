import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav class="py-4 px-16 lg:hover:py-8 fixed top-0 z-50 w-full bg-white shadow-sm shadow-slate-300 transition-all">
      <div class={`flex gap-4 lg:justify-between lg:px-8 ${!isOpen ? "flex-row" : "flex-col"}`}>
        <button onClick={toggleMenu} className="lg:hidden block">
          {!isOpen ? (
            <svg
              className="fill-current text-black"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          ) : (
            <svg
              className="mt-2"
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
        <a href="#" class={`flex gap-2 mx-auto lg:mx-0 py-2 ${!isOpen ? "block" : "hidden"}`}>
          <svg
            className="w-9 h-9 mt-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
          >
            <path
              fill="#000"
              d="M71.68 97.22L34.74 128l36.94 30.78a12 12 0 1 1-15.36 18.44l-48-40a12 12 0 0 1 0-18.44l48-40a12 12 0 0 1 15.36 18.44m176 21.56l-48-40a12 12 0 1 0-15.36 18.44L221.26 128l-36.94 30.78a12 12 0 1 0 15.36 18.44l48-40a12 12 0 0 0 0-18.44M164.1 28.72a12 12 0 0 0-15.38 7.18l-64 176a12 12 0 0 0 7.18 15.37a11.79 11.79 0 0 0 4.1.73a12 12 0 0 0 11.28-7.9l64-176a12 12 0 0 0-7.18-15.38"
            ></path>
          </svg>
          <span class="text-black pt-3 text-lg"> EmprenDev</span>
        </a>
        <ul
          className={`flex flex-col items-center lg:flex lg:flex-row py-4 gap-4 md:gap-16" ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          <li class="font-semibold text-xl">
            <a
              class="lg:hidden text-slate-950 text-base hover:text-sky-400"
              href="#"
            >
              Inicio
            </a>
          </li>
          <li class="font-semibold text-xl">
            <a
              class="text-slate-950 text-base hover:text-sky-400"
              href="#features"
            >
              Beneficios
            </a>
          </li>
          <li class="font-semibold text-xl">
            <a
              class="text-slate-950 text-base hover:text-sky-400"
              href="#price"
            >
              Precios
            </a>
          </li>
          <li class="font-semibold text-xl">
            <a
              class="text-slate-950 text-base hover:text-sky-400"
              href="#landing"
            >
              Landing
            </a>
          </li>
          <li class="font-semibold text-xl">
            <a
              class="text-slate-950 text-base hover:text-sky-400"
              href="#website"
            >
              Website
            </a>
          </li>
          <li class="font-semibold text-xl">
            <a
              class="text-slate-950 text-base hover:text-sky-400"
              href="#contact"
            >
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
