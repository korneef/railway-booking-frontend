import { Price } from "shared";
import classNames from "classnames";

interface SeatInformationProps {
  price: number,
  type: string,
  count: number,
  bemClass: string
}

function SeatInformation({ price, type, count, bemClass }: SeatInformationProps) {

  const className = 'seat-element';
  return (
    <div className={classNames(className, `${bemClass}__${className}`)}>
      <div className={`${className}__name`}>{type}<span className={`${className}__count`}>{count}</span></div>
      <Price price={price} bemClass={className}></Price>
    </div>
  );
}

export default SeatInformation;