import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    msg: "",
  });

  const sendEmail = async (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ohdovz7", "template_da4yhop", e.target, {
        publicKey: "Of7EFnHz3zmSna4Kc",
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
    <div className="w-full md:w-3/4 lg:w-full mx-auto p-8 lg:px-20 lg:py-16 bg-slate-800 shadow-md shadow-black rounded-lg">
      <form
        onSubmit={sendEmail}
        className="flex flex-col lg:flex-row gap-4 md:gap-16"
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
            className="w-full bg-blue-600 hover:bg-blue-800 border hover:border-white hover:border-2 p-2 text-white rounded-md text-lg"
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