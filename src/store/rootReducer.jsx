import { combineReducers } from '@reduxjs/toolkit';
import uiReducer from '../slices/uiSlice';
import eventsReducer from '../slices/EventsSlice';

const rootReducer = combineReducers({
  ui: uiReducer,
  events: eventsReducer,
  // Agrega otros reducers aquí
});

export default rootReducer;