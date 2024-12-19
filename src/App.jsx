import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './Components/NotFound';
import { Home } from '../src/Routes/Home/Home';
import { Eventos } from './Routes/Eventos/Eventos';
import LocationViewer from './Routes/Ubicación/Ubicacion';
import { CrearEvento } from './Routes/AddEvent/CrearEvento';
import Login from './Components/Login/Login';
import EventTable from './Components/FormEvent';
import AnnualCalendar from './Components/Calendario/Calendario';
import "./App.css";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/eventos" element={<Eventos/>} />
        <Route path="/calendario" element={<AnnualCalendar/>} />
        <Route path="/ubicacion" element={<LocationViewer/>} />
        <Route path="/addEvent" element={<CrearEvento/>} />
        <Route path="/eventTable" element={<EventTable/>} />
        <Route path="*" element={<NotFound  />} />
      </Routes>
    </Router>
  );
}

export default App;
