import classNames from "classnames";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "shared";

interface TicketSearchFormProps {
  bemClass: string,
}

function TicketSearchForm(props: TicketSearchFormProps) {
  const [departureDate, setDepartureDate] = useState<Date | null>(null);
  const [returnDate, setReturnDate] = useState<Date | null>(null);
  const { bemClass } = props;
  const className = "ticket-search-form";

  return (
    <form className={classNames(className, (bemClass+`__${className}`))}>
      <div className="ticket-search-form__group">
        <h1 className="ticket-search-form__header">Направление</h1>
        <input className="ticket-search-form__input" type="text" placeholder="Откуда" />
        <input className="ticket-search-form__input" type="text" placeholder="Куда" />
      </div>
      <div className="ticket-search-form__group">
        <h1 className="ticket-search-form__header">Дата</h1>
        <div className="ticket-search-form__input-wrapper">
          <DatePicker dateFormat="dd/MM/yy" className="ticket-search-form__input" selected={departureDate} onChange={(date) => setDepartureDate(date)} calendarStartDay={1} placeholderText="ДД/ММ/ГГ" />
          <DatePicker dateFormat="dd/MM/yy" className="ticket-search-form__input" selected={returnDate} onChange={(date) => setReturnDate(date)} calendarStartDay={1} placeholderText="ДД/ММ/ГГ" />            </div>
      </div> <Button variant="standart" className="ticket-search-form">Найти билеты</Button>
    </form>
  );
}

export default TicketSearchForm;