import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const inputClass =
  "w-full min-h-[48px] rounded-control bg-surface-1 border border-border-default px-4 sm:px-5 text-sm sm:text-base text-txt-primary placeholder:text-txt-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent-subtle transition-colors";

const ContactForm = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    msg: "",
  });

  const sendEmail = async (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.PUBLIC_SERVICE,
        import.meta.env.PUBLIC_TEMPLATE,
        e.target,
        {
          publicKey: import.meta.env.PUBLIC_KEY,
        },
      )
      .then(
        () => {
          setFormData({
            username: "",
            email: "",
            phone: "",
            msg: "",
          });
          toast.success("Tu consulta ha sido enviada!", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="w-full mx-auto mb-8 sm:mb-12 glass-card rounded-card">
      <form
        onSubmit={sendEmail}
        className="flex flex-col gap-6 p-6 sm:p-8 lg:p-10"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-txt-primary text-center lg:text-left">
          Envianos un mensaje
        </h2>

        <div>
          <label
            className="flex items-center gap-1.5 text-sm sm:text-base font-medium mb-2 text-txt-secondary"
            htmlFor="username"
          >
            <span
              className="icon-[fa6-solid--user] h-4 w-4 text-accent"
              role="img"
              aria-hidden="true"
            ></span>
            Nombre
          </label>
          <input
            className={inputClass}
            id="username"
            name="username"
            placeholder="Juan Perez"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label
            className="flex items-center gap-1.5 text-sm sm:text-base font-medium mb-2 text-txt-secondary"
            htmlFor="email"
          >
            <span
              className="icon-[entypo--email] h-4 w-4 text-accent"
              role="img"
              aria-hidden="true"
            ></span>
            Correo Electrónico
          </label>
          <input
            className={inputClass}
            id="email"
            name="email"
            placeholder="juan@gmail.com"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label
            className="flex items-center gap-1.5 text-sm sm:text-base font-medium mb-2 text-txt-secondary"
            htmlFor="phone"
          >
            <span
              className="icon-[oi--phone] h-4 w-4 text-accent"
              role="img"
              aria-hidden="true"
            ></span>
            Teléfono
          </label>
          <input
            className={inputClass}
            id="phone"
            name="phone"
            placeholder="1122334455"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label
            className="flex items-center gap-1.5 text-sm sm:text-base font-medium mb-2 text-txt-secondary"
            htmlFor="message"
          >
            <span
              className="icon-[mynaui--message] h-4 w-4 text-accent"
              role="img"
              aria-hidden="true"
            ></span>
            Mensaje
          </label>
          <textarea
            className={`${inputClass} py-3 min-h-[110px]`}
            id="msg"
            name="msg"
            placeholder="Escribe tu consulta"
            value={formData.msg}
            onChange={handleChange}
            required
            rows={4}
          />
        </div>

        <button
          type="submit"
          className="w-full sm:w-auto rounded-lg bg-accent hover:bg-accent-hover px-8 py-3.5 text-center font-semibold text-white shadow-glow transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Enviar consulta
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ContactForm;
