import { SeatInformation, WagonSeatsServices } from "entities/index";
interface CoachProps {
  coach: {
    _id: string,
    name: string,
    class_type: string,
    have_wifi: boolean,
    have_air_conditioning: boolean,
    price: number,
    top_price: number,
    bottom_price: number,
    side_price: number,
    linens_price: number,
    wifi_price: number,
    is_linens_included: boolean,
    available_seats: number,
    train: string
  },
  seats: Array<ISeats>,
}

interface ISeats {
  index: number,
  available: boolean
}

function Coach({ coach, seats }: CoachProps) {

  const onlyPrice = coach.class_type === 'first' || coach.class_type === 'fourth' ? false : true
  return (
    <div className="train-wagons-information__wagon-information wagon-information">
      <div className="wagon-information__wagon-number-section">
        <div className="wagon-information__wagon-number-wrapper">
          <div className="wagon-information__wagon-number">02</div>
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

export default Coach;