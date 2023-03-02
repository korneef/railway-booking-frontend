import classNames from "classnames";
import { Panel } from "shared";
import { ITrainInformation } from "entities";
import { TrainGeneralInfo, TrainTimeTableInfo} from "../../entities/index";
import PointInfo from "shared/components/PointInfo/PointInfo";

interface TicketCardProps {
  ticket: {
    departure: ITrainInformation,
    arrival?: ITrainInformation,

    have_first_class?: boolean,
    have_second_class?: boolean,
    have_third_class?: boolean,
    have_fourth_class?: boolean,
    have_wifi?: boolean,
    have_air_conditioning?: boolean,
    is_express?: boolean,
    min_price?: number,
    available_seats?: number,
  }
}

function TicketCard(props: TicketCardProps) {
  const { ticket } = props
  const className = 'ticket-card'
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

      </div>
      <div className={classNames(className + '__aside-wrapper')}>
        <div className={classNames(className + '__seats-info')}></div>
        <div className={classNames(className + '__additional-services')}></div>
        <div className={classNames(className + '__take-seats-button-wrapper')}></div>
      </div>
    </Panel >
  );
}

export default TicketCard;

