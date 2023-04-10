import { TicketFilterForm, TicketsList, SeatsSelection } from "../../widgets";
import { LastTicketCard } from "../../features";
import { useAppSelector } from "../../app/store/hooks";
import { ChangeEvent, useEffect, useState } from "react";
import { ITicket } from "../../app/store/ticketsListSlices";
import { Button, backendURL, useTicketsSearchRequest } from 'shared'

export default function OrderStep1() {
  const selectedTicket = useAppSelector(state => state.tickets.selectedTicket);
  const requestParams = useAppSelector(state => state.ticketsSearchRequest.params);
  const preOrder = useAppSelector(state => state.order.preOrder);
  const sendRequest = useTicketsSearchRequest();
  const className = 'order-step-1'
  //TODO перенести last tickets в глобальный стейт для возможности заказа билетов по нему тоже
  const [lastTickets, setLastTickets] = useState<null | Array<ITicket>>(null);
  const [buttonDisabled, setButtonDisabled] = useState(true)
  useEffect(() => {
    fetch(`${backendURL}/routes/last`)
      .then(response => response.json())
      .then(response => setLastTickets(response))
      .catch((err) => {
        console.log(err);
        setLastTickets(null)
      })
  }, [])
  useEffect(() => {
    sendRequest(requestParams);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [requestParams]);

  const handleClick = (e: React.FormEvent<HTMLButtonElement>) => {
    console.log(e)
  }
  return (
    <div className="wrapped">
      <div className={className}>
        <div className={`${className}__aside`}>
          <TicketFilterForm />
          {/* TODO вынести last-tickets в отдельный компонент */}
          {lastTickets && <div className="last-tickets">
            <h2 className='last-tickets__header' >Последние билеты</h2>
            {lastTickets.map(item => <LastTicketCard key={item.departure._id} {...item.departure} />)}
          </div>}
        </div>
        <div className={`${className}__tickets-wrapper`}>
          {selectedTicket ? <SeatsSelection direciton='departure' /> : <TicketsList />}
          {selectedTicket?.arrival && <SeatsSelection direciton='arrival' />}
          {selectedTicket && <Button
            variant='standart'
            className={className}
            disabled={false}
            onClick={handleClick}
          >
            ДАЛЕЕ
          </Button>}
        </div>
      </div>
    </div>
  );
}