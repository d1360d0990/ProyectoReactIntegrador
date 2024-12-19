import axios from "axios";
import { baseURL, booksURL, token } from "../App";

export const postevents = async (bookForm) => {
  const response = axios.post(
    `${baseURL}${booksURL}`,

    {
      titulo: bookForm.titulo,
      autor: bookForm.autor,
      categoria: bookForm.categoria,
      estado: bookForm.estado,
    },
    {
      headers: {
        Authorization: `${token}`,
      },
    }
  );

  console.log({ response });
};