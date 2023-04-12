import { OrderInfo } from "widgets";

function OrderStep2() {

  const className = 'order-step'
  return (
    <div className="wrapped">
      <div className={className}>
        <div className={`${className}__aside`}>
          <OrderInfo />
        </div>
        <div className={`${className}__passenger-list`}>

        </div>
      </div>
    </div >
  );
}

export default OrderStep2;