import EstadoFase from "./EstadoFase";

function DashboardEstudio() {
  const fases = [
    { nombre: "React", estado: "en curso" },
    { nombre: "Docker", estado: "en curso" },
    { nombre: "CI/CD", estado: "en curso" },
    { nombre: "Automatizacion IA", estado: "pendiente" },
  ];

  return (
    <div>
      <ul>
        {fases.map((fase) => (
          <EstadoFase
            key={fase.nombre}
            nombre={fase.nombre}
            estado={fase.estado}
          />
        ))}
      </ul>
      <button onClick={() => console.log("Generando contenido ...")}>
        Generar contenido
      </button>
    </div>
  );
}

export default DashboardEstudio;
