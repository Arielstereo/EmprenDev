import Logo from "./Logo";
import ModeButton from "./ModeButton";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="py-3 sm:py-6 w-full fixed top-0 left-0 right-0 z-50 glass border-b border-border/40">
      <div className="flex gap-2 sm:gap-4 justify-between sm:justify-center items-center px-3 sm:px-4">
        <Logo />
        <ul className="hidden md:flex items-center justify-center gap-8 lg:gap-12 pt-2 sm:pt-7">
          <li className="text-base lg:text-lg">
            <a
              className="text-slate-950 dark:text-white hover:text-blue-600 dark:hover:text-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500 transition"
              href="#features"
              aria-label="Ir a la sección de preguntas frecuentes"
            >
              Faq
            </a>
          </li>
          <li className="text-base lg:text-lg">
            <a
              className="text-slate-950 dark:text-white hover:text-blue-600 dark:hover:text-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500 transition"
              href="#price"
              aria-label="Ir a la sección de precios"
            >
              Servicios
            </a>
          </li>
          <li className="text-base lg:text-lg">
            <a
              className="text-slate-950 dark:text-white hover:text-blue-600 dark:hover:text-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500 transition"
              href="#projects"
              aria-label="Ir a la sección de eventos"
            >
              Proyectos
            </a>
          </li>
          <li>
            <a
              className="text-white bg-blue-500 hover:bg-blue-600 p-2 sm:p-3 rounded-2xl text-sm lg:text-base focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500 transition"
              href="#contact"
              aria-label="Ir a la sección de contacto"
            >
              Consulta ahora
            </a>
          </li>
        </ul>

        <div className="flex md:hidden gap-2">
          <ModeButton />
          <button
            className="md:hidden p-2 text-slate-950 dark:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
          >
            <span
              className="icon-[mdi--menu] w-6 h-6"
              role="img"
              aria-hidden="true"
            ></span>
          </button>
        </div>

        <div className="hidden md:block">
          <ModeButton />
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-2 pb-3 px-3 border-t border-border/40">
          <ul className="flex flex-col gap-2">
            <li>
              <a
                className="block py-2 px-3 text-slate-950 dark:text-white hover:text-blue-600 dark:hover:text-blue-300 hover:bg-blue-500/10 rounded transition text-sm"
                href="#features"
                onClick={() => setMenuOpen(false)}
              >
                Faq
              </a>
            </li>
            <li>
              <a
                className="block py-2 px-3 text-slate-950 dark:text-white hover:text-blue-600 dark:hover:text-blue-300 hover:bg-blue-500/10 rounded transition text-sm"
                href="#price"
                onClick={() => setMenuOpen(false)}
              >
                Servicios
              </a>
            </li>
            <li>
              <a
                className="block py-2 px-3 text-slate-950 dark:text-white hover:text-blue-600 dark:hover:text-blue-300 hover:bg-blue-500/10 rounded transition text-sm"
                href="#projects"
                onClick={() => setMenuOpen(false)}
              >
                Proyectos
              </a>
            </li>
            <li>
              <a
                className="block py-2 px-3 text-white bg-blue-500 hover:bg-blue-600 rounded text-sm transition"
                href="#contact"
                onClick={() => setMenuOpen(false)}
              >
                Consulta ahora
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
