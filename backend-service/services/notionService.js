const { default: fetch } = require("node-fetch");

const MAKE_WEBHOOK_URL = process.env.MAKE_WEBHOOK_URL;

/**  
   @param {object} data 
   @returns {Promise<object>} 
   */

const registrarEvento = async (data) => {
  if (!MAKE_WEBHOOK_URL) {
    throw new Error(
      "❌ Error: La variable de entorno MAKE_WEBHOOK_URL no está definida."
    );
  }

  try {
    const response = await fetch(MAKE_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `❌ Fallo en Make/Notion. Status: ${response.status}. Mensaje: ${errorText}`
      );
    }

    const result = await response.text();
    return { success: true, message: "Evento registrado en Notion.", result };
  } catch (error) {
    console.error("🚨 ERROR CRÍTICO en registrarEvento:", error.message);
    throw new Error(
      "Fallo en la comunicación con el servicio de automatización."
    );
  }
};

module.exports = {
  registrarEvento,
};
