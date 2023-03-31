import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAviableSeatsInfo } from "shared";
import { ITrainInformation } from "entities";

interface Ticket {
  available_seats: number,
  available_seats_info: IAviableSeatsInfo,
  departure: ITrainInformation,
  arrival?: ITrainInformation,
  have_air_conditioning: boolean
  have_first_class: boolean
  have_fourth_class: boolean
  have_second_class: boolean
  have_third_class: boolean
  have_wifi: boolean
  is_express: boolean
  min_price: number
}

interface TicketsList {
  total_count: number,
  tickets: Array<Ticket>,
}

const initialState: TicketsList = {
  total_count: 0,
  tickets: [],
}

export const ticketsSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    refreshTicketsList: (state, action: PayloadAction<TicketsList>) => {
      state = action.payload
    },
  },
})

export const { refreshTicketsList } = ticketsSlice.actions

export default ticketsSlice.reducer