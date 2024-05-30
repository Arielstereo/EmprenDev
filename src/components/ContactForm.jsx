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
    <div data-aos="zoom-in-up" className="w-[330px] md:w-[400px] lg:w-fit mx-auto p-8 lg:p-12 mb-64 lg:mb-12 bg-gradient-to-r from-blue-800 to-blue-600 shadow-md shadow-black dark:shadow-white rounded-lg">
      <form
        onSubmit={sendEmail}
        className="flex flex-col gap-4 md:gap-8"
      >
        <div className="flex flex-col gap-4">
          <div>
            <label
              className="block text-sm text-white font-medium mb-1"
              htmlFor="username"
            >
              Nombre
            </label>
            <input
              className="w-full lg:w-96 p-2 rounded-md"
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
              className="block text-sm font-medium mb-1 text-white"
              htmlFor="email"
            >
              Correo Electrónico
            </label>
            <input
              className="w-full p-2 rounded-md"
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
              className="block text-sm font-medium mb-1 text-white" 
              htmlFor="phone"
            >
              Teléfono
            </label>
            <input
              className="w-full p-2 rounded-md"
              id="phone"
              name="phone"
              placeholder="1122334455"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div>
            <label
              className="block text-sm font-medium mb-1 text-white"
              htmlFor="message"
            >
              Mensaje
            </label>
            <textarea
              className="w-full lg:w-96 rounded-md p-4 h-32"
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
            className="w-full bg-slate-100 hover:bg-slate-800 hover:text-white border-white border-2 p-2 text-black font-semibold rounded-md text-lg"
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
