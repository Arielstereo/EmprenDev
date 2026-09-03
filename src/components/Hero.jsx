import "animate.css";

const Hero = () => {
  return (
    <header className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col gap-4 text-center mx-auto px-4 max-w-5xl pt-24 pb-16">
        <div className="flex justify-center items-center">
          <div className="flex flex-col gap-3">
            <h1 className="text-5xl sm:text-6xl lg:text-8xl gradient-blue font-bold leading-none animate__animated animate__fadeInUp">
              EmprenDev
            </h1>
            <h2 className="text-txt-primary text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight animate__animated animate__backInLeft">
              Soluciones digitales personalizadas
            </h2>
          </div>
        </div>
        <p className="mx-auto max-w-2xl text-base sm:text-lg text-txt-secondary">
          Impulsa tu emprendimiento al siguiente nivel. Destaca online y
          convierte visitantes en clientes fieles con soluciones diseñadas
          para tu negocio.
        </p>
        <div className="mt-6">
          <a
            className="inline-flex items-center rounded-lg bg-accent px-8 py-3.5 text-base font-semibold text-white hover:bg-accent-hover shadow-glow transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            role="button"
            href="#contact"
            aria-label="Ir a la sección de contacto y comenzar tu sitio web"
          >
            Empieza hoy!
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
