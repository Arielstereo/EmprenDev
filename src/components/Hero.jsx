import "animate.css"
import { Typewriter } from 'react-simple-typewriter'

const Hero = () => {
  return (
    <header className="flex flex-col items-center justify-center h-screen lg:flex-row pt-16">
      <div className="flex flex-col gap-8 text-center">
        <h1 className="text-6xl xl:text-8xl text-slate-800 dark:text-slate-100 animate__animated animate__bounceInLeft animate__slow">
          EmprenDev
        </h1>
        <h2 className="text-lg md:text-2xl text-slate-600 dark:text-slate-300 animate__animated animate__fadeInUp animate__slower">
          Desarrollo de sitios web para
          <br />
          <span className="text-lg md:text-2xl text-blue-600 dark:text-yellow-300 animate__animated animate__fadeInUp animate__slower">
          <Typewriter
          words={['Emprendedores', 'Pymes', 'Eventos', 'Tu proyecto!']}
          loop={10}
          cursor
          cursorStyle='|'
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
          />
          </span>
        </h2>
        <a
          className="px-6 py-3 bg-blue-600 shadow-sm shadow-black transition duration-700 ease-in-out hover:-translate-x-1 hover:scale-105 w-fit text-slate-100 font-semibold rounded-xl text-lg md:text-xl mx-auto"
          href="#price"
        >
          Empezar
        </a>
      </div>
      <img
        className="w-full h-[300px] pl-12 sm:pl-16 lg:h-[400px] xl:w-[700px] xl:h-[500px] animate__animated animate__fadeInDownBig animate__slower"
        src="/hero.png"
        alt="hero"
      />
    </header>
  );
};

export default Hero;
