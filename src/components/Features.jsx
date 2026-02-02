import Accordion from "./Accordion";

const Features = () => {
  const items = [
    {
      title: "¿Por qué invertir en una web para mi negocio?",
      content:
        "Una presencia digital profesional genera confianza inmediata en tus clientes potenciales. El 80% de los consumidores investigan online antes de comprar. Sin una web, pierdes esas oportunidades. Una solución digital aumenta tu visibilidad, atrae más clientes y te posiciona como profesional en tu rubro.",
      aos: "zoom-in-down",
    },
    {
      title: "¿Cuánto tiempo toma desarrollar mi proyecto?",
      content:
        "Depende de la complejidad, pero trabajamos de forma ágil. Un menú digital o catálogo básico puede estar listo en 1-2 semanas. Proyectos más complejos como e-commerce pueden tomar 3-4 semanas. Lo importante: empezamos rápido y te mantenemos informado en cada paso.",
      aos: "zoom-in-up",
    },
    {
      title: "¿Puedo personalizar mi sitio web?",
      content:
        "¡Claro! Personalizamos el diseño, los colores, las secciones y el contenido para que tu web refleje la identidad de tu negocio y se adapte a lo que necesitas.",
      aos: "zoom-in",
    },
    {
      title: "¿Los precios incluyen mantenimiento y actualizaciones?",
      content:
        "Trabajamos con planes flexibles adaptados a tu presupuesto. El desarrollo inicial es un pago único. Para mantenimiento, hosting y actualizaciones, ofrecemos planes mensuales opcionales. Consultá sin compromiso para armar un paquete que se ajuste a tu realidad.",
      aos: "fade-up",
    },
  ];

  return (
    <div id="features" className="py-32">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex gap-2 justify-center items-center mb-16 animate__animated animate__backInLeft">
          <div className="flex gap-2">
            <h2 className="mb-4 text-center text-3xl md:text-4xl lg:text-[40px] font-bold leading-tight text-gray-800 dark:text-slate-50 md:mb-6">
              Preguntas
            </h2>
            <h2 className="gradient-blue mb-4 text-center text-3xl md:text-4xl lg:text-[40px] font-bold leading-tight md:mb-6">
              frecuentes
            </h2>
          </div>
        </div>

        <div className="mx-auto max-w-4xl">
          <Accordion items={items} />
        </div>
      </div>
      <div className="w-full mx-auto mt-32 flex flex-col gap-8 justify-center items-center">
        <h3 className="text-xl md:text-2xl dark:text-white">
          ¿Listo para transformar tu negocio?
        </h3>
        <a
          className="rounded-lg flex justify-center items-center bg-green-600 px-8 py-3 text-center text-sm font-semibold text-gray-100 outline-none ring-blue-300 transition-transform duration-200 hover:border-black hover:dark:text-white hover:scale-110 hover:bg-green-500 hover:border-none dark:hover:border-white border-2 dark:hover:text-white focus-visible:ring md:text-base"
          role="button"
          href="https://api.whatsapp.com/send?phone=+5491126922128&text=Hola%20EmprenDev,%20necesito%20asesoramiento:"
          aria-label="Ir a la sección de precios y comenzar tu sitio web"
          target="_blank"
        >
          <i
            className="icon-[iconoir--whatsapp-solid] w-6 h-6 mr-2"
            role="img"
            aria-hidden="true"
          ></i>
          Consulta por WhatsApp!
        </a>
        <p className="text-lg text-muted text-center text-gray-500 mt-4">
          Respondemos en minutos • Sin costo ni compromiso • Presupuesto
          personalizado
        </p>
      </div>
    </div>
  );
};

export default Features;
