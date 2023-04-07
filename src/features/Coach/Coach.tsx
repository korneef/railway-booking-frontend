import { CoachInfo, FirstClassCoachMap, SecondClassCoachMap, ThirdClassCoachMap, FourthClassCoachMap } from 'entities/index';
import { useAppSelector } from 'app/store/hooks';

interface IProps {
  index: number
}

function Coach({ index }: IProps) {
  const coach = useAppSelector(state => state.tickets.wagonInformation);
  if (!coach) return <></>;
  const selectedCoadh = coach[index];
  let CoachMap;
  switch (selectedCoadh.coach.class_type) {
    case 'first':
      CoachMap = FirstClassCoachMap
      break
    case 'second':
      CoachMap = SecondClassCoachMap
      break
    case 'third':
      CoachMap = ThirdClassCoachMap
      break
    default:
      CoachMap = FourthClassCoachMap
      break
  }
  return (
    <>
      <CoachInfo index={index} />
      <CoachMap vacancySeats={selectedCoadh.seats} />
    </>
  );
}

export default Coach;