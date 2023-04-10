import { useParams } from "react-router-dom";
import { OrderStep1 } from "../../pages";
import { OrderStep2 } from "../../pages";

function Order() {
  const { step } = useParams();
  return (
    <div>
            {step === '1' && <OrderStep1/>}
            {step === '2' && <OrderStep2/>}
    </div>
  );
}

export default Order;