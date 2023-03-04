import classNames from "classnames";
import { Panel } from "shared";
import { ITrainInformation } from "entities";
import { TrainGeneralInfo, TrainTimeTableInfo, TicketSeatsInfo } from "../../entities/index";
import { Button, Coffee, WiFi, Express } from "shared";

interface TicketCardProps {
  ticket: {
    departure: ITrainInformation,
    arrival?: ITrainInformation,

    have_first_class: boolean,
    have_second_class: boolean,
    have_third_class: boolean,
    have_fourth_class: boolean,
    have_wifi: boolean,
    have_air_conditioning: boolean,
    is_express: boolean,
    min_price: number,
    available_seats: number,
  }
}

function TicketCard(props: TicketCardProps) {
  const { ticket } = props
  const className = 'ticket-card';
  console.log(ticket)

  return (
    <Panel bemClass={className} >
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
          <TicketSeatsInfo seatsType="Сидячий" seatsPrice={3480} seatsCount={80} bemClass={className} />
          <TicketSeatsInfo seatsType="Плацкарт" seatsPrice={4870} seatsCount={112} bemClass={className} />
          <TicketSeatsInfo seatsType="Люкс" seatsPrice={13480} seatsCount={80} bemClass={className} />
          <TicketSeatsInfo seatsType="Купэ" seatsPrice={8200} seatsCount={657} bemClass={className} />
        </div>
        <div className={classNames(className + '__additional-services')}>
          {ticket.have_air_conditioning && <Coffee className={classNames(className + '__option-icon')} />}
          {ticket.have_wifi && <WiFi className={classNames(className + '__option-icon')} />}
          {ticket.is_express && <Express className={classNames(className + '__option-icon')} />}
        </div>
        <div className={classNames(className + '__take-seats-button-wrapper')}>
          <Button variant='small' className={className}>Выбрать места</Button>
        </div>
      </div>
    </Panel >
  );
}

export default TicketCard;

