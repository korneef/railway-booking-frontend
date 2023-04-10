import classNames from "classnames";
import "react-datepicker/dist/react-datepicker.css";
import { Button, DateField } from "../../shared";
import CitiesSearchInput from "../../entities/components/CitiesSearchInput/CitiesSearchInput";
import { useTicketsSearchRequest } from "../../shared";
import { useAppSelector } from "app/store/hooks";

interface TicketSearchFormProps {
  bemClass: string,
  variant: string
}


function TicketSearchForm(props: TicketSearchFormProps) {
  const from_city_id = useAppSelector(state => state.ticketsSearchRequest.params.from_city_id);
  const to_city_id = useAppSelector(state => state.ticketsSearchRequest.params.to_city_id);
  const date_start = useAppSelector(state => state.ticketsSearchRequest.params.date_start);
  const date_end = useAppSelector(state => state.ticketsSearchRequest.params.date_end);
  const { bemClass, variant } = props;
  const className = "ticket-search-form";
  const ticketsSearchRequest = useTicketsSearchRequest()
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    ticketsSearchRequest({ from_city_id, to_city_id, date_start, date_end });
  }

  return (
    <form onSubmit={handleSubmit} className={classNames(className, (bemClass + `__${className}`))}>
      <div className={`ticket-search-form__group-wrapper_${variant}`}>
        <div className={`ticket-search-form__group_${variant}`}>
          <h1 className={classNames("ticket-search-form__header", `ticket-search-form__header_${variant}`)}>Направление</h1>
          <div className="ticket-search-form__input-wrapper">
            <CitiesSearchInput requestKey='from_city_id' placeholder='Откуда' bemClass={className} />
            <CitiesSearchInput requestKey='to_city_id' placeholder='Куда' bemClass={className} />
          </div>
        </div>
        <div className="ticket-search-form__group">
          <h1 className="ticket-search-form__header">Дата</h1>
          <div className="ticket-search-form__input-wrapper">
            <DateField requestKey='date_start' bemClass="ticket-search-form" placeholder="ДД/ММ/ГГ" size="normal" />
            <DateField requestKey='date_end' bemClass="ticket-search-form" placeholder="ДД/ММ/ГГ" size="normal" />
          </div>
        </div>
      </div>
      <div className="ticket-search-form__button-wrapper">
        <Button variant="standart" className="ticket-search-form" type="submit">Найти билеты</Button>
      </div>
    </form>
  );
}

export default TicketSearchForm;