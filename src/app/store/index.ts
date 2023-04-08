import { configureStore } from '@reduxjs/toolkit';
import ticketsReducer from './ticketsListSlices';
import ticketSearchRequestReducer from './ticketSearchRequestSlices';

export const store = configureStore({
  reducer: {
    tickets: ticketsReducer,
    ticketsSearchRequest: ticketSearchRequestReducer
  },
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;