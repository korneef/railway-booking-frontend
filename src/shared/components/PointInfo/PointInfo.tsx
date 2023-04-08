import { IDirectionInfo } from "../..";
import { toUpperCaseFirst } from "../..";
import moment from "moment";
import classNames from "classnames";
import 'moment/locale/ru';


interface PointInfoProps extends IDirectionInfo {
  bemClass?: string,
}

function PointInfo(props: PointInfoProps) {
  const { datetime, city, railway_station_name, bemClass } = props;
  const className = 'point-info'
  return (
    <div className={classNames({ [`${bemClass}__${className}`]: bemClass }, className)}>
      <div className={`${className}__wrapper`}>
        <div className={`${className}__time`}>{moment(datetime).format('LT')}</div>
        <div className={`${className}__city`}>{toUpperCaseFirst(city.name)}</div>
        <div className={`${className}__railway-station-name`}>{toUpperCaseFirst(railway_station_name)}</div>
      </div>
    </div >
  );
}

export default PointInfo;

