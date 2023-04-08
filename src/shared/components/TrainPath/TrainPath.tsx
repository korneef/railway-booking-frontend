import classNames from "classnames";
import { toUpperCaseFirst } from "../..";

interface TrainPathProps {
  bemClass?: string;
  fromCity: string,
  toCity: string,
  toStation?: string,
}

function TrainPath(props: TrainPathProps) {
  const { bemClass, fromCity, toCity, toStation } = props;

  const className = 'train-path';

  return (
    <div className={classNames(className, {[`${bemClass}__${className}`]: bemClass})}>
      <div className={classNames(className + '__direction-city', className + '__direction-city_from')}>{toUpperCaseFirst(fromCity)}</div>
      <div className={classNames(className + '__direction-city', className + '__direction-city_to')}>{toUpperCaseFirst(toCity)}</div>
      {toStation ? <div className={classNames(className + '__direction-city', className + '__direction-city_to')}>«{toUpperCaseFirst(toStation)}»</div> : null}
    </div>
  );
}

export default TrainPath;