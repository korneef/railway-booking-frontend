import { TimeClarification } from "entities/index";
import { FilterSwitcher } from "features";
import { MultiRangeSlider, DateField, Coupe, Express, LuxuryClass, SeatClass, SecondClass, WiFi } from "shared";
import "react-datepicker/dist/react-datepicker.css";

export default function TicketFilterForm() {
  const className = 'ticket-fiter-form';

  return (
    <div className={className}>
      <div className={`${className}__section`}>
        <div className={`${className}__date-section-group`}>
          <div className={`${className}__section-header`}>Дата поездки</div>
          <DateField bemClass={className} placeholder="ДД/ММ/ГГ" size="small" />
        </div>
        <div className={`${className}__date-section-group`}>
          <div className={`${className}__section-header`}>Дата возвращения</div>
          <DateField bemClass={className} placeholder="ДД/ММ/ГГ" size="small" />
        </div>
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
        <div className={`${className}__section-header`}>Стоимость</div>
        <MultiRangeSlider bemClass={className} type='price' min={850} max={2950} />
      </div>
      <div className={`${className}__section`} >
        <TimeClarification direction="departure" />
      </div>
      <div className={`${className}__section`} >
        <TimeClarification direction="arrival" />

      </div>

    </div>
  );
}