import classNames from "classnames";
import { nanoid } from "nanoid";
import { Seat } from "../../../index";
import CoachMapProps from "../CoachMapsInterfaces/CoachMapProps";

function SecondClassCoachMap(props: CoachMapProps) {
  const { bemClass, seats, handleClick } = props;

  const className = 'coach-map-second'
  return (
    <div className={classNames(`${className}`, { [`${bemClass}__${className}`]: bemClass })}>
      {seats.map(item => <Seat
        key={nanoid()}
        bemClass={className}
        item={item}
        handleClick={handleClick}
        type='basic' />)}
    </div>
  );
}

export default SecondClassCoachMap;