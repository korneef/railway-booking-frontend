import { TicketFilterForm, TicketsList, SeatsSelectionWrapper, LastTicketList } from "../../widgets";
import { useAppSelector } from "../../app/store/hooks";


export default function OrderStep1() {
  const selectedTicket = useAppSelector(state => state.tickets.selectedTicket);
  const className = 'order-step';
  return (
    <div className="wrapped">
      <div className={className}>
        <div className={`${className}__aside`}>
          <TicketFilterForm />
          <LastTicketList />
        </div>
        <div className={`${className}__tickets-wrapper`}>
          {selectedTicket ?
            <SeatsSelectionWrapper />
            :
            <TicketsList />}
        </div>
      </div>
    </div >
  );
}