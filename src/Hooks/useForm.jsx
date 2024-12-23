import { useState } from "react";
import { postApi } from "../service/postApi";

export const useForm = () => {
  const [eventForm, setEventForm] = useState({
    nombre: "",
    descripcion: "",
    lugar: "",
    tickets: "",
    //fecha: "",
      });

  const handleChange = (e) => {
    setEventForm({ ...eventForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const sendData = await postApi (eventForm);
    console.log({ sendData });
    setEventForm({
        nombre: "",
        descripcion: "",
        lugar: "",
        tickets: "",
        // fecha: "",
    });
  };

  const setFieldValue = (field, value) => {
    setEventForm((prevForm) => ({
      ...prevForm,
      [field]: value,
    }));
  };

  return { eventForm, handleChange, handleSubmit, setFieldValue };
};
