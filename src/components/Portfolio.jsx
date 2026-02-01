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
    className="group overflow-hidden glass-card rounded-2xl h-full"
  >
    <a href={item.href} target="_blank" rel="noopener noreferrer">
      <div className="relative group overflow-hidden w-full h-40 sm:h-48 md:h-56">
        <img
          src={item.img}
          alt="Project Gallery"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-4 sm:p-6 md:p-8 text-left">
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight font-bold uppercase p-0 sm:p-1 dark:text-white">
          {item.title}
        </h3>
        <div className="my-2 sm:my-3">
          <p className="opacity-75 text-xs sm:text-sm md:text-base lg:text-lg line-clamp-3">
            {item.details}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 mt-3 sm:mt-4">
          <span className="px-2 sm:px-3 py-1 text-xs rounded-full border border-blue-500 text-blue-600 font-semibold">
            {item.span1}
          </span>
          <span className="px-2 sm:px-3 py-1 text-xs rounded-full border border-blue-500 text-blue-600 font-semibold">
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
      className="pt-16 sm:pt-24 lg:pt-32 pb-6 sm:pb-8 lg:pb-12 text-slate-700 dark:text-white w-full"
    >
      <div className="container px-3 sm:px-4 mx-auto">
        <div className="flex flex-col gap-2 justify-center items-center mb-6 sm:mb-8 lg:mb-12 mt-4 sm:mt-8">
          <div className="flex flex-col gap-2 w-full">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center items-center">
              <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-slate-100 leading-tight">
                Proyectos que
                <span className="gradient-blue inline ml-2">
                  generan resultados
                </span>
              </h2>
              <img
                src="./logo_png.png"
                className="hidden sm:flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-full flex-shrink-0"
                alt="logo"
              />
            </div>
            <p className="text-sm sm:text-base md:text-lg text-gray-500 dark:text-slate-400 mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto text-center">
              Casos de éxito de emprendedores que transformaron su presencia
              digital
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
          {portfolios.map((item, i) => (
            <div key={i}>
              <PortfolioItem item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
