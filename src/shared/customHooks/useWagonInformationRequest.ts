import { useAppSelector, useAppDispatch } from "app/store/hooks";
import { backendURL } from "shared/API/globalUrl";
import { TicketRequestParams } from "app/store/ticketSearchRequestSlices";
import { setWagonInformaiton } from "app/store/ticketsListSlices";

type ISearchParams = Pick<TicketRequestParams, 'have_air_conditioning' | 'have_wifi'>

export default function useWagonInformationRequest(): Function {
  const request = useAppSelector(state => state.ticketsSearchRequest.params);
  const dispatch = useAppDispatch();

  return function (id: string) {
    let searchParams: ISearchParams = {}
    for (let prop in request) {
      if (request.hasOwnProperty(prop) && ['have_air_conditioning', 'have_wifi'].includes(prop)) {
        searchParams[prop as keyof ISearchParams] = request[prop as keyof ISearchParams];
      }
    }
    const queryParams = Object.keys(searchParams).map(item => `${item}=${searchParams[item as keyof ISearchParams]}`).join('&');
    console.log(queryParams.toString())

    fetch(`${backendURL}/routes/${id}/seats?${queryParams}`)
      .then(response => response.json())
      .then(response => dispatch(setWagonInformaiton(response)))
      .catch(error => console.log(`Error: ${error}`))
  }
}
