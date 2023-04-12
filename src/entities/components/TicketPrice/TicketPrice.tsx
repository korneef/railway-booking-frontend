import { useAppSelector } from 'app/store/hooks';
import { numberWithSpaces } from 'shared';

interface IProps {
  bemClass: string;
  direction: 'departure' | 'arrival'
}

function TicketPrice({bemClass, direction}: IProps) {
  const departurePrice = useAppSelector(state => state.order.preOrder.departure.price);
  const arrivalPrice = useAppSelector(state => state.order.preOrder.arrival.price);
  const price = direction === 'departure' ? numberWithSpaces(departurePrice) : numberWithSpaces(arrivalPrice)
  return (
    <div className={`${bemClass}__price-wrapper`}>
    <span className={`${bemClass}__price`} >{price}</span>
    <span className={`${bemClass}__price-valute`} >&#8381;</span>
  </div>
  );
}

export default TicketPrice;