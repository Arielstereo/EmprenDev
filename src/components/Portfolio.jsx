import "aos/dist/aos.css";

const portfolios = [
  {
    img: "/tapeo.jpeg",
    title: "Tapeo Cervecería",
    details:
      "Menú digital interactivo pensado para cervecerías y bares, pero adaptable a otros negocios. Los clientes pueden escanear un QR y acceder al menú desde su celular, ver imágenes de los productos, consultar precios y realizar pedidos de forma ágil. El diseño es adaptable a cualquier dispositivo.",
    href: "https://menu-qr-psi.vercel.app/",
    span1: "Gastronomía",
    span2: "Menú Digital",
  },
  {
    img: "/diablitas.png",
    title: "Diablitas Bags",
    details:
      "Sitio web profesional para venta de bolsos. Presenta productos con imágenes de alta calidad, descripciones detalladas y precios. Incluye buscador de productos y una página de contacto para consultas. Diseño atractivo y fácil navegación.",
    href: "https://diablitas-bags.empren.dev/",
    span1: "Emprendimiento",
    span2: "Reservas por WhatsApp",
  },
];

const PortfolioItem = ({ item }) => (
  <div
    data-aos="zoom-in-up"
    className="group overflow-hidden glass-card rounded-2xl h-full "
  >
    <a href={item.href} target="_blank" rel="noopener noreferrer">
      <div className="w-1/5 relative z-10 -bottom-32 -right-64 md:-right-96"></div>
      <div className="relative group overflow-hidden">
        <img
          src={item.img}
          alt="Project Gallery"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-8 text-left">
        <h3 className="text-3xl md:text-4xl leading-none font-bold uppercase p-1 dark:text-white ">
          {item.title}
        </h3>
        <div>
          <p className="opacity-75 text-lg">{item.details}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 text-xs rounded-full border border-blue-500 text-blue-600 font-semibold mt-4">
            {item.span1}
          </span>
          <span className="px-3 py-1 text-xs rounded-full border border-blue-500 text-blue-600 font-semibold mt-4">
            {item.span2}
          </span>
        </div>
      </div>
    </a>
  </div>
);

const Portfolio = () => {
  return (
    <section
      id="projects"
      className="pt-32 pb-8 text-slate-700 dark:text-white w-full"
    >
      <div className="container px-4 mx-auto">
        <div className="flex gap-2 justify-center items-center mb-4 mt-8">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 justify-center items-center">
              <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-slate-100 lg:text-4xl">
                Proyectos que
                <div className="gradient-blue">generan resultados</div>
              </h2>
              <img
                src="./logo_png.png"
                className="md:flex h-16 w-16 rounded-full"
                alt="logo"
              />
            </div>
            <p className="text-lg text-gray-500 dark:text-slate-400 mb-8 max-w-2xl mx-auto text-center">
              Casos de éxito de emprendedores que transformaron su presencia
              digital
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 max-w-7xl mx-auto">
          {portfolios.map((item, i) => (
            <div className="col-span-2 md:col-span-1" key={i}>
              <PortfolioItem item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
