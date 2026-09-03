import Accordion from "./Accordion";

const Features = () => {
  const items = [
    {
      title: "¿Por qué invertir en una web para mi negocio?",
      content:
        "Una presencia digital profesional genera confianza inmediata en tus clientes potenciales. El 80% de los consumidores investigan online antes de comprar. Sin una web, pierdes esas oportunidades. Una solución digital aumenta tu visibilidad, atrae más clientes y te posiciona como profesional en tu rubro.",
    },
    {
      title: "¿Cuánto tiempo toma desarrollar mi proyecto?",
      content:
        "Depende de la complejidad, pero trabajamos de forma ágil. Un menú digital o catálogo básico puede estar listo en 1-2 semanas. Proyectos más complejos como e-commerce pueden tomar 3-4 semanas. Lo importante: empezamos rápido y te mantenemos informado en cada paso.",
    },
    {
      title: "¿Puedo personalizar mi sitio web?",
      content:
        "¡Claro! Personalizamos el diseño, los colores, las secciones y el contenido para que tu web refleje la identidad de tu negocio y se adapte a lo que necesitas.",
    },
    {
      title: "¿Los precios incluyen mantenimiento y actualizaciones?",
      content:
        "Trabajamos con planes flexibles adaptados a tu presupuesto. El desarrollo inicial es un pago único. Para mantenimiento, hosting y actualizaciones, ofrecemos planes mensuales opcionales. Consultá sin compromiso para armar un paquete que se ajuste a tu realidad.",
    },
  ];

  return (
    <div id="features" className="py-20 md:py-28">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex justify-center items-center mb-12 md:mb-16">
          <h2 className="text-4xl lg:text-[40px] font-bold leading-tight text-txt-primary">
            Preguntas <span className="gradient-blue">frecuentes</span>
          </h2>
        </div>

        <div className="mx-auto max-w-4xl">
          <Accordion items={items} />
        </div>
      </div>
      <div className="w-full mx-auto mt-16 md:mt-24 flex flex-col gap-6 justify-center items-center text-center px-4">
        <h3 className="text-xl md:text-2xl text-txt-primary">
          ¿Listo para transformar tu negocio?
        </h3>
        <a
          className="inline-flex items-center rounded-lg bg-green-600 px-8 py-3.5 text-base font-semibold text-white hover:bg-green-500 shadow-glow transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
          role="button"
          href="https://api.whatsapp.com/send?phone=+5491126922128&text=Hola%20EmprenDev,%20necesito%20asesoramiento:"
          aria-label="Consultar por WhatsApp y comenzar tu sitio web"
          target="_blank"
        >
          <i
            className="icon-[iconoir--whatsapp-solid] w-5 h-5 mr-2"
            role="img"
            aria-hidden="true"
          ></i>
          Consulta por WhatsApp!
        </a>
        <p className="text-base text-txt-muted">
          Respondemos en minutos • Sin costo ni compromiso • Presupuesto
          personalizado
        </p>
      </div>
    </div>
  );
};

export default Features;
