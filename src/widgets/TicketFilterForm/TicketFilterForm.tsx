import { FilterSwitcher } from "features";
import { MultiRangeSlider, Coupe, Express, LuxuryClass, SeatClass, SecondClass, WiFi } from "shared";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";


export default function TicketFilterForm() {
  const [departureDate, setDepartureDate] = useState<Date | null>(null);
  const [returnDate, setReturnDate] = useState<Date | null>(null);

  const className = 'ticket-fiter-form'
  return (
    <div className={className}>
      <div className={`${className}__section`}>
        <div>Дата поездки</div>
        <DatePicker dateFormat="dd/MM/yy" className="ticket-search-form__input" selected={departureDate} onChange={(date) => setDepartureDate(date)} calendarStartDay={1} placeholderText="ДД/ММ/ГГ" />
        <div>Дата возвращения</div>
        <DatePicker dateFormat="dd/MM/yy" className="ticket-search-form__input" selected={returnDate} onChange={(date) => setReturnDate(date)} calendarStartDay={1} placeholderText="ДД/ММ/ГГ" />
      </div>
      <div className={`${className}__section`}>
        <FilterSwitcher bemClass={`${className}__switcher`} svgIcon={<Coupe />}>Купэ</FilterSwitcher>
        <FilterSwitcher bemClass={`${className}__switcher`} svgIcon={<SecondClass />}>Плацкарт</FilterSwitcher>
        <FilterSwitcher bemClass={`${className}__switcher`} svgIcon={<SeatClass />}>Сидячий</FilterSwitcher>
        <FilterSwitcher bemClass={`${className}__switcher`} svgIcon={<LuxuryClass />}>Люкс</FilterSwitcher>
        <FilterSwitcher bemClass={`${className}__switcher`} svgIcon={<WiFi />}>Wi-Fi</FilterSwitcher>
        <FilterSwitcher bemClass={`${className}__switcher`} svgIcon={<Express />}>Экспресс</FilterSwitcher>
      </div>
      <div className={`${className}__section`}>
        <div>Стоимость</div>
        <MultiRangeSlider type='price' min={850} max={2950} />

      </div>
    </div>
  );
}