import { OrangeArrow, getDuration } from "../..";
import classNames from "classnames";
import 'moment/locale/ru'

interface TrainDirectionProps {
  direciton: 'arrival' | 'departure',
  duration?: number,
  bemClass?: string
}


function TrainDirection(props: TrainDirectionProps) {
  const {direciton, duration, bemClass} = props;
  const className = 'train-direction-info'

  return (
    <div className={classNames({[`${bemClass}__${className}`]: bemClass}, className)}>
      {duration === undefined ? null : <div className={`${className}__duration`}>{getDuration(duration).timer}</div>}
      <OrangeArrow className={`${className}__arrow ${className}__arrow_${direciton}`}/>
    </div>
  );
}

export default TrainDirection;