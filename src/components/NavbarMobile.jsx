import { useState, useEffect } from "react";
import Logo from "./Logo";
import ModeButton from "./ModeButton";

export default function NavbarMobile() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", open);
    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);

  return (
    <nav className="py-5 w-full fixed top-0 left-0 right-0 z-50 md:hidden bg-white/95 dark:bg-[#1a212d] backdrop-blur-sm">
      <div className="max-w-screen-2xl mx-auto px-4 flex items-center justify-between">
        {/* Logo a la izquierda */}
        <div className="flex items-center pb-20">
          <a href="/" aria-label="Inicio">
            <Logo />
          </a>
        </div>

        {/* Hamburger a la derecha */}
        <div className="flex items-center">
          <button
            onClick={() => setOpen((s) => !s)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="p-3 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 text-slate-900 dark:text-white"
          >
            <span
              className={`block w-6 h-0.5 bg-current transform transition duration-300 ${
                open ? "rotate-45 translate-y-1.5" : "-translate-y-1.5"
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-current my-1 transition-opacity duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-current transform transition duration-300 ${
                open ? "-rotate-45 -translate-y-1.5" : "translate-y-1.5"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Panel absoluto para que no afecte el flujo cuando está cerrado */}
      <div
        id="mobile-menu"
        className={`absolute top-full left-0 right-0 z-40 origin-top transform transition-all duration-300 ease-in-out ${
          open
            ? "scale-y-100 opacity-100 pointer-events-auto"
            : "scale-y-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-white dark:bg-[#1a212d] px-4 py-4 shadow-md">
          {/* ModeButton dentro del panel */}
          <div className="flex justify-end mb-3">
            <ModeButton />
          </div>

          <ul className="flex flex-col gap-3">
            <li>
              <a
                onClick={() => setOpen(false)}
                className="block text-slate-900 dark:text-white text-base py-2 px-3 rounded hover:bg-gray-100 dark:hover:bg-zinc-800"
                href="#features"
              >
                Faq
              </a>
            </li>
            <li>
              <a
                onClick={() => setOpen(false)}
                className="block text-slate-900 dark:text-white text-base py-2 px-3 rounded hover:bg-gray-100 dark:hover:bg-zinc-800"
                href="#services"
              >
                Servicios
              </a>
            </li>
            <li>
              <a
                onClick={() => setOpen(false)}
                className="block text-slate-900 dark:text-white text-base py-2 px-3 rounded hover:bg-gray-100 dark:hover:bg-zinc-800"
                href="#projects"
              >
                Proyectos
              </a>
            </li>
            <li>
              <a
                onClick={() => setOpen(false)}
                className="block text-white bg-blue-500 hover:bg-blue-600 py-2 px-3 rounded-2xl text-center"
                href="#contact"
              >
                Consulta ahora
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
