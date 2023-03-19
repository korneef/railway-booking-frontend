import { Price } from "shared";
import classNames from "classnames";

interface SeatInformationProps {
  price: number,
  type: string,
  count: number,
  bemClass: string,
  onlyPrice: boolean,
}

function SeatInformation({ price, type, count, bemClass, onlyPrice }: SeatInformationProps) {

  const className = 'seat-element';
  return (
    <div className={classNames(className, `${bemClass}__${className}`)}>
      <div className={`${className}__name`}>{onlyPrice && type}<span className={`${className}__count`}>{onlyPrice && count}</span></div>
      <Price price={price} bemClass={className}></Price>
    </div>
  );
}

export default SeatInformation;