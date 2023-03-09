import classNames from "classnames";
import { IDirectionInfo, PointInfo, TrainDirection } from "shared";


interface TrainTimeTableInfoProps {
  direction: 'departure' | 'arrival',
  duration?: number,
  from: IDirectionInfo,
  to: IDirectionInfo,
  bemClass?: string,
}

function TrainTimeTableInfo(props: TrainTimeTableInfoProps) {
  const { direction, duration, from, to, bemClass } = props;
  const className = 'train-time-table-info';

  return (
    <div className={classNames({[`${bemClass}__${className}`]: bemClass}, className)}>
      {direction === 'departure' ? <PointInfo bemClass={className} {...from}/> : <PointInfo bemClass={className} {...to}/>}
      <TrainDirection duration={duration} direciton={direction} bemClass={className}/>
      {direction === 'departure' ? <PointInfo bemClass={className} {...to}/> : <PointInfo bemClass={className} {...from}/>}
    </div>
  );
}

export default TrainTimeTableInfo;