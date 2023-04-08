import { SeatInformation, WagonSeatsServices } from "../../index";
import { useAppSelector } from "../../../app/store/hooks";

interface IProps {
  index: number
}

function CoachInfo({ index }: IProps) {
  const coaches = useAppSelector(state => state.tickets.wagonInformation);
  if (coaches === null) return <></>;
  const wagonNumber = (index: number) => {
    const wagonNumber = index + 1;
    if (wagonNumber < 10) return `0${wagonNumber}`
    return wagonNumber
  }
  const { coach, seats } = coaches[index]
  const onlyPrice = coach.class_type === 'first' || coach.class_type === 'fourth' ? false : true
  return (
    <div className="train-wagons-information__wagon-information wagon-information">
      <div className="wagon-information__wagon-number-section">
        <div className="wagon-information__wagon-number-wrapper">
          <div className="wagon-information__wagon-number">{wagonNumber(index)}
          </div>
          <div className="wagon-information__wagon-text">Вагон</div>
        </div>
      </div>
      <div className="wagon-information__seats-information">
        <div className="wagon-information__seats-types-header-section">
          <div className="wagon-information__seats-types-header">Места <span>{seats.length}</span></div>
          <div className="wagon-information__seats-price-header">Стоимость</div>
          <div className="wagon-information__service-header">Обслуживание <span>ФПК</span></div>
        </div >
        <div className="wagon-information__content-section">
          <div className="wagon-information__seats-types">
            <SeatInformation onlyPrice={onlyPrice} bemClass="wagon-information" type="Нижние" count={10} price={coach.bottom_price} />
            {(coach.class_type === 'second' || coach.class_type === 'third') && <SeatInformation onlyPrice={onlyPrice} bemClass="wagon-information" type="Верхние" count={4} price={coach.top_price} />}
            {coach.class_type === 'third' && <SeatInformation onlyPrice={onlyPrice} bemClass="wagon-information" type="Боковые" count={17} price={coach.side_price} />}
          </div>
          <WagonSeatsServices
            bemClass='wagon-information__services'
            have_wifi={coach.have_wifi}
            have_air_conditioning={coach.have_air_conditioning}
            is_linens_included={coach.is_linens_included}
            linens_needed={coach.class_type !== 'fourth'}
          />
        </div>
      </div>
    </div>
  );
}

export default CoachInfo;