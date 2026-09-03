import Logo from "./Logo";
import ModeButton from "./ModeButton";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="py-3 sm:py-4 w-full fixed top-0 left-0 right-0 z-50 glass border-b border-border-default">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-10">
        <Logo />

        <ul className="hidden md:flex items-center justify-center gap-8 lg:gap-10">
          <li>
            <a
              className="text-sm lg:text-base font-medium text-txt-secondary hover:text-txt-primary dark:hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors"
              href="#features"
              aria-label="Ir a la sección de preguntas frecuentes"
            >
              Faq
            </a>
          </li>
          <li>
            <a
              className="text-sm lg:text-base font-medium text-txt-secondary hover:text-txt-primary dark:hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors"
              href="#services"
              aria-label="Ir a la sección de servicios"
            >
              Servicios
            </a>
          </li>
          <li>
            <a
              className="text-sm lg:text-base font-medium text-txt-secondary hover:text-txt-primary dark:hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors"
              href="#projects"
              aria-label="Ir a la sección de eventos"
            >
              Proyectos
            </a>
          </li>
          <li>
            <a
              className="inline-flex items-center rounded-lg bg-accent px-4 py-2.5 text-sm lg:text-base font-semibold text-white hover:bg-accent-hover shadow-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors"
              href="#contact"
              aria-label="Ir a la sección de contacto"
            >
              Consulta ahora
            </a>
          </li>
        </ul>

        <div className="hidden md:block">
          <ModeButton />
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-2 pb-3 px-4 border-t border-border-default">
          <ul className="flex flex-col gap-1 pt-3">
            <li>
              <a
                className="block py-2.5 px-3 rounded-lg text-txt-primary dark:text-white hover:bg-accent-subtle hover:text-accent transition-colors text-sm font-medium"
                href="#features"
                onClick={() => setMenuOpen(false)}
              >
                Faq
              </a>
            </li>
            <li>
              <a
                className="block py-2.5 px-3 rounded-lg text-txt-primary dark:text-white hover:bg-accent-subtle hover:text-accent transition-colors text-sm font-medium"
                href="#services"
                onClick={() => setMenuOpen(false)}
              >
                Servicios
              </a>
            </li>
            <li>
              <a
                className="block py-2.5 px-3 rounded-lg text-txt-primary dark:text-white hover:bg-accent-subtle hover:text-accent transition-colors text-sm font-medium"
                href="#projects"
                onClick={() => setMenuOpen(false)}
              >
                Proyectos
              </a>
            </li>
            <li className="mt-2">
              <a
                className="block py-2.5 px-3 text-center rounded-lg bg-accent hover:bg-accent-hover text-white font-semibold transition-colors"
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
