import { WidgetHeader, PassengerCard, Panel, Button, numberWithSpaces } from "shared";
import { useAppSelector } from "app/store/hooks";
import { nanoid } from "nanoid";
import { useNavigate, useParams } from "react-router-dom";

function PassengersSummaryInfo() {
  const passengers = useAppSelector(state => state.order.preOrder.persons);
  const departurePrice = useAppSelector(state => state.order.preOrder.departure.price);
  const arrivalPrice = useAppSelector(state => state.order.preOrder.arrival.price);
  const price = departurePrice + arrivalPrice;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/order/step/2');
  }

  const className = 'passengers-summary-info'
  return (
    <div className={className}>

      <Panel variant='white' bemClass={className}>
        <WidgetHeader bemClass={className}>Пассажиры</WidgetHeader>
        <div className={`${className}__wrapper`}>
          <div className={`${className}__passengers`}>
            {passengers.map(item => item !== null && <PassengerCard key={nanoid()} passenger={item} bemClass={className}/>)}
          </div>
          <aside className={`${className}__aside-wrapper`}>
            <div className={`${className}__price-wrapper`}>
              <div className={`${className}__total`}>Всего</div>
              <div className={`${className}__price`}>{numberWithSpaces(price)}</div>
            </div>
              <Button variant='transparent' className={className} onClick={handleClick}>Изменить</Button>
          </aside>
        </div>
      </Panel>

    </div >
  );
}

export default PassengersSummaryInfo;