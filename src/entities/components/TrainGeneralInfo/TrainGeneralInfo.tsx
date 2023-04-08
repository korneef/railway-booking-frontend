import classNames from "classnames";
import { TrainLogo } from "../../../shared";
import { TrainPath } from "../../../shared";

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
      <TrainPath fromCity={fromCity} toCity={toCity} toStation={toStation}/>
    </div>
  );
}

export default TrainGeneralInfo;