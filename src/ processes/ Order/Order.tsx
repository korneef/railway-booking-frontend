import { useParams } from "react-router-dom";
import { OrderStep1, OrderStep2, OrderStep3, OrderStep4 } from "../../pages";

function Order() {
  const { step } = useParams();
  return (
    <div>
            {step === '1' && <OrderStep1/>}
            {step === '2' && <OrderStep2/>}
            {step === '3' && <OrderStep3/>}
            {step === '4' && <OrderStep4/>}
    </div>
  );
}

export default Order;