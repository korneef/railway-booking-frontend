import { CoachInfo, FirstClassCoachMap, SecondClassCoachMap, ThirdClassCoachMap, FourthClassCoachMap } from '../../entities/index';
import { useAppSelector } from '../../app/store/hooks';
import { useAppDispatch } from '../../app/store/hooks';
import { setSelectDepartureSeat, setSelectArrivalSeat, unsetSelectSeat } from 'app/store/orderSlices';
import { ISeat } from 'shared';
import { useState, useEffect } from 'react';

interface IProps {
  index: number,
  direction: 'departure' | 'arrival'
}

function Coach({ index, direction }: IProps) {
  const [seats, setSeats] = useState<Array<ISeat>>([])
  const dispatch = useAppDispatch();
  const coachDireciton = useAppSelector(state => state.tickets.wagonInformation);
  const preOrder = useAppSelector(state => state.order.preOrder)
  const coach = direction === 'departure' ? coachDireciton.departure : coachDireciton.arrival;
  const seatSelectActon = direction === 'departure' ? setSelectDepartureSeat : setSelectArrivalSeat;
  const selectedSeats = direction === 'departure' ? preOrder.departure.selectedSeats : preOrder.arrival.selectedSeats;
  const selectedCoach = coach[index];
  const vacancySeats = selectedCoach.seats;

  let CoachMap = FirstClassCoachMap;
  let seatsCount: number = 0;
  const topPrice = selectedCoach.coach.top_price;
  const bottomPrice = selectedCoach.coach.bottom_price;
  const sidePrice = selectedCoach.coach.side_price;
  const classType = selectedCoach.coach.class_type;

  switch (classType) {
    case 'first':
      CoachMap = FirstClassCoachMap;
      seatsCount = 17;
      break
    case 'second':
      CoachMap = SecondClassCoachMap;
      seatsCount = 33;
      break
    case 'third':
      CoachMap = ThirdClassCoachMap;
      seatsCount = 49;
      break
    case 'fourth':
      CoachMap = FourthClassCoachMap
      seatsCount = 63;
      break
  }

  useEffect(() => {
    const allSeats: Array<ISeat> = [];
    for (let i = 1; i < seatsCount; i++) {

      const seat = vacancySeats.find(item => item.index === i);
      if (seat) {
        const id = coach[index].coach._id
        const selected = !!selectedSeats.find(item => item.coach_id === id && item.seat_number === i);
        allSeats.push({ ...seat, selected })
      } else {
        allSeats.push({ index: i, available: false, selected: false })
      }
    }
    setSeats(allSeats);

  }, [seatsCount, vacancySeats, selectedSeats, coach, index])

  const handleClick = (clickedItem: ISeat) => {
    if (!clickedItem.available) return;
    const coach_id = coach[index].coach._id;
    let price = bottomPrice;
    if ((classType !== 'first' && classType !== 'fourth') && !(clickedItem.index % 2)) price = topPrice;
    if (classType !== 'fourth' && clickedItem.index > 32) price = sidePrice;
    const seat_number = clickedItem.index;
    !clickedItem.selected ? dispatch(seatSelectActon({ coach_id, seat_number, price })) : dispatch(unsetSelectSeat({ coach_id, seat_number }))
  }

  return (
    <>
      <CoachInfo direction={direction} index={index} />
      <CoachMap seats={seats} handleClick={handleClick} />
    </>
  );
}

export default Coach;