import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './Components/NotFound';
import { Home } from './Components/Home';
import { Calendar } from './Routes/Calendar';
import { Eventos } from './Routes/Eventos';
import { Ubicacion } from './Routes/Ubicacion';
import { Search } from './Routes/Search';
import { Finanzas } from './Routes/Finanzas';
import { Administracion } from './Routes/Administracion';
import { CrearEvento } from './Routes/CrearEvento';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<Home/>} />
        <Route path="/eventos" element={<Eventos/>} />
        <Route path="/calendario" element={<Calendar/>} />
        <Route path="/ubicacion" element={<Ubicacion/>} />
        <Route path="/search" element={<Search/>} />
        <Route path="/finanzas" element={<Finanzas/>} />
        <Route path="/administracion" element={<Administracion/>} />
        <Route path="/addEvent" element={<CrearEvento/>} />
        <Route path="*" element={<NotFound  />} />
      </Routes>
    </Router>
  );
}

export default App;
