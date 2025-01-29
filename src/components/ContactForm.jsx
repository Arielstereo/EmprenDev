import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const ContactForm = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000
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
      .sendForm(import.meta.env.PUBLIC_SERVICE, import.meta.env.PUBLIC_TEMPLATE, e.target, {
        publicKey: import.meta.env.PUBLIC_KEY,
      })
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
    <div data-aos="zoom-in-up" className="w-[325px] md:w-[400px] lg:w-fit mx-auto mb-64 lg:mb-12 p-4">
      <form
        onSubmit={sendEmail}
        className="flex flex-col lg:flex-row gap-4 md:gap-8"
      >
        <div className="flex flex-col gap-4">
          <div>
            <label
              className="block md:text-lg dark:text-white font-medium mb-1"
              htmlFor="username"
            >
              <span class="icon-[fa6-solid--user] mx-2 h-6 w-6" role="img" aria-hidden="true"></span>
              Nombre
            </label>
            <input
              className="w-full lg:w-96 p-4 rounded-md border border-slate-600"
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
              className="block md:text-lg font-medium mb-1 dark:text-white"
              htmlFor="email"
            >
              <span class="icon-[entypo--email] mx-2 h-6 w-6" role="img" aria-hidden="true"></span>
              Correo Electrónico
            </label>
            <input
              className="w-full p-4 rounded-md border border-slate-600"
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
              className="block md:text-lg font-medium mb-1 dark:text-white" 
              htmlFor="phone"
            >
              <span class="icon-[oi--phone] mx-2 h-6 w-6" role="img" aria-hidden="true"></span>
              Teléfono
            </label>
            <input
              className="w-full p-4 rounded-md border border-slate-600"
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
              className="block md:text-lg font-medium mb-1 dark:text-white"
              htmlFor="message"
            >
              <span class="icon-[mynaui--message] mx-2 h-6 w-6" role="img" aria-hidden="true"></span>
              Mensaje
            </label>
            <textarea
              className="w-full lg:w-96 rounded-md p-4 h-48 border border-slate-600"
              id="msg"
              name="msg"
              placeholder="Escribe tu consulta"
              value={formData.msg}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="rounded-lg bg-indigo-500 px-8 py-3 mt-2 text-center md:text-lg font-semibold text-white outline-none ring-slate-100 transition duration-100 hover:bg-indigo-600"
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
