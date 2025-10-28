const { registrarEvento } = require("../services/notionService");

const registrarEntrada = async (req, res) => {
  const eventData = req.body;
  console.log(`📡 Solicitud recibida para la BD: ${eventData.bd_destino}`);

  try {
    const result = await registrarEvento(eventData);
    res.status(200).json({
      success: true,
      message: "Registro exitoso.",
      details: result.result,
    });
  } catch (error) {
    console.error(`🚨 Fallo en controlador registrarEntrada: ${error.message}`);
    res.status(500).json({
      success: false,
      message: "Error interno del servidor o fallo de automatización.",
      error: error.message,
    });
  }
};
module.exports = { registrarEntrada };
