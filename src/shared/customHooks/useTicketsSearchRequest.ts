import { TicketRequestParams } from "../../app/store/ticketSearchRequestSlices";
import { backendURL } from "../API/globalUrl";
import { useAppDispatch } from "../../app/store/hooks";
import { updateLoadingStatus } from "../../app/store/ticketSearchRequestSlices";
import { refreshTicketsList } from "../../app/store/ticketsListSlices";
import { useNavigate } from "react-router-dom";

export default function useTicketsSearchRequest(): Function {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (request: TicketRequestParams) => {
    if (request.to_city_id && request.from_city_id) {
      const searchParams = request;
      const queryParams = Object.keys(searchParams)
        .filter(item => searchParams[item as keyof TicketRequestParams] !== undefined)
        .map(item => `${item}=${searchParams[item as keyof TicketRequestParams]}`)
        .join('&'); dispatch(updateLoadingStatus('isLoading'));
      fetch(`${backendURL}/routes?${queryParams}`)
        .then(response => response.json())
        .then(response => {
          dispatch(refreshTicketsList(response));
          dispatch(updateLoadingStatus('loaded'));
        })
      navigate('/order/step/1');
    };
  }
}