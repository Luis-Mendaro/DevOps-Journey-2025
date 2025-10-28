import React from "react";
import EstadoFase from "./EstadoFase";
import { useApi } from "../hooks/useApi"; // <-- CORRECCIÓN 1: Importación con nombre

function DashboardEstudio() {
  // <-- CORRECCIÓN 2: El hook DEBE ser llamado como función con ()
  const { postData, loading, error, success } = useApi();

  const fases = [
    { nombre: "React", estado: "en curso" },
    { nombre: "Docker", estado: "en curso" },
    { nombre: "CI/CD", estado: "en curso" },
    { nombre: "Automatizacion IA", estado: "pendiente" },
  ];

  const handleGenerarContenido = async () => {
    const dataToSend = {
      bd_destino: "BITACORA",
      evento: "Intento de generación de contenido por IA",
      timestamp: new Date().toISOString(),
    };
    try {
      await postData("/registro", dataToSend);
    } catch (err) {
      // El error 'error' ya viene del hook, aquí solo lo loggeamos si queremos
      console.error("Fallo de conexión en Dashboard:", error);
    }
  };

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

      <button onClick={handleGenerarContenido} disabled={loading}>
        {loading ? "Generando y Registrando..." : "Generar contenido"}
      </button>

      {success && (
        <p style={{ color: "green" }}>
          ✅ Evento registrado con éxito en Notion.
        </p>
      )}
      {error && (
        <p style={{ color: "red" }}>
          🚨 Error: No se pudo conectar al Backend o hubo un fallo: {error}
        </p>
      )}
    </div>
  );
}

export default DashboardEstudio;
