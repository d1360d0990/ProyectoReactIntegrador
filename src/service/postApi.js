import axios from "axios";
import { addEventURL, baseURL } from "../App";

export const postApi = async (eventForm) => {
  try {
    const response = await axios.post(`${baseURL}${addEventURL}`, {
      nombre: eventForm.nombre,
      descripcion: eventForm.descripcion,
      fecha: eventForm.fecha,
      lugar: eventForm.lugar,
      tickets: eventForm.tickets,
    });
    console.log('Respuesta de la API:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error al enviar los datos a la API:', error);
    throw error;
  }
};
