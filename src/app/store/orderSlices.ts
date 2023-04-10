import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUser {
  first_name: string,
  last_name: string,
  patronymic: string,
  phone: string,
  email: string,
  payment_method: 'cash' | 'online'
}

interface IPersonInfo {
  is_adult: true,
  first_name: string,
  last_name: string,
  patronymic: string,
  gender: true,
  birthday: string,
  document_type: string,
  document_data: string
}

interface ISeat {
  coach_id: string,
  person_info: IPersonInfo,
  seat_number: number,
  is_child: true,
  include_children_seat: true
}

interface IDirection {
  route_direction_id: string,
  seats: Array<Partial<ISeat>>
}

interface IOrderCreated {
  preOrder: {
    adultCount: number,
    childrenCount: number,
    departure: {
      selectedSeats: Array<Pick<ISeat, 'coach_id' | 'seat_number'>>
    }
    arrival: {
      selectedSeats: Array<Pick<ISeat, 'coach_id' | 'seat_number'>>
    }
  }
  order: {
    user: Partial<IUser>,
    departure: Partial<IDirection>,
    arrival?: Partial<IDirection>
  }
}

export interface OrderSubmit extends Required<IOrderCreated> { };

const initialState: IOrderCreated = {
  preOrder: {
    adultCount: 0,
    childrenCount: 0,
    departure: {
      selectedSeats: []
    },
    arrival: {
      selectedSeats: []
    }
  },

  order: {
    user: {},
    departure: {
      seats: []
    },
  }
}

export const orderSlises = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setDepartureId: (state, action: PayloadAction<string>) => {
      state.order.departure = { route_direction_id: action.payload }
      return state;
    },
    setArrivalId: (state, action: PayloadAction<string>) => {
      state.order.arrival = { route_direction_id: action.payload }
      return state;
    },
    // selectSeat: (state, action: PayloadAction<ISeat>) => {
    //   state.order.departure.seats?.push(action.payload)
    // },
    // unselectSeat: (state, action: PayloadAction<string>) => {
    //   const index = state.order.departure.seats?.findIndex(item => item.coach_id === action.payload);
    //   index && state.order.departure.seats?.splice(index, 1)
    //   return state;
    // },
    setAdultCount: (state, action: PayloadAction<number>) => {
      state.preOrder.adultCount = action.payload;
      return state;
    },
    setChildCount: (state, action: PayloadAction<number>) => {
      state.preOrder.childrenCount = action.payload;
      return state;
    },
    setSelectDepartureSeat: (state, action: PayloadAction<Pick<ISeat, 'coach_id' | 'seat_number'>>) => {
      state.preOrder.departure.selectedSeats.push(action.payload);
      return state;
    },
    setSelectArrivalSeat: (state, action: PayloadAction<Pick<ISeat, 'coach_id' | 'seat_number'>>) => {
      state.preOrder.arrival.selectedSeats.push(action.payload);
      return state;
    },
    unsetSelectSeat: (state, action: PayloadAction<Pick<ISeat, 'coach_id' | 'seat_number'>>) => {
      let ticketIndex = state.preOrder.departure.selectedSeats.findIndex(item => item.coach_id === action.payload.coach_id && item.seat_number === action.payload.seat_number);
      if (ticketIndex === -1) {
        ticketIndex = state.preOrder.arrival.selectedSeats.findIndex(item => item.coach_id === action.payload.coach_id && item.seat_number === action.payload.seat_number);
      } else {
        state.preOrder.departure.selectedSeats.splice(ticketIndex, 1);
        return state;
      }
      if (ticketIndex !== -1) {
        state.preOrder.arrival.selectedSeats.splice(ticketIndex, 1);
        return state;
      }
      return state;
    }
  }
})


export const {
  setDepartureId,
  setArrivalId,
  // selectSeat,
  // unselectSeat,
  setAdultCount,
  setChildCount,
  setSelectDepartureSeat,
  unsetSelectSeat,
  setSelectArrivalSeat
} = orderSlises.actions;

export default orderSlises.reducer;