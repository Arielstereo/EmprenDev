const Logo = () => {
  return (
    <a
      href="/"
      className="flex items-center gap-2 shrink-0 focus-visible:outline-accent"
      aria-label="Ir al inicio de EmprenDev"
    >
      <img
        src="./logo_png.png"
        className="w-10 h-10 rounded-full ring-1 ring-border-default object-cover"
        alt="logo EmprenDev"
      />
      <span className="text-lg font-bold text-txt-primary hover:text-accent dark:hover:text-accent-hover transition-colors">
        EmprenDev
      </span>
    </a>
  );
};

export default Logo;
