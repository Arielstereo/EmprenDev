import "animate.css";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <header className="flex justify-center h-screen lg:flex-row mt-64 lg:mt-48">
      <div className="flex flex-col gap-8 text-center">
        <h1 className="text-6xl xl:text-8xl text-slate-800 dark:text-slate-100 animate__animated animate__bounceInLeft animate__slow">
          EmprenDev
        </h1>
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
        <div class="flex w-fit gap-4 mx-auto">
          <a
            className="rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base shadow-sm shadow-indigo-300"
            href="#price"
          >
            Empezar
          </a>
          <a
            href="#contact"
            class="inline-block rounded-lg bg-gray-800 dark:bg-gray-400 px-8 py-3 text-center text-sm font-semibold text-gray-100 dark:text-gray-800 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-700 hover:dark:bg-gray-500 focus-visible:ring md:text-base shadow-sm shadow-gray-300"
          >
            Contacto
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
