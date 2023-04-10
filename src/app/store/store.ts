import { configureStore } from '@reduxjs/toolkit';
import ticketsReducer from './ticketsListSlices';
import ticketSearchRequestReducer from './ticketSearchRequestSlices';
import orderReducer from './orderSlices'
// import { ticketsApi } from './ticketsAPI';
// import { Middleware } from '@reduxjs/toolkit';
// TODO delete comments or tune RTK Query
export const store = configureStore({
  reducer: {
    tickets: ticketsReducer,
    ticketsSearchRequest: ticketSearchRequestReducer,
    order: orderReducer,
    // tickets: ticketsApi.reducer
  },
  // first variant middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ticketsApi.middleware)
  // second variant middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware()
  //     .concat(
  //       ticketsApi.middleware as Middleware,
  //     )
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;