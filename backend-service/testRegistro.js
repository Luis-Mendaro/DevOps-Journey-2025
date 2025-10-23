require("dotenv").config({ path: "./.env" }); // Carga las variables de entorno
const { registrarEvento } = require("./services/notionService");

const dataDecision = {
  bd_destino: "DECISIONES",
  contenido_titulo: "Decisión: Usar 'node-fetch' en lugar de 'axios' para HTTP",
  tipo_error_decision: "Decisión de Código/Librería",
  detalle_completo:
    "Se elige node-fetch para el backend sobre axios, con el objetivo de reforzar el entendimiento del fetch nativo, el manejo de Promesas, y la coherencia del API de JavaScript entre el frontend y el backend, como parte del objetivo de reforzar las bases técnicas del bootcamp.",
  fecha_registro: new Date().toISOString().split("T")[0],
};

registrarEvento(dataDecision)
  .then((result) => {
    console.log("✅ DECISIÓN REGISTRADA con éxito en Notion!");
  })
  .catch((error) => {
    console.error("❌ ERROR al registrar la decisión:", error.message);
  });
