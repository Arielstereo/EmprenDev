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
            className={
              "relative glass-card rounded-lg border bg-transparent border-gray-200 dark:border-zinc-700 shadow-sm overflow-hidden transition-colors"
            }
            data-aos={it.aos ?? undefined}
          >
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={`panel-${i}`}
              id={`accordion-${i}`}
              onClick={() => toggle(i)}
              className="w-full text-left px-5 py-4 flex items-start justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              <div className="flex items-center gap-4">
                <span className="inline-flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-blue-500 text-white shadow-sm">
                  <span className="text-xl md:text-2xl">?</span>
                </span>
                <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-500 hover:dark:text-blue-500 dark:text-gray-100">
                  {it.title}
                </h3>
              </div>

              <svg
                className={`h-6 w-6 transform transition-transform duration-200 ${
                  isOpen ? "rotate-180" : "rotate-0"
                } text-gray-600 dark:text-gray-200`}
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
              <p className="text-gray-500 dark:text-gray-400">{it.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
