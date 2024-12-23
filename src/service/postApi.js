import axios from "axios";
import { baseURL, eventsURL } from "../App";


export const postApi = async (eventForm) => {
  try {
    const response = await axios.post(
      `${baseURL}${eventsURL}`,
      {
        nombre: eventForm.nombre,
        descripcion: eventForm.descripcion,
       // fecha: eventForm.fecha,
        lugar: eventForm.lugar,
        tickets: eventForm.tickets,
      }
    );

    console.log({ response });
  } catch (error) {
    console.error('Error al realizar la solicitud:', error);
    throw error; // Opcional: vuelve a lanzar el error si necesitas que sea manejado más arriba
  }
};
