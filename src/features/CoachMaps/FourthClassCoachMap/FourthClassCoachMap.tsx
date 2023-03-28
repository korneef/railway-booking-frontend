import classNames from "classnames";
import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import { ISeat } from "shared";
import { Seat } from "entities/index";
import CoachMapProps from "../CoachMapsInterfaces/CoachMapProps";

function FourthClassCoachMap(props: CoachMapProps) {
  const { bemClass, vacancySeats } = props;
  const [seats, setSeats] = useState<Array<ISeat>>([])

  useEffect(() => {
    const allSeats: Array<ISeat> = []
    for (let i = 1; i < 63; i++) {
      const seat = vacancySeats.find(item => item.index === i);
      if (seat) {
        allSeats.push({ ...seat, selected: false })
      } else {
        allSeats.push({ index: i, available: false, selected: false })
      }
    }
    setSeats(allSeats)
  }, [vacancySeats])

  const handleClick = (clickedItem: ISeat) => {
    if (!clickedItem.available) return
    setSeats(prevSeats => {
      let seatIndex = prevSeats.findIndex(item => item === clickedItem);
      if (seatIndex !== -1) {
        prevSeats[seatIndex] = { ...prevSeats[seatIndex], selected: !prevSeats[seatIndex].selected }
      }
      return [...prevSeats]
    })

  }
  const className = 'coach-map-fourth'
  return (
    <div className={classNames(`${className}`, { [`${bemClass}__${className}`]: bemClass })}>
      {seats.map(item => <Seat
        key={nanoid()}
        bemClass={className}
        item={item}
        handleClick={handleClick}
        type='chair' />)}
    </div>
  );
}

export default FourthClassCoachMap;