import classNames from "classnames";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "shared";

interface TicketSearchFormProps {
  bemClass: string,
  variant: string
}

function TicketSearchForm(props: TicketSearchFormProps) {
  const [departureDate, setDepartureDate] = useState<Date | null>(null);
  const [returnDate, setReturnDate] = useState<Date | null>(null);
  const { bemClass, variant } = props;
  const className = "ticket-search-form";

  return (
    <form className={classNames(className, (bemClass+`__${className}`))}>
      <div className={`ticket-search-form__group-wrapper_${variant}`}>
        <div className={`ticket-search-form__group_${variant}`}>
          <h1 className={classNames("ticket-search-form__header", `ticket-search-form__header_${variant}`)}>Направление</h1>
          <div className="ticket-search-form__input-wrapper">
            <input className="ticket-search-form__input" type="text" placeholder="Откуда" />
            <input className="ticket-search-form__input" type="text" placeholder="Куда" />
          </div>
        </div>
        <div className="ticket-search-form__group">
          <h1 className="ticket-search-form__header">Дата</h1>
          <div className="ticket-search-form__input-wrapper">
            <DatePicker dateFormat="dd/MM/yy" className="ticket-search-form__input" selected={departureDate} onChange={(date) => setDepartureDate(date)} calendarStartDay={1} placeholderText="ДД/ММ/ГГ" />
            <DatePicker dateFormat="dd/MM/yy" className="ticket-search-form__input" selected={returnDate} onChange={(date) => setReturnDate(date)} calendarStartDay={1} placeholderText="ДД/ММ/ГГ" />            </div>
        </div>
      </div>
      <div className="ticket-search-form__button-wrapper">
        <Button variant="standart" className="ticket-search-form">Найти билеты</Button>
        </div>
    </form>
  );
}

export default TicketSearchForm;