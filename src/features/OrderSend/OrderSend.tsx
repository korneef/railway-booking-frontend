import { Button } from "shared";
import { useAppSelector } from "app/store/hooks";
import { useAppDispatch } from "app/store/hooks";
import {
  addUserInOrder,
  addDepartureSeatsInOrder,
  addArrivalSeatsInOrder,
  setDepartureId,
  setArrivalId
} from "app/store/orderSlices";
import { IPersonInfo } from "app/store/orderSlices";
import { backendURL } from "shared";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function OrderSend() {
  const dispatch = useAppDispatch();
  const order = useAppSelector(state => state.order.order)
  const preOrder = useAppSelector(state => state.order.preOrder);
  const selectedTicket = useAppSelector(state => state.tickets.selectedTicket);
  const navigate = useNavigate()

  useEffect(() => {
    if (order.user === null) return;
    fetch(`${backendURL}/order`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(order)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(() => {
        navigate('/thanks-for-your-order')
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, [navigate, order])



  if (selectedTicket === null) return (<></>);

  const className = 'order-send';

  const handleClick = () => {
    preOrder.user !== null && dispatch(addUserInOrder(preOrder.user));

    const departureId = selectedTicket.departure._id;
    const departureSeats = preOrder.departure.selectedSeats.map((item, index) => {
      const { persons } = preOrder;
      const seat = {
        coach_id: item.coach_id,
        seat_number: item.seat_number,
        person_info: persons[index] as IPersonInfo,
        is_child: !persons[index]?.is_adult,
        include_children_seat: false,
      }
      return seat;
    });

    dispatch(addDepartureSeatsInOrder(departureSeats));
    dispatch(setDepartureId(departureId));

    if (preOrder.arrival !== undefined && selectedTicket.arrival !== undefined) {
      const arrivalId = selectedTicket.arrival._id
      const arrivalSeats = preOrder.arrival.selectedSeats.map((item, index) => {
        const { persons } = preOrder;
        const seat = {
          coach_id: item.coach_id,
          seat_number: item.seat_number,
          person_info: persons[index] as IPersonInfo,
          is_child: !persons[index]?.is_adult,
          include_children_seat: false,
        }
        return seat;
      });

      dispatch(addArrivalSeatsInOrder(arrivalSeats));
      dispatch(setArrivalId(arrivalId));
    }
  }

  return (
    <div className={className}>
      <Button variant='standart' className={`${className}__button`} onClick={handleClick}>ПОДТВЕРДИТЬ</Button>
    </div>
  );
}

export default OrderSend;