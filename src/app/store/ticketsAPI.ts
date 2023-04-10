//TODO delete or tune RTK Query

// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { backendURL } from 'shared';
// import { TicketRequestParams } from './ticketSearchRequestSlices';
// import { TicketsList } from './ticketsListSlices';


// export const ticketsApi = createApi({
//   reducerPath: 'ticketsApi',
//   baseQuery: fetchBaseQuery({ baseUrl: backendURL }),
//   endpoints: (builder) => ({
//     getTickets: builder.query<TicketsList, TicketRequestParams>({
//       query: (requestParameters) => {
//         const searchParams = requestParameters;
//         const queryParams = Object.keys(searchParams)
//           .filter(item => searchParams[item as keyof TicketRequestParams] !== undefined)
//           .map(item => `${item}=${searchParams[item as keyof TicketRequestParams]}`)
//           .join('&')
//         return `pokemon/${queryParams}`
//       }
//     }),
//   }),
// })

// export const { useGetTicketsQuery } = ticketsApi;
export {}