import AOS from "aos";
import "aos/dist/aos.css";

const HowItWorks = () => {
  return (
    <section className="py-14 md:py-24 text-zinc-900 dark:text-white">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 justify-center items-center">
            <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-slate-100 lg:text-3xl">
              ¿Cómo empezar?
            </h2>
            <img
              src="./logo_png.webp"
              className="md:flex h-16 w-16 rounded-full"
              alt="logo"
            />
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto text-center">
            Sólo necesitas 4 pasos para empezar a aumentar tus ventas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
          <div
            data-aos="zoom-in-down"
            className="bg-transparent border dark:border-white shadow-xl rounded-2xl h-full"
          >
            <div className="p-6 lg:p-12">
              <div className="w-16 h-16 bg-blue-600 text-[22px] text-white rounded-full animate-pulse shadow-xl flex items-center justify-center mb-6">
                <i
                  className="icon-[fa6-solid--message]"
                  role="img"
                  aria-hidden="true"
                ></i>
              </div>
              <h3 className="mb-3 text-lg font-semibold text-blue-500 md:text-xl">
                Contáctanos
              </h3>
              <p className="text-gray-900 dark:text-gray-100">
                Cuéntanos sobre tu emprendimiento y te asesoramos con la mejor
                solución para tu negocio.
              </p>
            </div>
          </div>
          <div
            data-aos="zoom-in-up"
            className="bg-transparent border dark:border-white shadow-xl rounded-2xl h-full"
          >
            <div className="p-6 lg:p-12">
              <div className="w-16 h-16 bg-blue-600  text-[22px] text-white rounded-full animate-pulse shadow-xl flex items-center justify-center mb-6">
                <i
                  className="icon-[solar--archive-minimalistic-outline] h-6 w-6"
                  role="img"
                  aria-hidden="true"
                ></i>
              </div>
              <h3 className="mb-3 text-lg font-semibold text-blue-500 md:text-xl">
                Elige tu modelo
              </h3>
              <p className="text-gray-900 dark:text-gray-100">
                Definimos juntos el proyecto y te pedimos imágenes, textos y
                logos. Así tu web empieza a tomar forma.
              </p>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            className="bg-transparent border dark:border-white shadow-xl rounded-2xl h-full"
          >
            <div className="p-6 lg:p-12">
              <div className="w-16 h-16 bg-blue-600  text-[22px] text-white rounded-full animate-pulse shadow-xl flex items-center justify-center mb-6">
                <i
                  className="icon-[clarity--design-solid]"
                  role="img"
                  aria-hidden="true"
                ></i>
              </div>
              <h3 className="mb-3 text-lg font-semibold text-blue-500 md:text-xl">
                Desarrollo
              </h3>
              <p className="text-gray-900 dark:text-gray-100">
                Nos encargamos de todo el desarrollo. En menos de 7 días hábiles
                tendrás tu sitio listo.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="bg-transparent border dark:border-white shadow-xl rounded-2xl h-full"
          >
            <div className="p-6 lg:p-12">
              <div className="w-16 h-16 bg-blue-600 text-[22px] text-white rounded-full animate-pulse shadow-xl flex items-center justify-center mb-6">
                <i
                  className="icon-[fa6-solid--check]"
                  role="img"
                  aria-hidden="true"
                ></i>
              </div>
              <h3 className="mb-3 text-lg font-semibold text-blue-500 md:text-xl">
                ¡Listo!
              </h3>
              <p className="text-gray-900 dark:text-gray-100">
                Tu web estará online y lista para crecer. Además, podrás
                solicitar cambios o actualizaciones cuando lo necesites.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
