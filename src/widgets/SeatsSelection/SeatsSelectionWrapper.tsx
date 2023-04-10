import SeatsSelection from "./SeatsSelection";
import { useAppSelector } from "app/store/hooks";
import { Button } from "shared";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type IProps = {
  bemClass?: string
}

function SeatsSelectionWrapper(props: IProps) {
  const { bemClass = '' } = props;
  const preOrder = useAppSelector(state => state.order.preOrder);
  const selectedTicket = useAppSelector(state => state.tickets.selectedTicket);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const ticketCount = preOrder.adultCount + preOrder.childrenCount;
    const seatsCountDeparture = preOrder.departure.selectedSeats.length;
    const seatsCountArrival = selectedTicket?.arrival ? preOrder.arrival.selectedSeats.length : 0;

    if (ticketCount === 0) {
      setButtonDisabled(true);
      return;
    };
    if (!!selectedTicket?.arrival && seatsCountArrival === ticketCount && seatsCountDeparture === ticketCount) {
      setButtonDisabled(false);
      return;
    }
    if (!selectedTicket?.arrival && seatsCountDeparture === ticketCount) {
      setButtonDisabled(false);
      return;
    }
    setButtonDisabled(true);

  }, [preOrder, selectedTicket?.arrival]);

  const handleClick = () => {
    navigate('/order/step/2')
  }

  return (
    <>
      <SeatsSelection direciton='departure' price={preOrder.departure.price}/>
      {selectedTicket?.arrival && <SeatsSelection direciton='arrival' price={preOrder.arrival.price}/>}
      <div className={`${bemClass}__button-wrapper`}>
        <Button
          variant='standart'
          className={bemClass}
          disabled={buttonDisabled}
          onClick={handleClick}>ДАЛЕЕ</Button></div>
    </>
  );
}

export default SeatsSelectionWrapper;