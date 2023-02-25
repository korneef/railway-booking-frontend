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
  return (
    <div>

    </div>
  );
}

export default LastTicketCard;