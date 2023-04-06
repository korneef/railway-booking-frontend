import { createSlice, PayloadAction } from "@reduxjs/toolkit";
//TODO доделать

export interface TicketRequestParams {
  from_city_id?: string, //- Идентификатор города, откуда планируется путешествие (обязательный)
  to_city_id?: string, //- Идентификатор города, куда планируется путешествие (обязательный)
  date_start?: string, //- Дата отбытия туда (в формате YYYY-MM-DD; например 2030-03-01)
  date_end?: string, //- Дата отбытия обратно (в формате YYYY-MM-DD; например 2030-03-01)
  date_start_arrival?: string, //- Дата прибытия туда (в формате YYYY-MM-DD; например 2030-03-01)
  date_end_arrival?: string, //- Дата прибытия обратно (в формате YYYY-MM-DD; например 2030-03-01)
  have_first_class?: boolean, //- Люкс (true/false)
  have_second_class?: boolean, //- Купе (true/false)
  have_third_class?: boolean, //- Плацкарт (true/false)
  have_fourth_class?: boolean, //- Сидячее место (true/false)
  have_wifi?: boolean, //- Имеется WiFi (true/false)
  have_air_conditioning?: boolean, //- Имеется кондиционер (true/false)
  have_express?: boolean, //- Экспресс (true/false)
  price_from?: number, //- Цена от
  price_to?: number, //- Цена до
  start_departure_hour_from?: number, //- Час отбытия от (число)
  start_departure_hour_to?: number, //- Час отбытия до (число)
  start_arrival_hour_from?: number, //- Час прибытия от (число)
  start_arrival_hour_to?: number, //- Час прибытия до (число)
  end_departure_hour_from?: number, //- Час отбытия назад от (число)
  end_departure_hour_to?: number, //- Час отбытия назад до (число)
  end_arrival_hour_from?: number, //- Час прибытия назад от (работает при установленном параметре date_end)
  end_arrival_hour_to?: number, //- Час прибытия назад до (работает при установленном параметре date_end)
  limit?: number, //- Количество результатов на странице
  offset?: number, //- Количество результатов, которое необходимо пропустить в выдаче
  sort?: 'date' | 'price' | 'duration', //- Сортировка результатов (date, price, duration)
}

interface stateInterface {
  loadingStatus: string | null;
  params: TicketRequestParams;
}

const initialState: stateInterface = {
  loadingStatus: null,
  params: {}
}

interface updateRequestAction {
  key: string,
  value: number | string | boolean,
}

export const ticketSearchRequestSlises = createSlice({
  name: 'ticketSearchRequest',
  initialState,
  reducers: {
    updateRequestParameter: (state, action: PayloadAction<updateRequestAction>) => {
      const key = action.payload.key;
      const value = action.payload.value;
      if (!value) {
        delete state.params[key as keyof TicketRequestParams]
        state.params = { ...state.params };
        return state;
      } else {
        state.params = { ...state.params, [key]: value };
        return state;
      }
    },
    updateLoadingStatus: (state, action: PayloadAction<string | null>) => {
      const status = action.payload;
      state.loadingStatus = status;
      return state;
    }
  },
})

export const { updateRequestParameter, updateLoadingStatus } = ticketSearchRequestSlises.actions;

export default ticketSearchRequestSlises.reducer;