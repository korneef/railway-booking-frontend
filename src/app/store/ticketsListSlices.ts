import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAviableSeatsInfo } from "../../shared";
import { ITrainInformation } from "../../entities";

export interface ITicket {
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

export interface ISeat {
  index: number,
  available: boolean,
}

export interface ICoach {
  _id: string,
  name: string,
  class_type: string,
  have_wifi: true,
  have_air_conditioning: true,
  price: number,
  top_price: number,
  bottom_price: number,
  side_price: number,
  linens_price: number,
  wifi_price: number,
  avaliable_seats: number,
  is_linens_included: true,
}

interface IWagon {
  coach: ICoach
  seats: Array<ISeat>
}

export interface TicketsList {
  total_count: number,
  items: Array<ITicket>,
  selectedTicket: ITicket | null,
  wagonInformation: {
    departure: Array<IWagon>,
    arrival: Array<IWagon>
  },
}

const initialState: TicketsList = {
  total_count: 0,
  items: [],
  selectedTicket: null,
  wagonInformation: {
    departure: [],
    arrival: []
  },
}

export const ticketsSlice = createSlice({
  name: 'ticketsList',
  initialState,
  reducers: {
    refreshTicketsList: (state, action: PayloadAction<TicketsList>) => {
      state.total_count = action.payload.total_count;
      state.items = action.payload.items;
      return state;
    },
    setSelectedTicket: (state, action: PayloadAction<ITicket>) => {
      state.selectedTicket = action.payload;
      return state;
    },
    unselectTicket: (state) => {
      state.selectedTicket = null;
      return state
    },
    setWagonInformaiton: (state, action: PayloadAction<{ type: 'departure' | 'arrival', wagonInformation: Array<IWagon> }>) => {
      action.payload.type === 'departure' ?
        state.wagonInformation.departure = action.payload.wagonInformation
        :
        state.wagonInformation.arrival = action.payload.wagonInformation
      return state;
    },
    deleteWagonInformation: (state) => {
      state.wagonInformation.arrival = [];
      state.wagonInformation.departure = [];
      return state;
    }
  },
})

export const {
  refreshTicketsList,
  setSelectedTicket,
  unselectTicket,
  setWagonInformaiton,
  deleteWagonInformation
} = ticketsSlice.actions

export default ticketsSlice.reducer