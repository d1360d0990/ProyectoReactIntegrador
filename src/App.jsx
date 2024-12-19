import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '../src/Routes/Home/Home';
import { Eventos } from './Routes/Eventos/Eventos';
import LocationViewer from './Routes/Ubicación/Ubicacion';
import { CrearEvento } from './Routes/AddEvent/CrearEvento';
import Login from './Components/Login/Login';
import EventTable from './Components/FormEvent';
import AnnualCalendar from './Components/Calendario/Calendario';
import "./App.css";
import PageNotFound from './Components/PageNotFound/NotFound';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/events" element={<Eventos/>} />
        <Route path="/calendar" element={<AnnualCalendar/>} />
        <Route path="/location" element={<LocationViewer/>} />
        <Route path="/addEvent" element={<CrearEvento/>} />
        <Route path="/eventTable" element={<EventTable/>} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </Router>
  );
}

export default App;
