import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Features = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <section
      id="features"
      className="flex flex-col lg:flex-row gap-12 md:gap-48 lg:gap-32 lg:justify-center w-3/4 lg:w-full mx-auto pt-16 lg:pt-48 h-full md:h-screen"
    >
      <div
        data-aos="zoom-out"
        class="w-full lg:w-[300px] h-fit p-8 flex flex-col gap-4 rounded-xl shadow-md shadow-black dark:shadow-white"
      >
        <div className="flex md:flex-col gap-4">
          <div className="flex items-center justify-center rounded-full bg-slate-100 shadow-lg shadow-black dark:shadow-md dark:shadow-white p-8 lg:p-10 w-12 h-12 md:mx-auto hover:animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              className="absolute"
            >
              <path
                fill="#333333"
                d="M3 10c-.24 0-.45.09-.59.25c-.14.15-.2.37-.17.61l.5 2.99C2.82 14.5 3.4 15 4 15h3c.64 0 1.36-.56 1.5-1.18l1.06-3.19c.04-.13.01-.32-.06-.44c-.11-.12-.28-.19-.5-.19zm4 7H4C2.38 17 .96 15.74.76 14.14l-.5-2.99C.15 10.3.39 9.5.91 8.92S2.19 8 3 8h6c.83 0 1.58.35 2.06.96c.11.15.21.31.29.49c.43-.09.87-.09 1.29 0c.08-.18.18-.34.3-.49C13.41 8.35 14.16 8 15 8h6c.81 0 1.57.34 2.09.92c.51.58.75 1.38.65 2.19l-.51 3.07C23.04 15.74 21.61 17 20 17h-3c-1.56 0-3.08-1.19-3.46-2.7l-.9-2.71c-.38-.28-.91-.28-1.29 0l-.92 2.78C10.07 15.82 8.56 17 7 17m8-7c-.22 0-.39.07-.5.19c-.08.12-.1.31-.05.51l1.01 3.05c.18.69.9 1.25 1.54 1.25h3c.59 0 1.18-.5 1.25-1.11l.51-3.07c.03-.2-.03-.42-.17-.57A.77.77 0 0 0 21 10z"
              ></path>
            </svg>
          </div>
          <h2 className="text-xl md:text-2xl font-semibold md:text-center pt-8 text-blue-600 dark:text-yellow-400">
            Visibilidad
          </h2>
        </div>
        <span className="text-sm md:text-base text-slate-900 dark:text-white">
          Un sitio web aumenta tu visibilidad y te ayuda a destacarte de la
          competencia. Una página web es una herramienta de marketing
          extremadamente eficaz y más económica que la publicidad tradicional.
        </span>
      </div>
      <div
        data-aos="zoom-in"
        class="w-full lg:w-[300px] h-fit p-8 flex flex-col gap-4 rounded-xl shadow-md shadow-black dark:shadow-white"
      >
        <div className="flex md:flex-col gap-4">
          <div className="flex items-center justify-center rounded-full bg-slate-100 shadow-lg shadow-black dark:shadow-md dark:shadow-white p-8 lg:p-10 w-12 h-12 md:mx-auto hover:animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              className="absolute"
            >
              <path
                fill="#333333"
                d="m20.27 16.265l.705-4.08a1.666 1.666 0 0 0-1.64-1.95h-5.181a.833.833 0 0 1-.822-.969l.663-4.045a4.783 4.783 0 0 0-.09-1.973a1.635 1.635 0 0 0-1.092-1.137l-.145-.047a1.346 1.346 0 0 0-.994.068c-.34.164-.588.463-.68.818l-.476 1.834a7.628 7.628 0 0 1-.656 1.679c-.415.777-1.057 1.4-1.725 1.975l-1.439 1.24a1.67 1.67 0 0 0-.572 1.406l.812 9.393A1.666 1.666 0 0 0 8.597 22h4.648c3.482 0 6.453-2.426 7.025-5.735"
              ></path>
              <path
                fill="#333333"
                fillRule="evenodd"
                d="M2.968 9.485a.75.75 0 0 1 .78.685l.97 11.236a1.237 1.237 0 1 1-2.468.107V10.234a.75.75 0 0 1 .718-.749"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <h2 className="text-xl md:text-2xl font-semibold md:text-center pt-8 text-blue-600 dark:text-yellow-400">
            Credibilidad
          </h2>
        </div>
        <span className="text-sm md:text-base text-slate-900 dark:text-white">
          Tener una página web transmite confianza y credibilidad a tus
          clientes. Demuestra que tu negocio está al tanto de las últimas
          tendencias, lo que puede hacer que los clientes confíen más en tus
          productos o servicios.
        </span>
      </div>
      <div
        data-aos="zoom-out-up"
        class="w-full lg:w-[300px] h-fit p-8 flex flex-col gap-4 rounded-xl shadow-md shadow-black dark:shadow-white"
      >
        <div className="flex md:flex-col gap-4">
          <div className="flex items-center justify-center rounded-full bg-slate-100 shadow-lg shadow-black dark:shadow-md dark:shadow-white p-8 lg:p-10 w-12 h-12 md:mx-auto hover:animate-bounce">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 14 14"
              >
                <g
                  fill="none"
                  stroke="#333333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="6.5" cy="6.5" r="6"></circle>
                  <path d="m10.74 10.74l2.76 2.76M6.5 4V2.5M5 8c0 .75.67 1 1.5 1S8 9 8 8c0-1.5-3-1.5-3-3c0-1 .67-1 1.5-1S8 4.38 8 5M6.5 9v1.5"></path>
                </g>
              </svg>
            </span>
          </div>
          <h2 className="text-xl md:text-2xl font-semibold md:text-center pt-8 text-blue-600 dark:text-yellow-400">
            Flexibilidad
          </h2>
        </div>
        <span className="text-sm md:text-base text-slate-900 dark:text-white">
          Una página web es flexible y puede crecer y adaptarse junto con tu
          negocio. Puedes agregar nuevas funciones, actualizar el diseño o
          expandir tu sitio a medida que tu negocio crezca y evolucione.
        </span>
      </div>
    </section>
  );
};

export default Features;
