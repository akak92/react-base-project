import React, { useState } from "react";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const initialData: FormData = { name: "", email: "", message: "" };

export default function ContactForm() {
  const [data, setData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submittedMsg, setSubmittedMsg] = useState<string>("");

  const validate = (d: FormData) => {
    const e: Partial<FormData> = {};
    if (!d.name.trim()) e.name = "El nombre es requerido";
    if (!d.email.trim()) e.email = "El email es requerido";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) e.email = "Email inválido";
    if (!d.message.trim()) e.message = "El mensaje es requerido";
    return e;
    };

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const eValid = validate(data);
    setErrors(eValid);
    if (Object.keys(eValid).length) {
      setSubmittedMsg("");
      return;
    }
    // simulación de envío
    await new Promise(r => setTimeout(r, 150));
    setSubmittedMsg(`¡Gracias ${data.name}! Te escribimos a ${data.email}.`);
    setData(initialData);
  };

  return (
    <form onSubmit={onSubmit} className="container form-grid" aria-label="formulario de contacto">
      <h2>Contacto</h2>

      <div>
        <label htmlFor="name">Nombre</label>
        <input
          id="name"
          name="name"
          value={data.name}
          onChange={onChange}
          placeholder="Tu nombre"
          aria-invalid={!!errors.name}
        />
        {errors.name && <div role="alert" className="error">{errors.name}</div>}
      </div>

      <div>
        <label htmlFor="email">Correo</label>
        <input
          id="email"
          name="email"
          value={data.email}
          onChange={onChange}
          placeholder="tu@email.com"
          aria-invalid={!!errors.email}
        />
        {errors.email && <div role="alert" className="error">{errors.email}</div>}
      </div>

      <div>
        <label htmlFor="message">Mensaje</label>
        <textarea
          id="message"
          name="message"
          value={data.message}
          onChange={onChange}
          rows={4}
          placeholder="Contame en qué te puedo ayudar…"
          aria-invalid={!!errors.message}
        />
        {errors.message && <div role="alert" className="error">{errors.message}</div>}
      </div>

      <button type="submit">Enviar</button>

      {submittedMsg && (
        <div aria-live="polite" className="success" data-testid="success-msg">
          {submittedMsg}
        </div>
      )}
    </form>
  );
}
