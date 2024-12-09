import { TextField, Button, Container, Grid, Typography, Box } from '@mui/material';
import { DesktopDatePicker, TimePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useState } from 'react';


export const CrearEvento = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí agregarías la lógica para enviar el evento
    console.log({ title, description, date, time });
  };

  const handleCancel = () => {
    setTitle('');
    setDescription('');
    setDate(null);
    setTime(null);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          bgcolor: 'background.paper',
          padding: 3,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography variant="h5" gutterBottom>
          Agregar Evento
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <Grid container spacing={2}>
            {/* Título del Evento */}
            <Grid item xs={12}>
              <TextField
                label="Título"
                variant="outlined"
                fullWidth
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </Grid>

            {/* Descripción del Evento */}
            <Grid item xs={12}>
              <TextField
                label="Descripción"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </Grid>

            {/* Fecha del Evento */}
            <Grid item xs={12}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker
                  label="Fecha"
                  inputFormat="MM/dd/yyyy"
                  value={date}
                  onChange={(newDate) => setDate(newDate)}
                  renderInput={(params) => <TextField {...params} fullWidth />}
                  required
                />
              </LocalizationProvider>
            </Grid>

            {/* Hora del Evento */}
            <Grid item xs={12}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <TimePicker
                  label="Hora"
                  value={time}
                  onChange={(newTime) => setTime(newTime)}
                  renderInput={(params) => <TextField {...params} fullWidth />}
                  required
                />
              </LocalizationProvider>
            </Grid>

            {/* Botones de Crear y Cancelar */}
            <Grid container spacing={2} justifyContent="center" style={{ marginTop: '20px' }}>
              <Grid item>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Crear
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  color="secondary"
                  fullWidth
                  onClick={handleCancel}
                >
                  Cancelar
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};
