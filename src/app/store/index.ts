import { configureStore } from '@reduxjs/toolkit';
import ticketsReducer from './ticketsListSlices';


export const store = configureStore({
  reducer: {
    tickets: ticketsReducer
  },
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;