import { TimeClarification } from "../../entities/index";
import { FilterSwitcher } from "../../features";
import { Panel, MultiRangeSlider, DateField, Coupe, Express, LuxuryClass, SeatClass, SecondClass, WiFi, useFindTicketRequest } from "../../shared";
import "react-datepicker/dist/react-datepicker.css";

export default function TicketFilterForm() {
  const updateRequest = useFindTicketRequest();
  const className = 'ticket-fiter-form';
  
  const selectTicketPrice = (minPrice: number = 0, maxPrice: number = 30000) => {
    updateRequest('price_from', minPrice);
    updateRequest('price_to', maxPrice);
  }

  return (
    <Panel variant='black' bemClass={className}>
      <div className={`${className}__section`}>
        <div className={`${className}__date-section-group`}>
          <div className={`${className}__section-header`}>Дата поездки</div>
          <DateField requestKey='date_start' bemClass={className} placeholder="ДД/ММ/ГГ" size="small" />
        </div>
        <div className={`${className}__date-section-group`}>
          <div className={`${className}__section-header`}>Дата возвращения</div>
          <DateField requestKey='date_end' bemClass={className} placeholder="ДД/ММ/ГГ" size="small" />
        </div>
      </div>
      <div className={`${className}__section`}>
        <FilterSwitcher fiterType="have_second_class" bemClass={`${className}__switcher`} svgIcon={<Coupe />}>Купэ</FilterSwitcher>
        <FilterSwitcher fiterType="have_third_class" bemClass={`${className}__switcher`} svgIcon={<SecondClass />}>Плацкарт</FilterSwitcher>
        <FilterSwitcher fiterType="have_fourth_class" bemClass={`${className}__switcher`} svgIcon={<SeatClass />}>Сидячий</FilterSwitcher>
        <FilterSwitcher fiterType="have_first_class" bemClass={`${className}__switcher`} svgIcon={<LuxuryClass />}>Люкс</FilterSwitcher>
        <FilterSwitcher fiterType="have_wifi" bemClass={`${className}__switcher`} svgIcon={<WiFi />}>Wi-Fi</FilterSwitcher>
        <FilterSwitcher fiterType="have_express" bemClass={`${className}__switcher`} svgIcon={<Express />}>Экспресс</FilterSwitcher>
      </div>
      <div className={`${className}__section`}>
        <div className={`${className}__section-header`}>Стоимость</div>
        <MultiRangeSlider bemClass={className} type='price' handleMouseUp={selectTicketPrice} />
      </div>
      <div className={`${className}__section`} >
        <TimeClarification direction="departure" />
      </div>
      <div className={`${className}__section`} >
        <TimeClarification direction="arrival" />
      </div>

    </Panel>
  );
}