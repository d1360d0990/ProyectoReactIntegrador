import axios from "axios";
import { addEventURL, baseURL } from "../App";


export const postApi = async (eventForm) => {
  
    const response = await axios.post(
    (`${baseURL}${addEventURL}`),
    
    {
      nombre: eventForm.nombre,
      descripcion: eventForm.descripcion,
      fecha: eventForm.fecha,
      lugar: eventForm.lugar,
      tickets: eventForm.tickets,
    }
  )
  console.log({ response });
  }