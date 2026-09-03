import { useState, useRef, useEffect } from "react";

export default function Accordion({ items = [], className = "" }) {
  const [openIndex, setOpenIndex] = useState(null);
  const panelRefs = useRef([]);

  useEffect(() => {
    // asegurar que todos los paneles estén colapsados al iniciar
    panelRefs.current.forEach((el) => {
      if (el) el.style.maxHeight = "0px";
    });
  }, []);

  const toggle = (i) => {
    const prev = openIndex;

    // colapsar el anterior si existe
    if (prev !== null && panelRefs.current[prev]) {
      panelRefs.current[prev].style.maxHeight = "0px";
    }

    // si se hace click en el mismo, cerramos
    if (prev === i) {
      setOpenIndex(null);
      return;
    }

    // abrir nuevo
    setOpenIndex(i);
    const panel = panelRefs.current[i];
    if (panel) {
      // Forzar reflow antes de setear para asegurar transición
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((it, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className="relative glass-card rounded-card border-border-default overflow-hidden transition-colors"
            data-aos={it.aos ?? undefined}
          >
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={`panel-${i}`}
              id={`accordion-${i}`}
              onClick={() => toggle(i)}
              className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset"
            >
              <div className="flex items-center gap-4">
                <span className="inline-flex h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-full bg-accent-subtle text-accent dark:text-accent-hover text-xl md:text-2xl font-bold shrink-0">
                  ?
                </span>
                <h3 className="text-base sm:text-lg font-semibold text-txt-primary transition-colors">
                  {it.title}
                </h3>
              </div>

              <svg
                className={`h-5 w-5 shrink-0 transform transition-transform duration-200 ${
                  isOpen ? "rotate-180" : "rotate-0"
                } text-txt-muted`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 9l6 6 6-6"
                />
              </svg>
            </button>

            <div
              id={`panel-${i}`}
              role="region"
              aria-labelledby={`accordion-${i}`}
              aria-hidden={!isOpen}
              ref={(el) => (panelRefs.current[i] = el)}
              className={`px-5 pb-5 overflow-hidden transition-[max-height,opacity,transform] duration-300 ease-in-out ${
                isOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-2"
              }`}
              // maxHeight se controla dinámicamente vía JS para transición suave
            >
              <p className="text-txt-secondary">{it.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
