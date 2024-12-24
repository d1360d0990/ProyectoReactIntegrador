import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '../src/Routes/Home/Home';
import { Eventos } from './Routes/Events/Eventos';
import Login from './Components/Login/Login';
import { Calendar } from './Routes/Calendar/Calendar';
import "./App.css";
import PageNotFound from './Routes/PageNotFound/NotFound';
import { Locations } from './Routes/Locations/Locations';
import { AddEvent } from './Routes/AddEvent/AddEvent';
import { Provider } from 'react-redux';
import store from './store/Store';


export const baseURL = import.meta.env.VITE_BASE_URL;
export const eventsURL = import.meta.env.VITE_EVENTS;
export const filters = import.meta.env.VITE_GET_EVENTS_FILTER;
export const addEventURL = import.meta.env.VITE_ADD_EVENTS


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/events" element={<Eventos />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/location" element={<Locations />} />
          <Route path="/addEvent" element={<AddEvent />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
