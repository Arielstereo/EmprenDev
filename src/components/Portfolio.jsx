import AOS from "aos";
import "aos/dist/aos.css";

const portfolios = [
  {
    img: "/tapeo.jpeg",
    title: "Tapeo Cervecería",
    details:
      "Menú digital interactivo para mejorar la experiencia de los clientes y agilizar pedidos en mesa.",
    href: "https://menu-qr-psi.vercel.app/",
    color: "text-slate-900",
  },
  {
    img: "/beauty.jpeg",
    title: "Beauty Spa",
    details:
      "Sitio web profesional para potenciar la presencia online y captar nuevos clientes.",
    href: "https://beauty-spa-ivory.vercel.app/",
    color: "text-slate-100",
  },
];

const PortfolioItem = ({ item }) => (
  <div className="md:px-4 h-full">
    <a href={item.href} target="_blank" rel="noopener noreferrer">
      <div className="relative group overflow-hidden">
        <img
          src={item.img}
          alt="Project Gallery"
          className="w-full transition scale-95 group-hover:scale-125 duration-500"
        />
      </div>
      <div className="relative -top-16 px-8 z-[1] text-left">
        <h3
          className={`text-3xl md:text-4xl leading-none font-bold uppercase p-1 ${item.color}`}
        >
          {item.title}
        </h3>
        <div>
          <p className="text-lg">{item.details}</p>
        </div>
      </div>
    </a>
  </div>
);

const Portfolio = () => {
  return (
    <section
      id="projects"
      className="py-32 dark:bg-zinc-900 text-slate-700 dark:text-white w-full"
    >
      <div className="container px-4 mx-auto">
        <div className="flex gap-2 justify-center items-center mb-4 md:mb-16 mt-8">
          <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-slate-100 lg:text-3xl">
            Proyectos realizados
          </h2>
          <img
            src="./logo_png.webp"
            className="md:flex h-16 w-16 rounded-full"
            alt="logo"
          />
        </div>

        {/*  Start: Project Gallery Area  */}
        <div
          data-aos="zoom-in-down"
          className="grid grid-cols-2 gap-6 max-w-7xl mx-auto"
        >
          {portfolios.map((item, i) => (
            <div className="col-span-2 md:col-span-1" key={i}>
              {" "}
              <PortfolioItem item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
