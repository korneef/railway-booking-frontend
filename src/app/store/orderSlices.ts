import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IUser {
  first_name: string,
  last_name: string,
  patronymic: string,
  phone: string,
  email: string,
  payment_method: 'cash' | 'online'
}

export interface IPersonInfo {
  is_adult: boolean,
  first_name: string,
  last_name: string,
  patronymic: string,
  gender: boolean,
  birthday: string,
  document_type: string,
  document_data: string
}

interface ISeat {
  coach_id: string,
  person_info: IPersonInfo,
  seat_number: number,
  is_child: boolean,
  include_children_seat: boolean,
  price: number,
}

interface IDirection {
  route_direction_id: string,
  seats: Array<Omit<ISeat, 'price'>>
}

interface IOrderCreated {
  preOrder: {
    adultCount: number,
    childrenCount: number,
    childrenWithOutPlaceCount: number,

    departure: {
      selectedSeats: Array<Pick<ISeat, 'coach_id' | 'seat_number' | 'price'>>
      price: number,
    }
    arrival: {
      selectedSeats: Array<Pick<ISeat, 'coach_id' | 'seat_number' | 'price'>>
      price: number,
    }
    persons: Array<IPersonInfo | null>,
    user: IUser | null,
  }
  order: {
    user: IUser | null,
    departure: IDirection,
    arrival?: IDirection
  }
}

interface IUnselectCoachSeats {
  direction: string,
  id: string,
}

interface INewPerson {
  index: number,
  person: IPersonInfo,
}

export interface OrderSubmit extends Required<IOrderCreated> { };

const initialState: IOrderCreated = {
  preOrder: {
    adultCount: 0,
    childrenCount: 0,
    childrenWithOutPlaceCount: 0,
    departure: {
      selectedSeats: [],
      price: 0,
    },
    arrival: {
      selectedSeats: [],
      price: 0,
    },
    persons: [],
    user: null,
  },
  order: {
    user: null,
    departure: {
      seats: [],
      route_direction_id: ''
    },
  }
}

export const orderSlises = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setDepartureId: (state, action: PayloadAction<string>) => {
      state.order.departure.route_direction_id = action.payload
      return state;
    },
    setArrivalId: (state, action: PayloadAction<string>) => {
      state.order.arrival = {route_direction_id: action.payload, seats: []}
      return state;
    },
    setAdultCount: (state, action: PayloadAction<number>) => {
      state.preOrder.adultCount = action.payload;
      return state;
    },
    setChildCount: (state, action: PayloadAction<number>) => {
      state.preOrder.childrenCount = action.payload;
      return state;
    },
    setSelectDepartureSeat: (state, action: PayloadAction<Pick<ISeat, 'coach_id' | 'seat_number' | 'price'>>) => {
      state.preOrder.departure.selectedSeats.push(action.payload);
      state.preOrder.departure.price += action.payload.price;
      return state;
    },
    setSelectArrivalSeat: (state, action: PayloadAction<Pick<ISeat, 'coach_id' | 'seat_number' | 'price'>>) => {
      state.preOrder.arrival.selectedSeats.push(action.payload);
      state.preOrder.arrival.price += action.payload.price;
      return state;
    },
    unsetSelectSeat: (state, action: PayloadAction<Pick<ISeat, 'coach_id' | 'seat_number'>>) => {
      let ticketIndex = state.preOrder.departure.selectedSeats.findIndex(item => item.coach_id === action.payload.coach_id && item.seat_number === action.payload.seat_number);
      if (ticketIndex === -1) {
        ticketIndex = state.preOrder.arrival.selectedSeats.findIndex(item => item.coach_id === action.payload.coach_id && item.seat_number === action.payload.seat_number);
      } else {
        state.preOrder.departure.price -= state.preOrder.departure.selectedSeats[ticketIndex].price;
        state.preOrder.departure.selectedSeats.splice(ticketIndex, 1);
        return state;
      }
      if (ticketIndex !== -1) {
        state.preOrder.arrival.price -= state.preOrder.arrival.selectedSeats[ticketIndex].price;
        state.preOrder.arrival.selectedSeats.splice(ticketIndex, 1);
        return state;
      }
      return state;
    },
    cleanOrder: (state) => {
      state = initialState;
      return state;
    },
    unselectCoachSeats: (state, action: PayloadAction<IUnselectCoachSeats>) => {
      const deparutreSeats = state.preOrder.departure.selectedSeats;
      const arrivalSeats = state.preOrder.arrival.selectedSeats;
      const { direction, id } = action.payload;
      if (direction === 'departure') {
        state.preOrder.departure.selectedSeats = deparutreSeats.filter(item => item.coach_id !== id);
      } else {
        state.preOrder.arrival.selectedSeats = arrivalSeats.filter(item => item.coach_id !== id);
      }
      return state;
    },
    changeNewPersonsArray: (state, action: PayloadAction<Array<IPersonInfo | null>>) => {
      state.preOrder.persons = action.payload;
      return state;
    },
    addNewPerson: (state, action: PayloadAction<INewPerson>) => {
      state.preOrder.persons[action.payload.index] = action.payload.person;
      return state;
    },
    addUser: (state, action: PayloadAction<IUser>) => {
      state.preOrder.user = action.payload;
      return state;
    },
    addUserInOrder: (state, action: PayloadAction<IUser>) => {
      state.order.user = action.payload;
      return state;
    },
    addDepartureSeatsInOrder: (state, action: PayloadAction<Array<Omit<ISeat, 'price'>>>) => {
      state.order.departure.seats = action.payload;
      return state;
    },
    addArrivalSeatsInOrder: (state, action: PayloadAction<Array<Omit<ISeat, 'price'>>>) => {
      if (state.order.arrival !== undefined) state.order.arrival.seats = action.payload;
      return state;
    }
  }
})


export const {
  setDepartureId,
  setArrivalId,
  setAdultCount,
  setChildCount,
  setSelectDepartureSeat,
  unsetSelectSeat,
  setSelectArrivalSeat,
  cleanOrder,
  unselectCoachSeats,
  changeNewPersonsArray,
  addNewPerson,
  addUser,
  addUserInOrder,
  addDepartureSeatsInOrder,
  addArrivalSeatsInOrder
} = orderSlises.actions;

export default orderSlises.reducer;