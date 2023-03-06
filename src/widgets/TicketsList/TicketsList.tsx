import { TicketCard } from "features";
import { ITrainInformation } from "entities";
import { IAviableSeatsInfo } from "shared";

interface Ticket {
  available_seats: number,
  available_seats_info: IAviableSeatsInfo,
  departure: ITrainInformation,
  arrival?: ITrainInformation,
  have_air_conditioning: boolean
  have_first_class: boolean
  have_fourth_class: boolean
  have_second_class: boolean
  have_third_class: boolean
  have_wifi: boolean
  is_express: boolean
  min_price: number
}

interface TicketListProps {
  total_count: number,
  children: Array<Ticket> | undefined,
}

function TicketsList(props: TicketListProps) {
  const { total_count, children } = props;

  const className = 'tickets-list'
  return (
    <div className={`${className}`}>
      <div className={`${className}__header`}>
        <div className={`${className}__total-count`}>найдено {total_count}</div>
        <div className={`${className}__sort-selection`}>
          сортировать по:<select className={`${className}__sort-selection-select`} name='sort by'>
            <option className={`${className}__sort-selection-option`} value="time">Времени</option>
            <option className={`${className}__sort-selection-option`} value="duration">Длительности</option>
            <option className={`${className}__sort-selection-option`} value="price">Стоимости</option>
          </select>
        </div>
        <div className={`${className}__displayed-count`}> Показывать по:
          <button>5</button>
          <button>10</button>
          <button>20</button>
        </div>
      </div>
      <div className={`${className}__main`}>
        {children !== undefined ? children.map(item => <TicketCard key={item.departure._id} ticket={item}/>) : null}
      </div>
      <div className={`${className}__pagination`}>
        <button className={`${className}__pagination-button`} >{'<'}</button>
        <button className={`${className}__pagination-button ${className}__pagination-button_active`} >1</button>
        <button className={`${className}__pagination-button`} >2</button>
        <button className={`${className}__pagination-button`} >3</button>
        <button className={`${className}__pagination-button`} >{'>'}</button>
      </div>

    </div>
  );
}

export default TicketsList;