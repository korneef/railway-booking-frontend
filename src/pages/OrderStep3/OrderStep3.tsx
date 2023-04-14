import { OrderInfo, PayerInfo } from "widgets";
import { useRef, useLayoutEffect } from "react";

function OrderStep3() {
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
        <PayerInfo/>
      </div>
    </div >
  );
}

export default OrderStep3;