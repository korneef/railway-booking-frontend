import { useAppSelector } from "app/store/hooks";
import { Panel, numberWithSpaces} from "shared";
import { OrderDirectionInfo } from "features";

//TODO разобраться с экспортом файла из entities
import PassengersInfo from "entities/components/PassengersInfo/PassengersInfo";


function OrderInfo() {
  const ticket = useAppSelector(state => state.tickets.selectedTicket);
  const departurePrice = useAppSelector(state => state.order.preOrder.departure.price);
  const arrivalPrice = useAppSelector(state => state.order.preOrder.departure.price);
  if (ticket === null) return <></>;
  const departure = ticket.departure;
  const arrival = ticket.arrival;
  const className = 'order-info';
  return (
    <Panel bemClass={className} variant='black'>
      <div className={`${className}__section`}>
        <div className={`${className}__section-header ${className}__section-header_main`}>Детали поездки</div>
      </div>
      <div className={`${className}__section`}>
        <OrderDirectionInfo direction='departure' ticket={departure} />
      </div>
      {arrival !== undefined ?
        <div className={`${className}__section`}>
          <OrderDirectionInfo direction='arrival' ticket={arrival} />
        </div>
        : null}
      <div className={`${className}__section`}>
        <PassengersInfo />
      </div>
      <div className={`${className}__section`}>
        <div className={`${className}__price-info`}>
          <div className={`${className}__price-info-name`}>ИТОГ</div>
          <div className={`${className}__price-info-price`}>{numberWithSpaces(departurePrice + arrivalPrice)}</div>
        </div>
      </div>
    </Panel>
  );
}

export default OrderInfo;