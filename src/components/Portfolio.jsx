const portfolios = [
  {
    img: "/diablitas.png",
    title: "Diablitas Bags",
    details:
      "Sitio web profesional para venta de bolsos. Presenta productos con imágenes de alta calidad, descripciones detalladas y precios. Incluye buscador de productos y una página de contacto para consultas. Diseño atractivo y fácil navegación.",
    href: "https://diablitas.empren.dev/",
    span1: "Emprendimiento",
    span2: "Reservas por WhatsApp",
  },
  {
    img: "/tapeo.png",
    title: "Tapeo Cervecería",
    details:
      "Menú digital interactivo pensado para cervecerías y bares, pero adaptable a otros negocios. Los clientes pueden escanear un QR y acceder al menú desde su celular, ver imágenes de los productos, consultar precios y realizar pedidos de forma ágil. El diseño es adaptable a cualquier dispositivo.",
    href: "https://menu-qr-psi.vercel.app/",
    span1: "Gastronomía",
    span2: "Menú Digital",
  },
  {
    img: "/stock-app.png",
    title: "Stock App",
    details:
      "Aplicación de gestión de inventario para pequeños y medianos negocios. Permite controlar el stock en tiempo real, generar reportes y recibir notificaciones de bajo inventario.",
    href: "#inicio",
    span1: "Aplicación Web",
    span2: "Gestión de Inventario",
  },
  {
    img: "/sublime-page.jpeg",
    title: "Sublime",
    details:
      "Sitio web para un emprendimiento de productos personalizados. Presenta los productos con imágenes de alta calidad, descripciones detalladas y precios. Incluye botón de reserva por WhatsApp y redes sociales. Diseño atractivo y fácil navegación.",
    href: "https://sublime.empren.dev/",
    span1: "Emprendimiento",
    span2: "Reservas por WhatsApp",
  },
];

const PortfolioItem = ({ item }) => (
  <div className="group overflow-hidden bg-black border border-accent rounded-card h-full transition-all hover:-translate-y-1 hover:shadow-card-hover">
    <a href={item.href} target="_blank" rel="noopener noreferrer">
      <div className="relative overflow-hidden w-full h-48 sm:h-52 md:h-60">
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></span>
      </div>
      <div className="p-5 sm:p-6 md:p-7 text-left">
        <h3 className="text-xl sm:text-2xl md:text-3xl leading-tight font-bold uppercase text-txt-primary">
          {item.title}
        </h3>
        <p className="mt-3 text-sm sm:text-base text-txt-secondary leading-relaxed line-clamp-3">
          {item.details}
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <span className="px-2.5 py-1 text-xs rounded-full font-semibold bg-accent-subtle text-accent dark:text-accent-hover">
            {item.span1}
          </span>
          <span className="px-2.5 py-1 text-xs rounded-full font-semibold bg-accent-subtle text-accent dark:text-accent-hover">
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
      className="pt-16 sm:pt-24 lg:pt-28 pb-6 sm:pb-8 lg:pb-12 text-txt-primary w-full"
    >
      <div className="container px-4 sm:px-6 mx-auto">
        <div className="flex flex-col gap-2 justify-center items-center mb-8 sm:mb-12">
          <div className="flex flex-col gap-2 w-full">
            <div className="flex flex-col gap-2 justify-center items-center">
              <h2 className="text-center text-4xl lg:text-[40px] font-bold leading-tight text-txt-primary">
                Proyectos que
              </h2>
              <h2 className="text-amber-300 text-4xl lg:text-[40px] font-bold ml-2">
                generan resultados
              </h2>
            </div>
            <p className="text-lg text-txt-secondary mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto text-center">
              Proyectos reales para clientes reales. Soluciones digitales
              diseñadas para impulsar negocios y generar resultados tangibles.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
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
