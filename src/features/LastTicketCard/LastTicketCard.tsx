import classNames from "classnames";
import { Express, WiFi, Coffee } from "shared";
import { toUpperCaseFirst, Panel } from "shared";

interface DirectionInfo {
  railway_station_name: string,
  city: string
}


interface LastTicketCardProps {
  from: DirectionInfo,
  to: DirectionInfo,
  minPrice: number,
  airConditioning: boolean,
  wifi: boolean,
  isExpress: boolean,
}


function LastTicketCard(props: LastTicketCardProps) {
  const {
    from,
    to,
    minPrice,
    airConditioning,
    wifi,
    isExpress } = props;

  const className = 'last-ticket-card'

  return (
    <Panel bemClass={className} >
      <div className={classNames(className + '__direction-wrapper')}>
        <div className={classNames(className + '__from')}>
          <h2 className={classNames(className + '__city-name')}>{toUpperCaseFirst(from.city)}</h2>
          <span className={classNames(className + '__railway-station-name')}>{toUpperCaseFirst(from.railway_station_name)}</span>
        </div>
        <div className={classNames(className + '__to')}>
          <h2 className={classNames(className + '__city-name')}>{toUpperCaseFirst(to.city)}</h2>
          <span className={classNames(className + '__railway-station-name')}>{toUpperCaseFirst(to.railway_station_name)}</span>
        </div>
      </div>
      <div className={classNames(className + '__options-wrapper')}>
        <div className={classNames(className + '__options')} >
          {airConditioning && <Coffee className={classNames(className + '__option-icon')} />}
          {wifi && <WiFi />}
          {isExpress && <Express />}
        </div>
        <div className={classNames(className + '__price-container')}>
          <span className={classNames(className + '__price-from')}>от</span>
          <span className={classNames(className + '__price')} >{minPrice}</span>
          <span className={classNames(className + '__price-valute')} >&#8381;</span>

        </div>
      </div>
    </Panel >
  );
}

export default LastTicketCard;