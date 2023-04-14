import classNames from "classnames";
import { IPriceInfo, Panel, Button, Coffee, WiFi, Express, WidgetHeader } from "../../shared";
import { TrainGeneralInfo, TrainTimeTableInfo, TicketSeatsInfo } from "../../entities/index";
import { useAppDispatch, useAppSelector } from "app/store/hooks";
import { useNavigate } from "react-router-dom";
import { unselectTicket } from "../../app/store/ticketsListSlices";
import { cleanOrder } from "app/store/orderSlices";

function TrainSummaryInfo() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const ticket = useAppSelector(state => state.tickets.selectedTicket);
  if (ticket === null) return (<></>);
  const className = 'ticket-card';

  function minPriceCoise(priceInfo: IPriceInfo | undefined): number | null {
    if (priceInfo) return Math.min(...Object.values(priceInfo as number))
    return null
  }

  const fourthClassPrice = minPriceCoise(ticket?.departure.price_info.fourth);
  const fourthClassCount = ticket?.departure.available_seats_info.fourth

  const tirhdClassPrice = minPriceCoise(ticket?.departure.price_info.third);
  const thirdClassCount = ticket?.departure.available_seats_info.third;

  const secondClassPrice = minPriceCoise(ticket?.departure.price_info.second);
  const secondClassCount = ticket?.departure.available_seats_info.second;

  const firstClassPrice = minPriceCoise(ticket?.departure.price_info.first);
  const firstClassCount = ticket?.departure.available_seats_info.first;

  const handleClick = () => {
    dispatch(unselectTicket());
    dispatch(cleanOrder());
    navigate('/order/step/1')

  }

  return (

    <Panel variant='white' bemClass={className} >
      <WidgetHeader bemClass={className}>Поезд</WidgetHeader>
      <div className={`${className}__wrapper`}>
        <TrainGeneralInfo
          bemClass={className}
          trainNumber={ticket.departure.train.name}
          fromCity={ticket.departure.from.city.name}
          toCity={ticket.departure.to.city.name}
          toStation={ticket.departure.to.railway_station_name} />
        <div className={classNames(className + '__shedule')}>
          <TrainTimeTableInfo bemClass={className} direction="departure" duration={ticket.departure.duration} from={ticket.departure.from} to={ticket.departure.to} />
          {ticket.arrival ? <TrainTimeTableInfo bemClass={className} direction="arrival" duration={ticket.arrival.duration} from={ticket.arrival.from} to={ticket.arrival.to} /> : false}
        </div>
        <div className={classNames(className + '__aside-wrapper')}>
          <div className={classNames(className + '__seats-info')}>
            {fourthClassPrice && fourthClassCount && <TicketSeatsInfo seatsType="Сидячий" seatsPrice={fourthClassPrice} seatsCount={fourthClassCount} bemClass={className} />}
            {tirhdClassPrice && thirdClassCount && <TicketSeatsInfo seatsType="Плацкарт" seatsPrice={tirhdClassPrice} seatsCount={thirdClassCount} bemClass={className} />}
            {secondClassPrice && secondClassCount && <TicketSeatsInfo seatsType="Купэ" seatsPrice={secondClassPrice} seatsCount={secondClassCount} bemClass={className} />}
            {firstClassPrice && firstClassCount && <TicketSeatsInfo seatsType="Люкс" seatsPrice={firstClassPrice} seatsCount={firstClassCount} bemClass={className} />}
          </div>
          <div className={classNames(className + '__additional-services')}>
            {ticket.have_air_conditioning && <Coffee className={classNames(className + '__option-icon')} />}
            {ticket.have_wifi && <WiFi className={classNames(className + '__option-icon')} />}
            {ticket.is_express && <Express className={classNames(className + '__option-icon')} />}
          </div>
          <div className={classNames(className + '__take-seats-button-wrapper')}>
            <Button variant='transparent' className={className} onClick={handleClick}>Изменить</Button>
          </div>
        </div>
      </div>
    </Panel >
  );
}

export default TrainSummaryInfo;