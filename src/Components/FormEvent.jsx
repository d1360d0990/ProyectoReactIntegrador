import '../Styles/EventTable.css'

const events = [
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
  // Agrega más eventos aquí
];

const EventTable = () => {
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
          {events.map((event) => (
            <tr key={event.id}>
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
    </div>
  );
};

export default EventTable;


