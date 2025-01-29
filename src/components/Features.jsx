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
    <div
      id="features"
      data-aos="fade-up"
      data-aos-duration="3000"
      className="py-32 sm:py-8 lg:py-12 lg:h-screen lg:scroll-mt-48"
    >
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-16 md:mb-32">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 dark:text-slate-50 md:mb-6 lg:text-3xl">
            Preguntas frecuentes
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 sm:gap-y-10 xl:grid-cols-2">
          <div
            data-aos="zoom-in-down"
            className="relative rounded-lg bg-gray-100 p-5 pt-8"
          >
            <span className="absolute -top-6 left-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500 text-white">
              <span className="icon-[hugeicons--question] text-3xl"></span>
            </span>

            <h3 className="mb-3 text-lg font-semibold text-indigo-500 md:text-xl">
              ¿Qué servicios ofrecen para mi evento?
            </h3>
            <p className="text-gray-500">
              Ofrecemos diseño y desarrollo de páginas web personalizadas para
              todo tipo de eventos, como bodas, cumpleaños y aniversarios. Las
              páginas incluyen detalles como la información del evento, mapas
              interactivos, confirmación de asistencia (RSVP), galerías de fotos
              y mucho más.
            </p>
          </div>

          <div
            data-aos="zoom-in-up"
            className="relative rounded-lg bg-gray-100 p-5 pt-8"
          >
            <span className="absolute -top-6 left-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500 text-white">
              <span className="icon-[hugeicons--question] text-3xl"></span>
            </span>

            <h3 className="mb-3 text-lg font-semibold text-indigo-500 md:text-xl">
              ¿Por qué mi negocio necesita una página web?
            </h3>
            <p className="text-gray-500">
              Una página web te permite aumentar tu visibilidad, atraer nuevos
              clientes y fortalecer tu presencia en línea. Es la mejor manera de
              mostrar tus productos o servicios y generar confianza en tus
              clientes potenciales.
            </p>
          </div>

          <div
            data-aos="zoom-in"
            className="relative rounded-lg bg-gray-100 p-5 pt-8"
          >
            <span className="absolute -top-6 left-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500 text-white">
              <span className="icon-[hugeicons--question]  text-3xl" role="img" aria-hidden="true"></span>
            </span>

            <h3 className="mb-3 text-lg font-semibold text-indigo-500 md:text-xl">
              ¿Puedo personalizar mi página web?
            </h3>
            <p className="text-gray-500">
              ¡Por supuesto! Trabajamos contigo para personalizar cada aspecto
              de tu página. Desde el diseño y los colores hasta las secciones y
              el contenido, nos aseguramos de que refleje tu estilo y tus necesidades.
            </p>
          </div>

          <div
            data-aos="fade-up"
            className="relative rounded-lg bg-gray-100 p-5 pt-8"
          >
            <span className="absolute -top-6 left-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500 text-white">
              <span class="icon-[hugeicons--question] text-3xl"></span>
            </span>

            <h3 className="mb-3 text-lg font-semibold text-indigo-500 md:text-xl">
              ¿Qué incluye el costo del servicio?
            </h3>
            <p className="text-gray-500">
              Nuestros planes incluyen diseño, desarrollo, integración de
              funcionalidades (como formularios de contacto) y optimización para
              dispositivos móviles. Ofrecemos soporte técnico y mantenimiento
              para asegurarnos de que tu página funcione correctamente.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
