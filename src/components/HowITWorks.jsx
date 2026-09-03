const steps = [
  {
    icon: "icon-[bi--1-circle-fill]",
    title: "Conversemos",
    desc: "Contactanos y contanos sobre tu negocio",
  },
  {
    icon: "icon-[bi--2-circle-fill]",
    title: "Propuesta",
    desc: "Diseñamos una solución a tu medida.",
  },
  {
    icon: "icon-[bi--3-circle-fill]",
    title: "Desarrollo",
    desc: "Creamos tu proyecto con actualizaciones constantes",
  },
  {
    icon: "icon-[bi--4-circle-fill]",
    title: "A crecer!",
    desc: "Lanzamos y te acompañamos en el crecimiento",
  },
];

const StepCard = ({ step }) => (
  <div className="flex flex-col items-center text-center p-6">
    <i
      className={`${step.icon} w-10 h-10 sm:w-12 sm:h-12 text-accent`}
      role="img"
      aria-hidden="true"
    ></i>
    <h3 className="mt-4 mb-2 text-lg font-semibold text-accent md:text-xl">
      {step.title}
    </h3>
    <p className="text-txt-secondary text-center">{step.desc}</p>
  </div>
);

const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24 text-txt-primary">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center gap-4 mb-12 md:mb-16">
          <h2 className="text-center text-4xl lg:text-[40px] font-bold leading-tight text-txt-primary">
            Cómo empezar{" "}
            <span className="gradient-blue">en 4 pasos simples</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {steps.map((step, i) => (
            <div
              key={i}
              className="glass-card rounded-card hover:shadow-card-hover transition-shadow"
            >
              <StepCard step={step} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
