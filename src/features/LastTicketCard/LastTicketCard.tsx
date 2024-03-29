import classNames from "classnames";
import { Express, WiFi, Coffee } from "../../shared";
import { toUpperCaseFirst, Panel } from "../../shared";
import ITrainInformation from "../../entities/Interfaces/ITrainInformation";
import { IDirectionInfo } from "../../shared";
import { ITicket } from "app/store/ticketsListSlices";
import { useAppDispatch } from 'app/store/hooks';
import { setSelectedTicket } from 'app/store/ticketsListSlices';

interface ILastTicketCardProps extends Pick<ITrainInformation, 'min_price' | 'have_air_conditioning' | 'have_wifi' | 'is_express'> {
  from: Omit<IDirectionInfo, 'datetime'>,
  to: Omit<IDirectionInfo, 'datetime'>
  ticket: ITicket;
}


function LastTicketCard(props: ILastTicketCardProps) {
  const {
    from,
    to,
    min_price,
    have_air_conditioning,
    have_wifi,
    is_express,
    ticket
  } = props;
  const dispatch = useAppDispatch();
  const className = 'last-ticket-card'

  const handleClick = (ticket: ITicket) => {
    dispatch(setSelectedTicket(ticket))
  }


  return (
    <Panel variant='white' bemClass={className} >
      <div className={`${className}__wrapper`} onClick={() => handleClick(ticket)}>
        <div className={classNames(className + '__direction-wrapper')}>
          <div className={classNames(className + '__from')}>
            <h2 className={classNames(className + '__city-name')}>{toUpperCaseFirst(from.city.name)}</h2>
            <span className={classNames(className + '__railway-station-name')}>{toUpperCaseFirst(from.railway_station_name)}</span>
          </div>
          <div className={classNames(className + '__to')}>
            <h2 className={classNames(className + '__city-name')}>{toUpperCaseFirst(to.city.name)}</h2>
            <span className={classNames(className + '__railway-station-name')}>{toUpperCaseFirst(to.railway_station_name)}</span>
          </div>
        </div>
        <div className={classNames(className + '__options-wrapper')}>
          <div className={classNames(className + '__options')} >
            {have_air_conditioning && <Coffee className={classNames(className + '__option-icon')} />}
            {have_wifi && <WiFi className={classNames(className + '__option-icon')} />}
            {is_express && <Express className={classNames(className + '__option-icon')} />}
          </div>
          <div className={classNames(className + '__price-container')}>
            <span className={classNames(className + '__price-from')}>от</span>
            <span className={classNames(className + '__price')} >{min_price}</span>
            <span className={classNames(className + '__price-valute')} >&#8381;</span>
          </div>
        </div>
      </div>
    </Panel >
  );
}

export default LastTicketCard;