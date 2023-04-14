import { OrderInfo } from "widgets";
import PassengersSummaryInfo from "widgets/PassengersSummaryInfo/PassengersSummaryInfo";

function OrderStep4() {

  const className = 'order-step'

  return (
    <div className="wrapped">
      <div className={className}>
        <div className={`${className}__aside`}>
          <OrderInfo />
        </div>
        <div className={`${className}__main`}>
        <PassengersSummaryInfo/>
        </div>
      </div>
    </div >
  );
}

export default OrderStep4;