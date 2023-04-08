import classNames from "classnames";
import { Price } from "../../../shared";

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
      <Price price={seatsPrice}/>
    </div>
  );
}

export default TicketSeatsInfo;