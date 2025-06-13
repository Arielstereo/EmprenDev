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
        }
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
        }
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
    <div data-aos="zoom-in-up" className="w-full mx-auto mb-12 p-4">
      <form
        onSubmit={sendEmail}
        className="flex flex-col lg:flex-row gap-4 md:gap-8"
      >
        <div className="flex flex-col gap-4">
          <div>
            <label
              className="block md:text-lg bold text-slate-100 font-medium mb-1"
              htmlFor="username"
            >
              <span
                className="icon-[fa6-solid--user] mx-2 h-6 w-6"
                role="img"
                aria-hidden="true"
              ></span>
              Nombre
            </label>
            <input
              className="min-h-[48px] leading-[48px] bg-[#3A384D] dark:bg-[#1B2635] border border-transparent rounded-xl focus:outline-none focus:border focus:border-[#86b7fe] w-full md:w-96 px-5"
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
              className="block md:text-lg font-medium mb-1 bold text-slate-100"
              htmlFor="email"
            >
              <span
                className="icon-[entypo--email] mx-2 h-6 w-6"
                role="img"
                aria-hidden="true"
              ></span>
              Correo Electrónico
            </label>
            <input
              className="min-h-[48px] leading-[48px] bg-[#3A384D] dark:bg-[#1B2635] border border-transparent rounded-xl focus:outline-none focus:border focus:border-[#86b7fe] w-full md:w-96 px-5"
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
              className="block md:text-lg font-medium mb-1 bold text-slate-100"
              htmlFor="phone"
            >
              <span
                className="icon-[oi--phone] mx-2 h-6 w-6"
                role="img"
                aria-hidden="true"
              ></span>
              Teléfono
            </label>
            <input
              className="min-h-[48px] leading-[48px] bg-[#3A384D] dark:bg-[#1B2635] border border-transparent rounded-xl focus:outline-none focus:border focus:border-[#86b7fe] w-full md:w-96 px-5"
              id="phone"
              name="phone"
              placeholder="1122334455"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <label
              className="block md:text-lg font-medium mb-1 bold text-slate-100 md:w-96"
              htmlFor="message"
            >
              <span
                className="icon-[mynaui--message] mx-2 h-6 w-6"
                role="img"
                aria-hidden="true"
              ></span>
              Mensaje
            </label>
            <textarea
              className="min-h-[48px] leading-[48px] bg-[#3A384D] dark:bg-[#1B2635] border border-transparent rounded-xl focus:outline-none focus:border focus:border-[#86b7fe] w-full px-5"
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
            className="rounded-lg bg-slate-100 px-8 py-3 mt-2 text-center font-semibold text-slate-900 outline-none ring-slate-100 transition duration-100 hover:bg-slate-300"
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
