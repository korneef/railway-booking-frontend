import { useEffect, useState } from "react";
import { useAppSelector } from "app/store/hooks";
import { useNavigate } from "react-router-dom";
import { Button } from "shared";

function ToStep2ButtonWrapper() {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const preOrder = useAppSelector(state => state.order.preOrder);
  const selectedTicket = useAppSelector(state => state.tickets.selectedTicket);
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
    navigate('/order/step/2');
  }
  return (
    <div className={`order-step__button-wrapper`}>
    <Button
      variant='standart'
      className={`order-step`}
      disabled={buttonDisabled}
      onClick={handleClick}>ДАЛЕЕ</Button></div>
  );
}

export default ToStep2ButtonWrapper;