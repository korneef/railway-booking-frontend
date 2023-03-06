import classNames from "classnames";
import { toUpperCaseFirst } from "shared";

interface TrainPathProps {
  bemClass?: string;
  fromCity: string,
  toCity: string,
  toStation: string,
}

function TrainPath(props: TrainPathProps) {
  const { bemClass, fromCity, toCity, toStation } = props;

  const className = 'train-path';

  return (
    <div className={classNames(className, {[`${bemClass}__${className}`]: bemClass})}>
      <div className={classNames(className + '__direction-city', className + '__direction-city_from')}>{toUpperCaseFirst(fromCity)}</div>
      <div className={classNames(className + '__direction-city', className + '__direction-city_to')}>{toUpperCaseFirst(toCity)}</div>
      <div className={classNames(className + '__direction-city', className + '__direction-city_to')}>«{toUpperCaseFirst(toStation)}»</div>
    </div>
  );
}

export default TrainPath;