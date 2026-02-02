import "aos/dist/aos.css";

const HowItWorks = () => {
  return (
    <section className="py-14 md:py-24 dark:text-white">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 justify-center items-center">
            <h2 className="text-center text-3xl md:text-4xl lg:text-[40px] font-bold leading-tight text-gray-800 dark:text-slate-100">
              Cómo empezar{" "}
              <div className="gradient-blue">en 4 pasos simples</div>
            </h2>
            <img
              src="./logo_png.png"
              className="md:flex h-24 w-24 rounded-full"
              alt="logo"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mt-12">
          <div data-aos="zoom-in-down">
            <div className="p-6 lg:p-12 flex flex-col justify-center items-center">
              <div className="text-[22px] text-white">
                <i
                  className="icon-[bi--1-circle-fill] w-12 h-12 text-slate-800 dark:text-slate-100"
                  role="img"
                  aria-hidden="true"
                ></i>
              </div>
              <h3 className="mb-3 text-lg font-semibold text-blue-500 md:text-xl">
                Conversemos
              </h3>
              <p className="text-gray-900 dark:text-gray-100 text-center">
                Contactanos y contanos sobre tu negocio
              </p>
            </div>
          </div>
          <div data-aos="zoom-in-down">
            <div className="p-6 lg:p-12 flex flex-col justify-center items-center">
              <div className="text-[22px] text-white">
                <i
                  className="icon-[bi--2-circle-fill] w-12 h-12 text-slate-800 dark:text-slate-100"
                  role="img"
                  aria-hidden="true"
                ></i>
              </div>
              <h3 className="mb-3 text-lg font-semibold text-blue-500 md:text-xl">
                Propuesta
              </h3>
              <p className="text-gray-900 dark:text-gray-100 text-center">
                Diseñamos una solución a tu medida.
              </p>
            </div>
          </div>
          <div data-aos="zoom-in-down">
            <div className="p-6 lg:p-12 flex flex-col justify-center items-center">
              <div className="text-[22px] text-white">
                <i
                  className="icon-[bi--3-circle-fill] w-12 h-12 text-slate-800 dark:text-slate-100"
                  role="img"
                  aria-hidden="true"
                ></i>
              </div>
              <h3 className="mb-3 text-lg font-semibold text-blue-500 md:text-xl">
                Desarrollo
              </h3>
              <p className="text-gray-900 dark:text-gray-100 text-center">
                Creamos tu proyecto con actualizaciones constantes
              </p>
            </div>
          </div>
          <div data-aos="zoom-in-down">
            <div className="p-6 lg:p-12 flex flex-col justify-center items-center">
              <div className="text-[22px] text-white">
                <i
                  className="icon-[bi--4-circle-fill] w-12 h-12 text-slate-800 dark:text-slate-100"
                  role="img"
                  aria-hidden="true"
                ></i>
              </div>
              <h3 className="mb-3 text-lg font-semibold text-blue-500 md:text-xl">
                A crecer!
              </h3>
              <p className="text-gray-900 dark:text-gray-100 text-center">
                Lanzamos y te acompañamos en el crecimiento
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
