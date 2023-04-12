import { OrderInfo, PassengersList } from "widgets";

function OrderStep2() {

  const className = 'order-step'
  return (
    <div className="wrapped">
      <div className={className}>
        <div className={`${className}__aside`}>
          <OrderInfo />
        </div>
        <PassengersList />
      </div>
    </div >
  );
}

export default OrderStep2;