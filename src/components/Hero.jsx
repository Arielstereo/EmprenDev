import "animate.css";
import { Typewriter } from "react-simple-typewriter";
import ModeButton from "./ModeButton";
import Logo from "./Logo";

const Hero = () => {
  return (
    <header className="flex justify-center h-full lg:flex-row mt-64 lg:mt-32 pb-40">
      <Logo />
      <ModeButton />
      <div className="flex flex-col md:mt-12 gap-2 text-center mx-auto">
        <div className="flex justify-center items-center ml-0 lg:ml-32 animate__animated animate__bounceInLeft animate__slow">
          <h1 className="text-6xl md:text-8xl text-slate-800 dark:text-slate-100 ">
            EmprenDev
          </h1>
          <img
            className="hidden lg:flex h-48 w-48"
            src="./logo_png.webp"
            alt="logo EmprenDev"
          />
        </div>
        <h2 className="text-xl md:text-3xl text-slate-600 dark:text-slate-300 animate__animated animate__fadeInUp animate__slower">
          Impulsa tu negocio con soluciones digitales para:
          <br />
          <span className="text-xl md:text-2xl text-blue-600 font-bold dark:text-blue-300 animate__animated animate__fadeInUp animate__slower">
            <Typewriter
              words={[
                "Emprendedores",
                "Pymes",
                "Negocios",
                "Tu próximo proyecto!",
              ]}
              loop={10}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h2>
        <div className="w-full mx-auto mt-8">
          <a
            className="inline-block rounded-lg bg-gray-800 dark:bg-gray-100 px-8 py-3 text-center text-sm font-semibold text-gray-100 dark:text-gray-800 outline-none ring-blue-300 transition-transform duration-200 hover:bg-transparent hover:border-black hover:text-black hover:scale-110 hover:dark:bg-transparent dark:hover:border-white border-2 dark:hover:text-white focus-visible:ring md:text-base"
            role="button"
            href="/home"
            aria-label="Ir a la sección de precios y comenzar tu sitio web"
          >
            ¡Quiero mi web!
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
