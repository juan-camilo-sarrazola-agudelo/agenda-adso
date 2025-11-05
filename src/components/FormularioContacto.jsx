import { useState } from "react";

export default function FormularioContacto({ onAgregar }) {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    etiqueta: "",
    empresa: "",
  });

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.nombre || !form.telefono || !form.correo || !form.empresa) return;
    onAgregar(form);
    setForm({ nombre: "", telefono: "", correo: "", empresa: "", etiqueta: ""}) ;
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <input
        name="nombre"
        value={form.nombre}
        onChange={onChange}
        placeholder="Nombre"
      />
      <input
        name="telefono"
        value={form.telefono}
        onChange={onChange}
        placeholder="Teléfono"
      />
      <input
        name="correo"
        value={form.correo}
        onChange={onChange}
        placeholder="Correo"
      />
      <input
        name="empresa"
        value={form.empresa}
        onChange={onChange}
        placeholder="empresa"
      />
      <input
        name="etiqueta"
        value={form.etiqueta}
        onChange={onChange}
        placeholder="Etiqueta opcional"
      />
      <button className="btn-agregar">Agregar contacto</button>
    </form>
  );
}
