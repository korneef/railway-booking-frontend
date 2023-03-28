import classNames from "classnames";
import { ISeat } from "shared";

interface SeatProps {
  item: ISeat,
  handleClick: (argType: ISeat) => void;
  bemClass?: string,
  type: 'basic' | 'side' | 'chair' | 'luxury'
}

function Seat(props: SeatProps) {
  const { item, handleClick, bemClass, type } = props;

  const className = 'seat'

  return (
    <div
      className={
        classNames(
          { [`${bemClass}__seat ${bemClass}__${className}-${item.index}`]: bemClass },
          `${className}`,
          `${className}__${type}`,
          { [`${className}_vacancy`]: (item.available) },
          { [`${className}_selected`]: (item.selected) }
        )
      }
      onClick={() => handleClick(item)}

    >{item.index}</div>
  )
}


export default Seat;