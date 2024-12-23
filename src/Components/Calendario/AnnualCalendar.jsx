import { useState} from "react";
import "./Calendario.css";

// Función para generar las fechas de cada mes
const generateDates = (year, month) => {
  const dates = [];
  const firstDay = new Date(year, month, 1).getDay(); // Día de la semana del primer día del mes
  const daysInMonth = new Date(year, month + 1, 0).getDate(); // Días en el mes

  // Rellenar los días vacíos antes del primer día del mes
  for (let i = 0; i < firstDay; i++) {
    dates.push(null);
  }

  // Agregar los días del mes
  for (let day = 1; day <= daysInMonth; day++) {
    dates.push(day);
  }

  return dates;
};

const AnnualCalendar = () => {
  const today = new Date();
  const year = today.getFullYear(); // Año actual
  const currentMonth = today.getMonth(); // Mes actual
  const currentDate = today.getDate(); // Día actual

  // Estado para la fecha seleccionada
  const [selectedDate, setSelectedDate] = useState(today);

  // Generar las fechas de todos los meses del año
  const months = Array.from({ length: 12 }, (_, index) => generateDates(year, index));

  // Función para seleccionar un día
  const selectDate = (day, month) => {
    if (day) {
      const newSelectedDate = new Date(year, month, day);
      setSelectedDate(newSelectedDate);
    }
  };

  const monthNames = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];

  return (
    <div >
      <h1>Calendario Anual {year}</h1>
      <div className="calendar-grid">
        {months.map((month, index) => (
          <div key={index} className="month">
            <div className="month-header">
              <h2>{monthNames[index]}</h2>
            </div>
            <div className="month-body">
              <div className="weekdays">
                {["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"].map((day, i) => (
                  <div key={i} className="weekday">{day}</div>
                ))}
              </div>
              <div className="dates">
                {month.map((day, i) => (
                  <div
                    key={i}
                    className={`date ${day ? "has-day" : ""} 
                    ${selectedDate.getDate() === day && selectedDate.getMonth() === index ? "selected-day" : ""}
                    ${year === today.getFullYear() && index === currentMonth && day === currentDate ? "today" : ""}`}
                    onClick={() => selectDate(day, index)}
                  >
                    {day || ""}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnnualCalendar;
