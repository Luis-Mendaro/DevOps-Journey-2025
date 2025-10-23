// /backend-service/server.js
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { registrarEvento } = require("./services/notionService"); // <-- ¡Necesita el notionService.js que ya corregiste!

// Cargar variables de entorno del archivo .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// MIDDLEWARES
app.use(cors());
app.use(express.json());

// ----------------------------------------------------------------------
// RUTA CENTRAL DE REGISTRO
// ----------------------------------------------------------------------

app.post("/api/registro", async (req, res) => {
  // Los datos del cuerpo de la petición (req.body) deben contener:
  // { bd_destino: "BITACORA" | "DECISIONES" | "FASES", ...otras variables }
  const eventData = req.body;

  console.log(`📡 Recibiendo solicitud para: ${eventData.bd_destino}`);

  try {
    const result = await registrarEvento(eventData);

    res.status(200).json({
      success: true,
      message: "Registro exitoso en Notion.",
      details: result.result,
    });
  } catch (error) {
    console.error(`🚨 Fallo en la ruta /api/registro: ${error.message}`);

    res.status(500).json({
      success: false,
      message: "Error interno del servidor o fallo de automatización.",
      error: error.message,
    });
  }
});

// ----------------------------------------------------------------------
// INICIO DEL SERVIDOR
// ----------------------------------------------------------------------

app.listen(PORT, () => {
  console.log(`🚀 Backend del sistema escuchando en http://localhost:${PORT}`);
});
