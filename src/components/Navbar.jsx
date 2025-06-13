import Logo from "./Logo";
import ModeButton from "./ModeButton";

const Navbar = () => {
  return (
    <nav className="py-6 w-full bg-transparent">
      <div className="flex gap-4 justify-center items-center">
        <Logo />
        <ul className="hidden md:flex items-center justify-center gap-16 pt-7">
          <li className="text-xl">
            <a
              className="text-slate-950 dark:text-white text-base hover:text-blue-600 dark:hover:text-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500"
              href="#features"
              aria-label="Ir a la sección de preguntas frecuentes"
            >
              Faq
            </a>
          </li>
          <li className="text-xl">
            <a
              className="text-slate-950 dark:text-white text-base hover:text-blue-600 dark:hover:text-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500"
              href="#price"
              aria-label="Ir a la sección de precios"
            >
              Precios
            </a>
          </li>
          <li className="text-xl">
            <a
              className="text-slate-950 dark:text-white text-base hover:text-blue-600 dark:hover:text-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500"
              href="#projects"
              aria-label="Ir a la sección de eventos"
            >
              Proyectos
            </a>
          </li>
          <li className="text-xl">
            <a
              className="text-slate-950 dark:text-white text-base hover:text-blue-600 dark:hover:text-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500"
              href="#contact"
              aria-label="Ir a la sección de contacto"
            >
              Contacto
            </a>
          </li>
        </ul>
        <div>
          <ModeButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
