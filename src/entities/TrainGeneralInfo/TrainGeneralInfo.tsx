import classNames from "classnames";
import { TrainLogo } from "shared";

interface TrainGeneralInfoProps {
  bemClass: string,
  trainNumber: string,
  fromCity: string,
  toCity: string
}

function TrainGeneralInfo(props: TrainGeneralInfoProps) {
  const {
    bemClass,
    trainNumber,
    fromCity,
    toCity
  } = props;

  const className = 'train-info'

  return (
    <div className={classNames(bemClass + '__general')}>
      <div><TrainLogo /></div>
      <div className={classNames(bemClass + '__train-number')}>{trainNumber}</div>
      <div className={classNames(bemClass + '__direction')}>
        <div className={classNames(bemClass + '__direction-city', bemClass + '__direction-city_from')}>{fromCity}</div>
        <div className={classNames(bemClass + '__direction-city', bemClass + '__direction-city_to')}>{toCity}</div>
      </div>
    </div>
  );
}

export default TrainGeneralInfo;