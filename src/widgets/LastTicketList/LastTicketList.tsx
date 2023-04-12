import { useState, useEffect } from 'react';
import { backendURL } from 'shared';
import { ITicket } from 'app/store/ticketsListSlices';
import { LastTicketCard } from 'features';


function LastTicketList() {
  const [lastTickets, setLastTickets] = useState<null | Array<ITicket>>(null);

  useEffect(() => {
    fetch(`${backendURL}/routes/last`)
      .then(response => response.json())
      .then(response => setLastTickets(response))
      .catch((err) => {
        console.log(err);
        setLastTickets(null);
      })
  }, [])

  const className = "last-tickets"

  return (<>
    {lastTickets && <div className={className}>
      <h2 className={`${className}__header`} >Последние билеты</h2>
      {lastTickets.map(item => <LastTicketCard key={item.departure._id} {...item.departure} />)}
    </div>}</>
  );
}

export default LastTicketList;