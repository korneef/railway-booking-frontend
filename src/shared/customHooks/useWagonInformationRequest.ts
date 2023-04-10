import { useAppSelector, useAppDispatch } from "../../app/store/hooks";
import { backendURL } from "../API/globalUrl";
import { TicketRequestParams } from "../../app/store/ticketSearchRequestSlices";
import { setWagonInformaiton } from "../../app/store/ticketsListSlices";

type ISearchParams = Pick<TicketRequestParams, 'have_wifi'>

export default function useWagonInformationRequest(): Function {
  const have_wifi = useAppSelector(state => state.ticketsSearchRequest.params.have_wifi);
  const request = { have_wifi }
  const dispatch = useAppDispatch();

  return function (direction: 'departure' | 'arrival', id: string | null) {
    if (id === null) return;
    let searchParams: ISearchParams = {}
    for (let prop in request) {
      if (request.hasOwnProperty(prop) && ['have_wifi'].includes(prop)) {
        searchParams[prop as keyof ISearchParams] = request[prop as keyof ISearchParams];
      }
    }
    const queryParams = Object.keys(searchParams)
      .filter(item => searchParams[item as keyof ISearchParams] !== undefined)
      .map(item => `${item}=${searchParams[item as keyof ISearchParams]}`).join('&');

    fetch(`${backendURL}/routes/${id}/seats?${queryParams}`)
      .then(response => response.json())
      .then(response => dispatch(setWagonInformaiton({
        type: direction,
        wagonInformation: response
      })))
      .catch(error => console.log(`Error: ${error}`))
  }
}
