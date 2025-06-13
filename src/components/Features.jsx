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
    <div id="features" className="md:py-32 dark:bg-zinc-900">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex gap-2 justify-center items-center mb-16 animate__animated animate__backInLeft">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 dark:text-slate-50 md:mb-6 lg:text-3xl">
            Preguntas frecuentes
          </h2>
          <img
            src="./logo_png.webp"
            className="flex h-16 w-16 rounded-full mb-6"
            alt="logo"
          />
        </div>

        <div className="grid gap-8 sm:grid-cols-2 sm:gap-y-10 xl:grid-cols-2">
          <div
            data-aos="zoom-in-down"
            className="relative rounded-lg border border-black dark:border-white p-5 pt-8"
          >
            <span className="absolute -top-6 left-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white">
              <span className="icon-[hugeicons--question] text-3xl"></span>
            </span>
            <h3 className="mb-3 text-lg font-semibold text-blue-500 md:text-xl">
              ¿Qué soluciones ofrecen para mi emprendimiento?
            </h3>
            <p className="text-gray-900 dark:text-gray-100">
              Creamos páginas web personalizadas para todo tipo de negocios:
              tiendas, peluquerías, cervecerías, gimnasios, deco y más. También
              desarrollamos menús digitales para restaurantes y bares. Nos
              adaptamos a tus necesidades y presupuesto para potenciar tu
              presencia online.
            </p>
          </div>

          <div
            data-aos="zoom-in-up"
            className="relative rounded-lg border border-black dark:border-white p-5 pt-8"
          >
            <span className="absolute -top-6 left-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white">
              <span className="icon-[hugeicons--question] text-3xl"></span>
            </span>
            <h3 className="mb-3 text-lg font-semibold text-blue-500 md:text-xl">
              ¿Por qué es importante tener una página web?
            </h3>
            <p className="text-gray-900 dark:text-gray-100">
              Una web profesional aumenta tu visibilidad, atrae nuevos clientes
              y genera confianza. Es la mejor forma de mostrar tus productos o
              servicios y destacar frente a la competencia.
            </p>
          </div>

          <div
            data-aos="zoom-in"
            className="relative rounded-lg border border-black dark:border-white p-5 pt-8"
          >
            <span className="absolute -top-6 left-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white">
              <span
                className="icon-[hugeicons--question]  text-3xl"
                role="img"
                aria-hidden="true"
              ></span>
            </span>
            <h3 className="mb-3 text-lg font-semibold text-blue-500 md:text-xl">
              ¿Puedo personalizar mi sitio web?
            </h3>
            <p className="text-gray-900 dark:text-gray-100">
              ¡Claro! Personalizamos el diseño, los colores, las secciones y el
              contenido para que tu web refleje la identidad de tu negocio y se
              adapte a lo que necesitas.
            </p>
          </div>

          <div
            data-aos="fade-up"
            className="relative rounded-lg border border-black dark:border-white p-5 pt-8"
          >
            <span className="absolute -top-6 left-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white">
              <span className="icon-[hugeicons--question] text-3xl"></span>
            </span>
            <h3 className="mb-3 text-lg font-semibold text-blue-500 md:text-xl">
              ¿Qué incluye el servicio?
            </h3>
            <p className="text-gray-900 dark:text-gray-100">
              Incluye diseño, desarrollo, optimización para celulares, dominio,
              hosting y soporte técnico. Nos encargamos de todo para que tu web
              funcione siempre perfecta.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
