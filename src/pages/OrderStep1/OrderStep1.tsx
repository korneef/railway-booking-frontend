import { TicketFilterForm, TicketsList, SeatsSelectionWrapper, LastTicketList } from "../../widgets";
import { useAppSelector } from "../../app/store/hooks";
import LoadingScreen from "shared/components/LoadingScreen/LoadingScreen";


export default function OrderStep1() {
  const selectedTicket = useAppSelector(state => state.tickets.selectedTicket);
  const className = 'order-step';

  console.log('render')
  return (
    <div className="wrapped">
      <div className={className}>
        <div className={`${className}__aside`}>
          <TicketFilterForm />
          <LastTicketList />
        </div>
        <div className={`${className}__tickets-wrapper`}>
          {selectedTicket ?
            <SeatsSelectionWrapper bemClass={className} />
            :
            <TicketsList />}
        </div>
      </div>
    </div >
  );
}