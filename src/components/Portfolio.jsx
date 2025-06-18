import AOS from "aos";
import "aos/dist/aos.css";

const portfolios = [
  {
    img: "/tapeo.jpeg",
    title: "Tapeo Cervecería",
    details:
      "Menú digital interactivo pensado para cervecerías y bares, pero adaptable a otros negocios. Los clientes pueden escanear un QR y acceder al menú desde su celular, ver imágenes de los productos, consultar precios y realizar pedidos de forma ágil. El diseño es adaptable a cualquier dispositivo.",
    href: "https://menu-qr-psi.vercel.app/",
    color: "text-slate-900",
    mobile: "/tapeo_celu.png",
  },
  {
    img: "/beauty.jpeg",
    title: "Beauty Spa",
    details:
      "Sitio web profesional para un salón de belleza. Permite a los clientes reservar turnos directamente por WhatsApp, consultar precios de servicios y productos, y acceder a las redes sociales del negocio. El diseño es moderno, atractivo y pensado para convertir visitantes en nuevos clientes. Es solo un ejemplo, pero se puede personalizar según las necesidades del cliente y a distintos rubros.",
    href: "https://beauty-spa-ivory.vercel.app/",
    color: "text-slate-100",
    mobile: "/beauty_mobile.png",
  },
];

const PortfolioItem = ({ item }) => (
  <div className="md:px-4 h-full">
    <a href={item.href} target="_blank" rel="noopener noreferrer">
      <div className="w-1/5 relative z-10 -bottom-32 -right-64 md:-right-96">
        <img src={item.mobile} alt="mobile" />
      </div>
      <div className="relative group overflow-hidden">
        <img
          src={item.img}
          alt="Project Gallery"
          className="w-full transition scale-95 group-hover:scale-125 duration-500"
        />
      </div>
      <div
        data-aos="zoom-in-up"
        className="relative -top-10 px-8 z-[1] text-left"
      >
        <h3
          className={`text-3xl md:text-4xl leading-none font-bold uppercase p-1 ${item.color}`}
        >
          {item.title}
        </h3>
        <div>
          <p className="opacity-75 text-lg">{item.details}</p>
        </div>
      </div>
    </a>
  </div>
);

const Portfolio = () => {
  return (
    <section
      id="projects"
      className="pt-32 pb-8 dark:bg-zinc-900 text-slate-700 dark:text-white w-full"
    >
      <div className="container px-4 mx-auto">
        <div className="flex gap-2 justify-center items-center mb-4 mt-8">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 justify-center items-center">
              <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-slate-100 lg:text-3xl">
                Proyectos realizados
              </h2>
              <img
                src="./logo_png.webp"
                className="md:flex h-16 w-16 rounded-full"
                alt="logo"
              />
            </div>
            <p className="text-lg text-gray-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto text-center">
              Haz clic en cada proyecto para navegar, interactuar y conocer cómo
              tu negocio puede destacarse con una web profesional y funcional.
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
