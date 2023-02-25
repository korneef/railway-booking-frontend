import { TicketFilterForm } from "widgets";
import { LastTicketCard } from "features";

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
      <TicketFilterForm />
      <LastTicketCard
        from={from}
        to={to}
        minPrice={2700}
        airConditioning={true}
        wifi={false}
        isExpress={true}
      />
      <LastTicketCard
        from={from}
        to={to}
        minPrice={2700}
        airConditioning={true}
        wifi={false}
        isExpress={true}
      />
      <LastTicketCard
        from={from}
        to={to}
        minPrice={2700}
        airConditioning={true}
        wifi={false}
        isExpress={true}
      />
    </div>
  );
}