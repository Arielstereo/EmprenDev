import AOS from "aos";
import "aos/dist/aos.css";

const HowItWorks = () => {
  return (
    <section className="py-14 md:py-24 text-zinc-900 dark:text-white">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col max-w-2xl justify-center items-center text-center mx-auto">
          <h2 className="text-3xl font-bold md:text-[45px] mb-4">
            ¿Cómo funciona?
          </h2>
          <p className="text-lg opacity-80">
            Solo 4 pasos para transformar tu proyecto y aumentar tus ventas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
          <div
            data-aos="zoom-in-down"
            className="bg-white shadow-xl dark:bg-slate-800 rounded-2xl h-full"
          >
            <div className="p-6 lg:p-12">
              <div className="w-16 h-16 text-[22px] rounded-full animate-pulse border border-gray-100 shadow-xl flex items-center justify-center mb-6">
                <i
                  className="icon-[fa6-solid--message]"
                  role="img"
                  aria-hidden="true"
                ></i>
              </div>
              <h5 className="text-2xl font-bold mb-4">Contáctanos</h5>
              <p className="leading-relaxed opacity-75">
                Cuéntanos sobre tu emprendimiento y te asesoramos con la mejor
                solución para tu negocio.
              </p>
            </div>
          </div>
          <div
            data-aos="zoom-in-up"
            className="bg-white shadow-xl dark:bg-slate-800 rounded-2xl h-full"
          >
            <div className="p-6 lg:p-12">
              <div className="w-16 h-16 text-[22px] rounded-full animate-pulse border border-gray-100 shadow-xl flex items-center justify-center mb-6">
                <i
                  className="icon-[solar--archive-minimalistic-outline] h-6 w-6"
                  role="img"
                  aria-hidden="true"
                ></i>
              </div>
              <h5 className="text-2xl font-bold mb-4">Elige tu modelo</h5>
              <p className="leading-relaxed opacity-75">
                Definimos juntos el proyecto y te pedimos imágenes, textos y
                logos. Así tu web empieza a tomar forma.
              </p>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            className="bg-white shadow-xl dark:bg-slate-800 rounded-2xl h-full"
          >
            <div className="p-6 lg:p-12">
              <div className="w-16 h-16 text-[22px] rounded-full animate-pulse border border-gray-100 shadow-xl flex items-center justify-center mb-6">
                <i
                  className="icon-[clarity--design-solid]"
                  role="img"
                  aria-hidden="true"
                ></i>
              </div>
              <h5 className="text-2xl font-bold mb-4">Desarrollo</h5>
              <p className="leading-relaxed opacity-75">
                Nos encargamos de todo el desarrollo. En menos de 7 días hábiles
                tendrás tu sitio listo.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="bg-white shadow-xl dark:bg-slate-800 rounded-2xl h-full"
          >
            <div className="p-6 lg:p-12">
              <div className="w-16 h-16 text-[22px] rounded-full animate-pulse border border-gray-100 shadow-xl flex items-center justify-center mb-6">
                <i
                  className="icon-[fa6-solid--check]"
                  role="img"
                  aria-hidden="true"
                ></i>
              </div>
              <h5 className="text-2xl font-bold mb-4">¡Listo!</h5>
              <p className="leading-relaxed opacity-75">
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
