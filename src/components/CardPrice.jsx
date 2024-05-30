import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const CardPrice = ({
  title,
  price,
  subtitle,
  description,
  check1,
  href,
  animation,
}) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div
      data-aos={animation}
      className="p-6 md:p-8 z-10 rounded-3xl shadow-lg shadow-black dark:shadow-slate-200 w-[340px] md:w-[450px] md:h-[620px] bg-gradient-to-r from-blue-800 to-blue-600 hover:from-blue-600 hover:to-blue-800"
    >
      <h3 className="mb-2 text-3xl md:text-4xl text-left text-sky-200">{title}</h3>
      <div className="flex justify-start items-end">
        <div className="text-4xl sm:text-5xl font-bold text-white text-left mt-4 mr-2">
          {price}/
        </div>
        <div className="text-slate-400 font-semibold">Final</div>
      </div>
      <p className="mt-4 mb-6 text-slate-300 text-left text-sm md:text-lg">
        {subtitle}
      </p>
      <ul className="mb-2 2xl:mb-6">
        <li className="mb-4 flex">
          <div className="rounded-full bg-transparent w-5 h-5 flex justify-center items-center mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="20px"
              height="20px"
              className="fill-yellow-200"
            >
              <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
            </svg>
          </div>
          <span className="text-yellow-200 font-semibold text-sm">
            {description}
          </span>
        </li>

        <li className="mb-4 flex">
          <div className="rounded-full bg-transparent w-5 h-5 flex justify-center items-center mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="20px"
              height="20px"
              className="fill-yellow-200"
            >
              <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
            </svg>
          </div>
          <span className="text-yellow-200 font-semibold text-sm">{check1}</span>
        </li>
        <li className="mb-4 flex">
          <div className="rounded-full bg-transparent w-5 h-5 flex justify-center items-center mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="20px"
              height="20px"
              className="fill-yellow-200"
            >
              <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
            </svg>
          </div>
          <span className="text-yellow-200 font-semibold text-sm">
            Dominio incluido por 1 año
          </span>
        </li>
        <li className="mb-4 flex">
          <div className="rounded-full bg-transparent w-5 h-5 flex justify-center items-center mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="20px"
              height="20px"
              className="fill-yellow-200"
            >
              <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
            </svg>
          </div>
          <span className="text-yellow-200 font-semibold text-sm">
            Sección de contacto
          </span>
        </li>
        <li className="mb-4 flex">
          <div className="rounded-full bg-transparent w-5 h-5 flex justify-center items-center mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="20px"
              height="20px"
              className="fill-yellow-200"
            >
              <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
            </svg>
          </div>
          <span className="text-yellow-200 font-semibold text-sm">
            Carrousel de imágenes
          </span>
        </li>
        <li className="mb-4 flex">
          <div className="rounded-full bg-transparent w-5 h-5 flex justify-center items-center mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="20px"
              height="20px"
              className="fill-yellow-200"
            >
              <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
            </svg>
          </div>
          <span className="text-yellow-200 font-semibold text-sm">
            Botón flotante de WhatsApp
          </span>
        </li>
        <li className="mb-4 flex">
          <div className="rounded-full bg-transparent w-5 h-5 flex justify-center items-center mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="20px"
              height="20px"
              className="fill-yellow-200"
            >
              <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
            </svg>
          </div>
          <span className="text-yellow-200 font-semibold text-sm">
            Links a tus redes sociales
          </span>
        </li>
        <li className="mb-4 flex">
          <div className="rounded-full bg-transparent w-5 h-5 flex justify-center items-center mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="20px"
              height="20px"
              className="fill-yellow-200"
            >
              <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
            </svg>
          </div>
          <span className="text-yellow-200 font-semibold text-sm">
            Diseño para pc, tablets y celulares.
          </span>
        </li>
      </ul>
      <a
        href={href}
        className="inline-block cursor-pointer text-slate-800 text-center py-2 px-4 w-full rounded-lg bg-white hover:bg-slate-800 hover:text-white border-2 border-white font-bold leading-loose mt-4 text-sm md:text-lg"
      >
      Ver más
      </a>
    </div>
  );
};

export default CardPrice;
