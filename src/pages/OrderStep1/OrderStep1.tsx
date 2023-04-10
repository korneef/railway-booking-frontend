import { TicketFilterForm, TicketsList, SeatsSelection } from "../../widgets";
import { LastTicketCard } from "../../features";
import { useAppSelector } from "../../app/store/hooks";
import { useEffect, useState } from "react";
import { ITicket } from "../../app/store/ticketsListSlices";
import { backendURL, useTicketsSearchRequest } from 'shared'

export default function OrderStep1() {
  const selectedTicket = useAppSelector(state => state.tickets.selectedTicket);
  const requestParams = useAppSelector(state => state.ticketsSearchRequest.params);
  const sendRequest = useTicketsSearchRequest();

  //TODO перенести last tickets в глобальный стейт для возможности заказа билетов по нему тоже
  const [lastTickets, setLastTickets] = useState<null | Array<ITicket>>(null);
  useEffect(() => {
    fetch(`${backendURL}/routes/last`)
      .then(response => response.json())
      .then(response => setLastTickets(response))
      .catch((err) => {
        console.log(err);
        setLastTickets(null)
      })
  }, [])
  useEffect(()=>{
    sendRequest(requestParams);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [requestParams])
  return (
    <div className="wrapped">
      <div className="order">
        <div className="order__aside">
          <TicketFilterForm />
          {/* TODO вынести last-tickets в отдельный компонент */}
          {lastTickets && <div className="last-tickets">
            <h2 className='last-tickets__header' >Последние билеты</h2>
            {lastTickets.map(item => <LastTicketCard key={item.departure._id} {...item.departure} />)}
          </div>}
        </div>
        <div>
          {selectedTicket ? <SeatsSelection direciton='departure' /> : <TicketsList />}
          {selectedTicket?.arrival && <SeatsSelection direciton='arrival' />}
        </div>
      </div>
    </div>
  );
}