import SeatsSelection from "./SeatsSelection";
import { useAppSelector } from "app/store/hooks";
import { ToStep2ButtonWrapper } from "features";


function SeatsSelectionWrapper() {
  const selectedTicket = useAppSelector(state => state.tickets.selectedTicket);
  console.log('render wrapper')
  return (
    <>
      <SeatsSelection direciton='departure' />
      {selectedTicket?.arrival && <SeatsSelection direciton='arrival' />}
      <ToStep2ButtonWrapper />
    </>
  );
}

export default SeatsSelectionWrapper;