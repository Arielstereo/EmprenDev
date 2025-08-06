import { useState } from "react";

export default function AppointmentForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    try {
      await fetch(import.meta.env.PUBLIC_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setSuccess(true);
      setForm({ name: "", phone: "", date: "", time: "" });
    } catch (err) {
      alert("Error al enviar la cita.");
    }
    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" rounded-lg shadow-lg p-6 w-full max-w-3xl mx-auto my-8"
    >
      <h3 className="text-2xl font-bold mb-4 text-center text-zinc-900 dark:text-white">
        Agenda una reunión online
      </h3>
      <div className="flex flex-col md:flex-row md:items-end gap-4">
        <div className="flex-1">
          <label className="block mb-1 font-medium text-zinc-700 dark:text-zinc-200">
            Nombre
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            autoComplete="off"
            required
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400 dark:bg-zinc-700 dark:text-white"
          />
        </div>
        <div className="flex-1">
          <label className="block mb-1 font-medium text-zinc-700 dark:text-zinc-200">
            Teléfono
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            autoComplete="off"
            required
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400 dark:bg-zinc-700 dark:text-white"
          />
        </div>
        <div className="flex-1">
          <label className="block mb-1 font-medium text-zinc-700 dark:text-zinc-200">
            Fecha
          </label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400 dark:bg-zinc-700 dark:text-white"
          />
        </div>
        <div className="flex-1">
          <label className="block mb-1 font-medium text-zinc-700 dark:text-zinc-200">
            Hora
          </label>
          <input
            type="time"
            name="time"
            value={form.time}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400 dark:bg-zinc-700 dark:text-white"
          />
        </div>
        <div className="flex-none md:self-end">
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors duration-200 disabled:opacity-50"
          >
            {loading ? "Enviando..." : "Agendar cita"}
          </button>
        </div>
      </div>
      {success && (
        <p className="mt-4 text-green-600 text-center">
          ¡Cita agendada correctamente!
        </p>
      )}
    </form>
  );
}
