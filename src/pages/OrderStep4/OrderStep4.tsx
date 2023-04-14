import { OrderInfo } from "widgets";
import { PassengersSummaryInfo, TrainSummaryInfo, PaymentMethodSummaryInfo } from "widgets";
import { OrderSend } from "features";
import { useRef, useLayoutEffect } from "react";

function OrderStep4() {
  const scrollElRef = useRef<null | HTMLDivElement>(null);
  useLayoutEffect(() => {
    scrollElRef.current !== null && scrollElRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
  });
  }, []);
    const className = 'order-step'

    return (
      <div className="wrapped">
        <div className={className}>
          <div ref={scrollElRef} className={`${className}__aside`}>
            <OrderInfo />
          </div>
          <div className={`${className}__main`}>
            <TrainSummaryInfo />
            <PassengersSummaryInfo />
            <PaymentMethodSummaryInfo />
            <OrderSend/>
          </div>
        </div>
      </div >
    );
  }

export default OrderStep4;