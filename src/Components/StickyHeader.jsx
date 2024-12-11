import { useState, useEffect } from "react";
import axios from "axios";

// Datos de ejemplo (para usarlos como fallback si la API no responde)
const exampleEvents = [
  {
    id: 1,
    name: "Concierto de Rock",
    description: "Una noche inolvidable de música rock.",
    date: "2024-12-20",
    place: "Auditorio Nacional",
    participants: 500,
    maxCapacity: 1000,
    availableTickets: 500,
  },
  {
    id: 2,
    name: "Exposición de Arte",
    description: "Arte contemporáneo de artistas locales.",
    date: "2024-12-22",
    place: "Centro Cultural",
    participants: 200,
    maxCapacity: 300,
    availableTickets: 100,
  },
  {
    id: 3,
    name: "Festival de Comida",
    description: "Disfruta una variedad de platillos internacionales.",
    date: "2024-12-25",
    place: "Parque Central",
    participants: 300,
    maxCapacity: 500,
    availableTickets: 200,
  },
  {
    id: 4,
    name: "Carrera 5K",
    description: "Participa en nuestra carrera anual de 5 kilómetros.",
    date: "2024-12-28",
    place: "Estadio Municipal",
    participants: 150,
    maxCapacity: 300,
    availableTickets: 150,
  },
  {
    id: 5,
    name: "Taller de Fotografía",
    description: "Aprende los conceptos básicos de fotografía.",
    date: "2024-12-30",
    place: "Escuela de Arte",
    participants: 50,
    maxCapacity: 100,
    availableTickets: 50,
  },
  {
    id: 6,
    name: "Conferencia de Tecnología",
    description: "Descubre las últimas tendencias en tecnología.",
    date: "2025-01-02",
    place: "Centro de Convenciones",
    participants: 600,
    maxCapacity: 800,
    availableTickets: 200,
  },
  // Agrega más eventos aquí
];

const EventTable = () => {
  const [events, setEvents] = useState([]); // Define el estado para los eventos
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  useEffect(() => { //cambio 2
    axios
      .get("http://localhost:4000/events")
      .then((response) => {
        if (Array.isArray(response.data)) {
          setEvents(response.data);
        } else {
          console.error("La respuesta no es un array", response.data);
          setEvents(exampleEvents); // Usar fallback
        }
      })
      .catch((error) => {
        console.error("Error al obtener los eventos:", error);
        setEvents(exampleEvents); // Usar datos de ejemplo si ocurre un error
      });
  }, []);
  

  // Calcular los datos para la página actual
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = events.slice(indexOfFirstRow, indexOfLastRow);

  // Cambiar de página
  const totalPages = Math.ceil(events.length / rowsPerPage) || 1; // cambio 1
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h1>Lista de Eventos</h1>
      <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Fecha</th>
            <th>Lugar</th>
            <th>Participantes</th>
            <th>Capacidad Máxima</th>
            <th>Entradas Disponibles</th>
          </tr>
        </thead>
        <tbody>
        {currentRows.map((event, index) => (
  <tr key={`${event.id}-${index}`}>
    <td>{event.name}</td>
    <td>{event.description}</td>
    <td>{event.date}</td>
    <td>{event.place}</td>
    <td>{event.participants}</td>
    <td>{event.maxCapacity}</td>
    <td>{event.availableTickets}</td>
  </tr>
))}
        </tbody>
      </table>

      {/* Paginación */}
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            style={{
              margin: "0 5px",
              padding: "5px 10px",
              cursor: "pointer",
              backgroundColor: currentPage === index + 1 ? "#007BFF" : "#f0f0f0",
              color: currentPage === index + 1 ? "white" : "black",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default EventTable;
