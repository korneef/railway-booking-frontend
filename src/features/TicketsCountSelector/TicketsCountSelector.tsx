import { useState } from 'react';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import classNames from 'classnames';
import { InputWithLabelOnInput } from 'shared';
import { ChangeEvent } from 'react';
import { setAdultCount, setChildCount } from 'app/store/orderSlices';

interface IProps {
  bemClass?: string,
}

function TicketsCount(props: IProps) {
  const { bemClass } = props;
  const available_seats = useAppSelector(state => state.tickets.selectedTicket?.available_seats);
  const adultCount = useAppSelector(state => state.order.preOrder.adultCount);
  const childCount = useAppSelector(state => state.order.preOrder.childrenCount);
  const dispatch = useAppDispatch();
  const [childWithoutTicket, setChildWithoutTicket] = useState(0);

  const setAdultChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (/^(\d+)$/.test(e.target.value) || e.target.value === '') {
      const value = Number(e.target.value);
      const available = available_seats ? available_seats - (childCount) : 0;
      available >= value && dispatch(setAdultCount(value));
    }
  }

  const setChildChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (/^(\d+)$/.test(e.target.value) || e.target.value === '') {
      const value = Number(e.target.value);
      const available = available_seats ? available_seats - (adultCount) : 0;
      available >= value && dispatch(setChildCount(value));
    }
  }

  const setChildWithoutTicketChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (/^(\d+)$/.test(e.target.value)) {
      setChildWithoutTicket(Number(e.target.value));
    }
    if (e.target.value === '') {
      setChildWithoutTicket(0)
    }
  }

  const className = 'tickets-count';
  return (
    <div className={classNames(className, { [`${bemClass}__${className}`]: bemClass })}>
      <h2 className={classNames(`${className}__header`, { [`${bemClass}__section-header`]: bemClass })}>Количество билетов</h2>
      <div className={`${className}__section-wrapper`}>
        <div className={`${className}__section`}>
          <InputWithLabelOnInput label='Взрослых —' changePassengerCount={setAdultChange} value={adultCount} />
          <div className={`${className}__section-description`}>{`Можно добавить еще ${available_seats && available_seats - (adultCount + childCount)} пассажиров`}</div>
        </div>
        <div className={`${className}__section`}>
          <InputWithLabelOnInput label='Детских —' changePassengerCount={setChildChange} value={childCount} />
          <div className={`${className}__section-description ${className}__section-description_children`}>
            {`Можно добавить еще ${available_seats && available_seats - (adultCount + childCount)} детей до 10 лет. Свое место в вагоне, как у взрослых, но дешевле
          в среднем на 50-65%`}
          </div>
        </div>
        <div className={`${className}__section`}>
          <InputWithLabelOnInput label='Детских «без места» —' changePassengerCount={setChildWithoutTicketChange} value={childWithoutTicket}/>
        </div>
      </div>
    </div>
  );
}

export default TicketsCount;