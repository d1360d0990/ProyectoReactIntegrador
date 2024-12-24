import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
} from "@mui/material";
import './EventTable.css';

export const EventTable = ({ events }) => {
  return (
    <Box component="main" className="event-table-container">
      <Typography
        variant="h4"
        component="h1"
        align="center"
        className="event-table-title"
      >
        Lista de Eventos
      </Typography>
      <TableContainer component={Paper} className="event-table">
        <Table>
          <TableHead>
            <TableRow className="table-header">
              <TableCell>Nombre</TableCell>
              <TableCell>Descripción</TableCell>
              <TableCell>Fecha</TableCell>
              <TableCell>Lugar</TableCell>
              <TableCell>Entradas</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {events?.map((event) => (
              <TableRow key={event._id} className="table-row">
                <TableCell>{event.nombre}</TableCell>
                <TableCell>{event.descripcion}</TableCell>
                <TableCell>{event.fecha}</TableCell>
                <TableCell>{event.lugar}</TableCell>
                <TableCell>{event.tickets}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default EventTable;


