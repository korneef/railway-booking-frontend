import classNames from "classnames";
import "react-datepicker/dist/react-datepicker.css";
import { Button, DateField } from "shared";
import CitiesSearchInput from "entities/components/CitiesSearchInput/CitiesSearchInput";

interface TicketSearchFormProps {
  bemClass: string,
  variant: string
}

function TicketSearchForm(props: TicketSearchFormProps) {
  const { bemClass, variant } = props;
  const className = "ticket-search-form";

  return (
    <form className={classNames(className, (bemClass + `__${className}`))}>
      <div className={`ticket-search-form__group-wrapper_${variant}`}>
        <div className={`ticket-search-form__group_${variant}`}>
          <h1 className={classNames("ticket-search-form__header", `ticket-search-form__header_${variant}`)}>Направление</h1>
          <div className="ticket-search-form__input-wrapper">
            <CitiesSearchInput placeholder='Откуда' bemClass={className}/>
            <CitiesSearchInput placeholder='Куда' bemClass={className}/>
          </div>
        </div>
        <div className="ticket-search-form__group">
          <h1 className="ticket-search-form__header">Дата</h1>
          <div className="ticket-search-form__input-wrapper">
            <DateField bemClass="ticket-search-form" placeholder="ДД/ММ/ГГ" size="normal"/>
            <DateField bemClass="ticket-search-form" placeholder="ДД/ММ/ГГ" size="normal"/>
          </div>
        </div>
      </div>
      <div className="ticket-search-form__button-wrapper">
        <Button variant="standart" className="ticket-search-form">Найти билеты</Button>
      </div>
    </form>
  );
}

export default TicketSearchForm;