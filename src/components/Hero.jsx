import "animate.css";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <header className="flex justify-center h-screen lg:flex-row mt-64 lg:mt-32">
      <div className="flex flex-col gap-2 text-center mx-auto">
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
        <h2 className="text-lg md:text-2xl text-slate-600 dark:text-slate-300 animate__animated animate__fadeInUp animate__slower">
          Desarrollo de sitios web para
          <br />
          <span className="text-lg md:text-2xl text-indigo-600 dark:text-indigo-300 animate__animated animate__fadeInUp animate__slower">
            <Typewriter
              words={[
                "Emprendedores",
                "Pymes",
                "Eventos",
                "Tu fiesta",
                "Cumplir tus sueños...",
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
        <div className="flex w-fit gap-4 mx-auto mt-8">
          <a
            className="rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
            href="#price"
          >
            Comenzar
          </a>
          <a
            href="#contact"
            className="inline-block rounded-lg bg-gray-800 dark:bg-gray-100 px-8 py-3 text-center text-sm font-semibold text-gray-100 dark:text-gray-800 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-700 hover:dark:bg-gray-400 focus-visible:ring md:text-base"
          >
            Contacto
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
