import { useEffect, useState } from "react";
// Importamos nuestras funciones de API centralizadas
import { listarContactos, crearContacto, eliminarContactoPorId } from "./api";
// Componentes de UI
import FormularioContacto from "./components/FormularioContacto";
import ContactoCard from "./components/ContactoCard";

export default function App() {
  // Estado con lista de contactos traída desde la API
  const [contactos, setContactos] = useState([]);
  // Estado de carga para mostrar "Cargando..."
  const [cargando, setCargando] = useState(true);
  // Estado de error para mensajes en pantalla
  const [error, setError] = useState("");

  // useEffect: se ejecuta al montar el componente
  useEffect(() => {
    (async () => {
      try {
        // Pedimos la lista a la API (GET)
        const data = await listarContactos();
        // Guardamos en estado para renderizar
        setContactos(data);
      // eslint-disable-next-line no-unused-vars
      } catch (e) {
        // Si falla, mostramos mensaje
        setError("No se pudo cargar la lista");
      } finally {
        // Quitamos el estado de carga
        setCargando(false);
      }
    })();
  }, []);

  // Agregar contacto usando la API (POST)
  const agregarContacto = async (nuevo) => {
    try {
      // Creamos en la API
      const creado = await crearContacto(nuevo);
      // Actualizamos el estado agregando el nuevo contacto
      setContactos((prev) => [...prev, creado]);
    } catch {
      // Si falla el POST, mostramos alerta
      alert("No se pudo crear el contacto");
    }
  };

  // Eliminar contacto usando la API (DELETE)
  const eliminarContacto = async (id) => {
    try {
      // Eliminamos en la API
      await eliminarContactoPorId(id);
      // Filtramos el eliminado de la UI
      setContactos((prev) => prev.filter((c) => c.id !== id));
    } catch {
      // Si falla, notificamos
      alert("No se pudo eliminar el contacto");
    }
  };

  return (
    // Fondo gris claro para toda la pantalla
    <main className="min-h-screen bg-gray-50">
      {/* Encabezado superior centrado/limpio */}
      <header className="max-w-6xl mx-auto px-6 pt-8">
        {/* Línea de contexto pequeña */}
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
          PROGRAMA ADSO
        </p>
        {/* Título principal en morado */}
        <h1 className="text-4xl md:text-5xl font-black text-purple-600 text-center md:text-left">
          Agenda ADSO v5
        </h1>
      </header>

      {/* Contenido principal */}
      <section className="max-w-6xl mx-auto px-6 mt-6">
        {/* Tarjeta blanca que envuelve el formulario */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8">
          {/* Pasamos la función agregarContacto al formulario */}
          <FormularioContacto onAgregar={agregarContacto} />
        </div>

        {/* Mensajes de estado */}
        <div className="mt-6 space-y-4">
          {/* Si está cargando, mostramos mensaje */}
          {cargando && <p className="text-gray-500">Cargando...</p>}
          {/* Si hay error, mostramos en rojo */}
          {error && <p className="text-red-600">{error}</p>}

          {/* Listado de tarjetas de contacto */}
          {contactos.map((c) => (
            // key para ayudar a React a identificar cada elemento
            <ContactoCard
              key={c.id ?? c.correo}
              {...c} // Desglosamos props (id, nombre, telefono, correo, etiqueta)
              onEliminar={() => eliminarContacto(c.id)} // Pasamos callback con id
            />
          ))}
        </div>
      </section>
    </main>
  );
}