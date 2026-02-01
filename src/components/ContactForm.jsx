import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

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
          console.log("SUCCESS!");
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
            theme: "light",
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
    <div
      data-aos="zoom-in-up"
      className="w-full mx-auto mb-8 sm:mb-12 p-3 sm:p-4 lg:p-0 border-2 glass-card rounded-xl"
    >
      <form
        onSubmit={sendEmail}
        className="flex flex-col justify-center items-center gap-4 sm:gap-6 p-4 sm:p-8 lg:p-12"
      >
        <div className="w-full flex flex-col gap-3 sm:gap-4">
          <h2 className="text-slate-800 dark:text-white text-2xl sm:text-3xl lg:text-3xl mb-2 sm:mb-4 text-center lg:text-left">
            Envianos un mensaje
          </h2>
          <div>
            <label
              className="block text-sm sm:text-base md:text-lg font-medium mb-2 text-slate-800 dark:text-slate-100"
              htmlFor="username"
            >
              <span
                className="icon-[fa6-solid--user] mx-2 h-5 w-5 sm:h-6 sm:w-6 inline-block"
                role="img"
                aria-hidden="true"
              ></span>
              Nombre
            </label>
            <input
              className="min-h-[48px] leading-[48px] bg-gray-100 dark:bg-[#1B2635] border border-blue-500 rounded-xl focus:outline-none focus:border-[#86b7fe] w-full px-4 sm:px-5 text-sm sm:text-base"
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
              className="block text-sm sm:text-base md:text-lg font-medium mb-2 text-slate-800 dark:text-slate-100"
              htmlFor="email"
            >
              <span
                className="icon-[entypo--email] mx-2 h-5 w-5 sm:h-6 sm:w-6 inline-block"
                role="img"
                aria-hidden="true"
              ></span>
              Correo Electrónico
            </label>
            <input
              className="min-h-[48px] leading-[48px] bg-gray-100 dark:bg-[#1B2635] border border-blue-500 rounded-xl focus:outline-none focus:border-[#86b7fe] w-full px-4 sm:px-5 text-sm sm:text-base"
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
              className="block text-sm sm:text-base md:text-lg font-medium mb-2 text-slate-800 dark:text-slate-100"
              htmlFor="phone"
            >
              <span
                className="icon-[oi--phone] mx-2 h-5 w-5 sm:h-6 sm:w-6 inline-block"
                role="img"
                aria-hidden="true"
              ></span>
              Teléfono
            </label>
            <input
              className="min-h-[48px] leading-[48px] bg-gray-100 dark:bg-[#1B2635] border border-blue-500 rounded-xl focus:outline-none focus:border-[#86b7fe] w-full px-4 sm:px-5 text-sm sm:text-base"
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
              className="block text-sm sm:text-base md:text-lg font-medium mb-2 text-slate-800 dark:text-slate-100"
              htmlFor="message"
            >
              <span
                className="icon-[mynaui--message] mx-2 h-5 w-5 sm:h-6 sm:w-6 inline-block"
                role="img"
                aria-hidden="true"
              ></span>
              Mensaje
            </label>
            <textarea
              className="bg-gray-100 dark:bg-[#1B2635] border border-blue-500 rounded-xl focus:outline-none focus:border-[#86b7fe] w-full px-4 sm:px-5 py-3 text-sm sm:text-base"
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
            className="rounded-lg bg-slate-800 dark:bg-slate-100 hover:bg-slate-700 dark:hover:bg-slate-200 px-6 sm:px-8 py-3 w-full sm:w-auto text-center font-semibold text-slate-100 dark:text-slate-800 outline-none transition duration-100 mt-2"
          >
            Enviar consulta
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ContactForm;
