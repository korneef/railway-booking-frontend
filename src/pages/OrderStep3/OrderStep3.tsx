import { OrderInfo, PayerInfo } from "widgets";

function OrderStep3() {

  const className = 'order-step'

  return (
    <div className="wrapped">
      <div className={className}>
        <div className={`${className}__aside`}>
          <OrderInfo />
        </div>
        <PayerInfo/>
      </div>
    </div >
  );
}

export default OrderStep3;