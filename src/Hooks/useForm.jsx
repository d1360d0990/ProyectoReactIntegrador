import { useState } from "react";
import { postApi } from "../service/postApi";

export const useForm = () => {
  const [eventForm, setEventForm] = useState({
    nombre: "",
    descripcion: "",
    fecha: "",
    lugar: "",
    tickets: "",
  });

  const handleChange = (e) => {
    setEventForm({ ...eventForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const sendData = await postApi(eventForm);
    console.log({ sendData });
    setEventForm({
      nombre: "",
      descripcion: "",
      fecha: "",
      lugar: "",
      tickets: "",
    });
  };

  const setFieldValue = (field, value) => {
    setEventForm((prevForm) => ({
      ...prevForm,
      [field]: value,
    }));
  };

  // Función para resetear el formulario a los valores iniciales
  const resetForm = () => {
    setEventForm({
      nombre: "",
      descripcion: "",
      fecha: "",
      lugar: "",
      tickets: "",
    });
  };

  return { eventForm, handleChange, handleSubmit, setFieldValue, resetForm };
};
