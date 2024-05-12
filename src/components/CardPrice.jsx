import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const CardPrice = ({title, price, subtitle,description, check1, href, animation}) => {

  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, []);

  return (
    <div data-aos={animation} className="p-6 md:p-8 z-10 rounded-3xl shadow-xl shadow-black w-full md:w-[450px] md:h-[580px] hover:-translate-y-1 hover:scale-105 transition duration-700 ease-in-out hover:bg-slate-100">
      <h3 className="mb-2 text-3xl md:text-4xl text-left">{title}</h3>
      <div className="flex justify-start items-end">
        <div className="text-4xl sm:text-5xl font-bold text-slate-950 text-left mt-4 mr-2">
          {price}/
        </div>
        <div className="text-slate-600 font-semibold">Final</div>
      </div>
      <p className="mt-4 mb-6 text-blue-600 text-left text-sm md:text-lg">
        {subtitle}
      </p>
      <ul className="mb-2 2xl:mb-6 text-black">
        <li className="mb-4 flex">
          <div className="rounded-full bg-transparent w-5 h-5 flex justify-center items-center mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="20px"
              height="20px"
              className="fill-customSecondary"
            >
              <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
            </svg>
          </div>
          <span className="text-slate-950 font-semibold text-sm">
            {description}
          </span>
        </li>
        <li class="mb-4 flex">
          <div class="rounded-full bg-transparent w-5 h-5 flex justify-center items-center mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="20px"
              height="20px"
              className="fill-customSecondary"
            >
              <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
            </svg>
          </div>
          <span class="text-slate-950 font-semibold text-sm">
            Dominio incluido por 1 año
          </span>
        </li>
        <li class="mb-4 flex">
          <div class="rounded-full bg-transparent w-5 h-5 flex justify-center items-center mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="20px"
              height="20px"
              class="fill-customSecondary"
            >
              <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
            </svg>
          </div>
          <span className="text-slate-950 font-semibold text-sm">{check1}</span>
        </li>
        <li className="mb-4 flex">
          <div className="rounded-full bg-transparent w-5 h-5 flex justify-center items-center mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="20px"
              height="20px"
              className="fill-customSecondary"
            >
              <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
            </svg>
          </div>
          <span className="text-slate-950 font-semibold text-sm">
            Formulario de contacto
          </span>
        </li>
        <li className="mb-4 flex">
          <div className="rounded-full bg-transparent w-5 h-5 flex justify-center items-center mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="20px"
              height="20px"
              className="fill-customSecondary"
            >
              <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
            </svg>
          </div>
          <span className="text-slate-950 font-semibold text-sm">
            Botón flotante de WhatSaap
          </span>
        </li>
        <li className="mb-4 flex">
          <div className="rounded-full bg-transparent w-5 h-5 flex justify-center items-center mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="20px"
              height="20px"
              className="fill-customSecondary"
            >
              <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
            </svg>
          </div>
          <span className="text-slate-950 font-semibold text-sm">
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
              className="fill-customSecondary"
            >
              <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
            </svg>
          </div>
          <span className="text-slate-950 font-semibold text-sm">
            Diseño para pc, tablets y celulares.
          </span>
        </li>
      </ul>
      <a
        href={href}
        className="inline-block cursor-pointer text-center py-2 px-4 w-full rounded-xl rounded-t-xl bg-blue-600 hover:bg-white hover:text-blue-600 hover:border-2 hover:border-blue-600 text-white font-bold leading-loose mt-4 text-sm md:text-lg"
      >
        Ver
      </a>
    </div>
  );
};

export default CardPrice;
