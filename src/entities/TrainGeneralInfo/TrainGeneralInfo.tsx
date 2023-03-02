import classNames from "classnames";
import { TrainLogo } from "shared";
import { toUpperCaseFirst } from "shared";

interface TrainGeneralInfoProps {
  bemClass: string,
  trainNumber: string,
  fromCity: string,
  toCity: string,
  toStation: string,
}

function TrainGeneralInfo(props: TrainGeneralInfoProps) {
  const {
    bemClass,
    trainNumber,
    fromCity,
    toCity,
    toStation
  } = props;

  const className = 'train-info'

  return (
    <div className={classNames(bemClass + '__general', className)}>
      <div><TrainLogo /></div>
      <div className={classNames(className + '__train-number')}>{trainNumber}</div>
      <div className={classNames(className + '__direction')}>
        <div className={classNames(className + '__direction-city', className + '__direction-city_from')}>{toUpperCaseFirst(fromCity)}</div>
        <div className={classNames(className + '__direction-city', className + '__direction-city_to')}>{toUpperCaseFirst(toCity)}</div>
        <div className={classNames(className + '__direction-city', className + '__direction-city_to')}>«{toUpperCaseFirst(toStation)}»</div>
      </div>
    </div>
  );
}

export default TrainGeneralInfo;