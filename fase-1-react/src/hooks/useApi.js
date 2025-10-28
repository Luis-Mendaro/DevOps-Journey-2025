// fase-1-react/src/hooks/useApi.js
import { useState } from "react";

// URL base de tu API de registro
const API_BASE_URL = "http://localhost:4000/api";

/**
 * Custom Hook para encapsular la lógica de comunicación con el backend (Networking).
 */
export const useApi = () => {
  // <--- CLAVE: export const
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  /**
   * Envía datos (POST) a un endpoint específico.
   */
  const postData = async (endpoint, data) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `Error HTTP: ${response.status}`);
      }

      const result = await response.json();
      setSuccess(true);
      return result;
    } catch (err) {
      console.error("Fallo de la API:", err);
      setError(err.message);
      setSuccess(false);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { postData, loading, error, success };
};
