import { TextField, Button, Container, Grid, Typography, Box } from '@mui/material';
/*import { DesktopDatePicker} from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';*/
import { useForm } from '../../Hooks/useForm';


export const CrearEvento = () => {
  

  const { eventForm, handleSubmit, handleChange, } = useForm();

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
                label="Nombre"
                name='nombre'
                variant="outlined"
                fullWidth
                value={eventForm?.nombre}
                onChange={(e) => handleChange(e)}
                required
              />
            </Grid>

            {/* Descripción del Evento */}
            <Grid item xs={12}>
              <TextField
                label="Descripción"
                name='descripcion'
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                value={eventForm?.descripcion}
                onChange={(e) => handleChange(e)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Ubicación"
                name='lugar'
                variant="outlined"
                fullWidth
                value={eventForm?.lugar}
                onChange={(e) => handleChange(e)}
                required
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Cantidad de Entradas"
                name='tickets'
                variant="outlined"
                fullWidth
                value={eventForm?.tickets}
                onChange={(e) => handleChange(e)}
                required
              />
            </Grid>

            {/* Fecha del Evento 
            <Grid item xs={12}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker
                  label="Fecha"
                  inputFormat="yyyy/MM/dd"
                  value={eventForm?.fecha || null} // Si es null, evita errores
                  onChange={(newValue) => setFieldValue('fecha', newValue)}
                  renderInput={(params) => <TextField {...params} fullWidth />}
                  required
                />
              </LocalizationProvider>
            </Grid>*/}

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
