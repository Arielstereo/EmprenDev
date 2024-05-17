import { useState } from "react";
import "animate.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="py-4 px-16 lg:hover:py-8 fixed top-0 z-50 w-full bg-white shadow-sm shadow-slate-800">
      <div className={`flex gap-4 lg:justify-between lg:px-8 ${!isOpen ? "flex-row" : "flex-col"}`}>
        <button onClick={toggleMenu} className="lg:hidden block">
          {!isOpen ? (
            <svg
              className={`h-6 w-6 transform ${isOpen ? 'rotate-90' : 'rotate-0'} transition-transform duration-300`}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          ) : (
            <svg
              className={`h-6 w-6 transform mt-4 ${isOpen ? 'rotate-90' : 'rotate-0'} transition-transform duration-300`}
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
        <a href="#" className={`flex flex-row-reverse lg:flex-row gap-2 mx-auto lg:mx-0 py-2 mt-2 ${!isOpen ? "block" : "hidden"}`}>
          <img src="/logo.png" alt="logo" className="w-8 h-8 md:w-10 md:h-10" />
          <span className="text-black md:pt-2 text-lg"> EmprenDev</span>
        </a>
        <ul
          className={`flex flex-col items-center lg:flex lg:flex-row py-4 gap-4 md:gap-16 " ${
            isOpen ? "h-full animate__animated animate__slideInDown animate__slower" : "hidden"
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
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
