import { TicketFilterForm } from "widgets";
import { LastTicketCard, TicketCard } from "features";

export default function OrderStep1() {
  const from = {
    railway_station_name: 'Ярославский',
    city: 'Москва'
  }
  const to = {
    railway_station_name: 'Балаково',
    city: 'балаково'
  }
  return (
    <div className="wrapped">
      <TicketCard/>
    </div>
  );
}