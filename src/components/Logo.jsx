const Logo = () => {
  return (
    <div className="absolute left-0 md:left-10 top-7">
      <a
        href="/"
        className="flex flex-row mx-0 items-center mt-1 focus-visible:outline-blue-500"
        aria-label="Ir al inicio de EmprenDev"
      >
        <img
          src="./logo_png.webp"
          className="w-16 h-16 rounded-full"
          alt="logo EmprenDev"
        />
        <span className="text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-300 text-lg font-semibold">
          EmprenDev
        </span>
      </a>
    </div>
  );
};

export default Logo;
