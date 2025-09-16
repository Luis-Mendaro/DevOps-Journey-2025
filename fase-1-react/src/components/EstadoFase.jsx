function EstadoFase({ nombre, estado }) {
  function iconoEstado(estado) {
    if (estado === "en curso") return "🔄️";
    if (estado === "completado") return "👍";
    if (estado === "pendiente") return "⌛";
    return "❓";
  }

  return (
    <li>
      <span style={{ marginRight: "8px" }}>{iconoEstado(estado)}</span>
      {nombre} - {estado}
    </li>
  );
}

export default EstadoFase;
