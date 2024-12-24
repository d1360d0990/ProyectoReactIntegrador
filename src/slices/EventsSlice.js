import { createSlice } from '@reduxjs/toolkit';
import { getevents } from '../service/getApi';

const eventsSlice = createSlice({
  name: 'events',
  initialState: {
    events: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchEventsStart: (state) => {
      state.loading = true;
    },
    fetchEventsSuccess: (state, action) => {
      state.loading = false;
      state.events = action.payload;
    },
    fetchEventsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchEventsStart, fetchEventsSuccess, fetchEventsFailure } = eventsSlice.actions;

export const fetchEvents = () => async (dispatch) => {
  dispatch(fetchEventsStart());
  try {
    const events = await getevents();
    dispatch(fetchEventsSuccess(events));
  } catch (error) {
    dispatch(fetchEventsFailure(error.toString()));
  }
};

export default eventsSlice.reducer;