import "animate.css";

const Hero = () => {
  return (
    <header className="flex justify-center items-center h-screen">
      <div className="flex flex-col mt-12 gap-2 text-center mx-auto px-3 sm:px-4 max-w-4xl">
        <div className="flex justify-center items-center md:mb-8 mb-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-7xl lg:text-9xl gradient-blue font-bold animate__animated animate__fadeInUp animate__slower">
              EmprenDev
            </h1>
            <h2 className="text-slate-800 dark:text-slate-100 text-4xl lg:text-6xl font-bold animate__animated animate__backInLeft">
              Soluciones digitales personalizadas
            </h2>
          </div>
        </div>
        <div className="w-full mx-auto">
          <p className="text-base lg:text-lg text-gray-600 dark:text-gray-300">
            Impulsa tu emprendimiento al siguiente nivel. Destaca online y
            convierte visitantes en clientes fieles con soluciones diseñadas
            para tu negocio.
          </p>
        </div>
        <div className="w-full mx-auto mt-6 sm:mt-8">
          <a
            className="inline-block rounded-lg bg-gray-800 dark:bg-gray-100 px-8 py-4 text-center text-base font-semibold text-gray-100 dark:text-gray-800 outline-none ring-blue-300 transition-transform duration-200 hover:border-black hover:dark:text-white hover:scale-105 hover:bg-blue-500 hover:dark:bg-blue-500 hover:border-none dark:hover:border-white border-2 dark:hover:text-white focus-visible:ring"
            role="button"
            href="#contact"
            aria-label="Ir a la sección de precios y comenzar tu sitio web"
          >
            Empieza hoy!
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
