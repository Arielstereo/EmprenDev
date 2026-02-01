import "animate.css";

const Hero = () => {
  return (
    <header className="flex justify-center items-center h-screen">
      <div className="flex flex-col md:mt-12 gap-2 text-center mx-auto px-3 sm:px-4 max-w-4xl">
        <div className="flex justify-center items-center md:mb-8 mb-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl md:text-6xl lg:text-8xl gradient-blue font-bold leading-tight">
              Soluciones digitales
            </h1>
            <h1 className="text-slate-800 dark:text-slate-100 text-4xl md:text-6xl lg:text-8xl font-bold leading-tight">
              personalizadas
            </h1>
          </div>
        </div>
        <div className="w-full sm:w-5/6 md:w-3/4 lg:w-1/2 mx-auto animate__animated animate__fadeInUp animate__slower">
          <p className="text-base md:text-xl lg:text-2xl text-gray-400">
            Impulsa tu emprendimiento al siguiente nivel. Destaca online y
            convierte visitantes en clientes fieles con soluciones diseñadas
            para tu negocio.
          </p>
        </div>
        <div className="w-full mx-auto mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-8 justify-center">
          <a
            className="inline-block rounded-lg bg-gray-800 dark:bg-gray-100 px-6 sm:px-8 py-2 sm:py-3 text-center text-sm md:text-base font-semibold text-gray-100 dark:text-gray-800 outline-none ring-blue-300 transition-transform duration-200 hover:border-black hover:dark:text-white hover:scale-105 hover:bg-blue-500 hover:dark:bg-blue-500 hover:border-none dark:hover:border-white border-2 dark:hover:text-white focus-visible:ring"
            role="button"
            href="/home"
            aria-label="Ir a la sección de precios y comenzar tu sitio web"
          >
            Empieza hoy!
          </a>
          <a
            className="inline-block rounded-lg bg-transparent px-6 sm:px-8 py-2 sm:py-3 text-center text-sm md:text-base font-semibold text-gray-800 dark:text-gray-100 outline-none ring-blue-300 transition-transform duration-200 hover:border-black hover:scale-105 hover:text-white hover:bg-blue-500 hover:dark:bg-blue-500 hover:border-none dark:hover:border-white border-2 dark:hover:text-white focus-visible:ring"
            role="button"
            href="/home"
            aria-label="Ir a la sección de precios y comenzar tu sitio web"
          >
            Ver servicios
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
