import { numberWithSpaces } from "shared";
import classNames from "classnames";

interface PriceProps {
  price: number,
  bemClass?: string
}

function Price({ price, bemClass }: PriceProps) {
  const className = 'price-information'
  return (
    <div className={classNames(className, { [`${bemClass}__${className}`]: bemClass })}>
      <div className={`${className}__seats-price`}>{numberWithSpaces(price)}</div>
      <div className={`${className}__seats-valute`}>&#8381;</div>
    </div>
  );
}

export default Price;