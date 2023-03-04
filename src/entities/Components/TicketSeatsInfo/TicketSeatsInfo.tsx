import classNames from "classnames";
import { numberWithSpaces } from "shared";


interface TicketSeatsInfoProps {
  seatsType: string,
  seatsCount: number,
  seatsPrice: number,
  bemClass?: string
}

function TicketSeatsInfo(props: TicketSeatsInfoProps) {
  const {  seatsType, seatsCount, seatsPrice, bemClass} = props;

  const className = 'ticket-seats-info'
  return (
    <div className={classNames({[`${bemClass}__${className}`]: bemClass}, className)}>
      <div className={`${className}__seats-type`}>{seatsType}</div>
      <div className={`${className}__seats-count`}>{seatsCount}</div>
      <div className={`${className}__seats-text`}>от</div>
      <div className={`${className}__seats-price`}>{numberWithSpaces(seatsPrice)}</div>
      <div className={`${className}__seats-valute`}>&#8381;</div>
    </div>
  );
}

export default TicketSeatsInfo;