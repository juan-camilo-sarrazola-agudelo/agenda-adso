export default function ContactoCard({
  nombre,
  telefono,
  correo,
  etiqueta,
  onEliminar,
}) {
  return (
    <article className="bg-white rounded-xl border border-gray-200 shadow-sm p-4">
      <h3 className="text-xl font-semibold text-morado-oscuro mb-2">{nombre}</h3>
      <p className="text-gray-700 mb-1">📞 {telefono}</p>
      <p className="text-gray-700 mb-1">✉ {correo}</p>
      {etiqueta && (
        <p className="inline-block text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded mt-1">
          {etiqueta}
        </p>
      )}
      <div className="flex justify-end mt-3">
        <button
          onClick={() => onEliminar(correo)}
          className="bg-red-600 hover:bg-red-700 text-white text-sm px-3 py-1.5 rounded-lg"
        >
          Eliminar
        </button>
      </div>
    </article>
  );
}