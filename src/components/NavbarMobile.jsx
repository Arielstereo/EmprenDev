import { useState, useEffect } from "react";
import Logo from "./Logo";

export default function NavbarMobile() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", open);
    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);

  return (
    <nav
      className={`w-full fixed top-0 left-0 right-0 z-50 md:hidden transition-[background-color,border-color] duration-300 ${
        scrolled
          ? "glass-nav shadow-lg shadow-black/20"
          : "border-b border-transparent"
      }`}
    >
      <div className="max-w-screen-2xl mx-auto px-4 flex items-center justify-between h-20">
        <Logo />

        <div className="relative z-50">
          <button
            onClick={() => setOpen((s) => !s)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="p-2 rounded-lg text-txt-primary bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors"
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

      <div
        id="mobile-menu"
        className={`absolute top-full left-0 right-0 z-40 origin-top transform transition-all duration-300 ease-in-out ${
          open
            ? "scale-y-100 opacity-100 pointer-events-auto"
            : "scale-y-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-black px-4 py-4 shadow-xl">
          <ul className="flex flex-col gap-1">
            <li>
              <a
                onClick={() => setOpen(false)}
                className="block text-txt-primary dark:text-white text-base py-2 px-3 rounded-lg hover:bg-accent-subtle hover:text-accent transition-colors"
                href="#features"
              >
                Faq
              </a>
            </li>
            <li>
              <a
                onClick={() => setOpen(false)}
                className="block text-txt-primary dark:text-white text-base py-2 px-3 rounded-lg hover:bg-accent-subtle hover:text-accent transition-colors"
                href="#services"
              >
                Servicios
              </a>
            </li>
            <li>
              <a
                onClick={() => setOpen(false)}
                className="block text-txt-primary dark:text-white text-base py-2 px-3 rounded-lg hover:bg-accent-subtle hover:text-accent transition-colors"
                href="#projects"
              >
                Proyectos
              </a>
            </li>
            <li className="mt-2">
              <a
                onClick={() => setOpen(false)}
                className="block text-white bg-transparent border border-accent hover:bg-accent hover:text-white py-2.5 px-3 rounded-lg text-center font-semibold transition-colors"
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
