import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './Components/NotFound';
import { Home } from './Components/Home';
import { Eventos } from './Routes/Eventos';
import LocationViewer from './Routes/Ubicación/Ubicacion';
import { Search } from './Routes/Search';
import { Finanzas } from './Routes/Finanzas';
import { Administracion } from './Routes/Administracion';
import { CrearEvento } from './Routes/AddEvent/CrearEvento';
import Login from './Components/Login/Login';
import FormularioEvento from './Components/FormEvent';
import EventTable from './Components/FormEvent';
import AnnualCalendar from './Components/Calendario/Calendario';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/eventos" element={<Eventos/>} />
        <Route path="/calendario" element={<AnnualCalendar/>} />
        <Route path="/ubicacion" element={<LocationViewer/>} />
        <Route path="/search" element={<Search/>} />
        <Route path="/finanzas" element={<Finanzas/>} />
        <Route path="/administracion" element={<Administracion/>} />
        <Route path="/addEvent" element={<CrearEvento/>} />
        <Route path="/eventTable" element={<EventTable/>} />
        <Route path="*" element={<NotFound  />} />
      </Routes>
    </Router>
  );
}

export default App;
