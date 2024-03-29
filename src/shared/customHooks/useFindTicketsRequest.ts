import { useAppDispatch } from "../../app/store/hooks";
import { updateRequestParameter } from "../../app/store/ticketSearchRequestSlices";


//TODO переименовать на useFindTicketRequestUpdate
export default function useFindTicketRequest() {
  const dispatch = useAppDispatch();

  return function (requestKey: string, value: string | boolean | number) {
    dispatch(updateRequestParameter({ key: requestKey, value: value }));
  }
}