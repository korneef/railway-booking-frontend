import { useParams } from "react-router-dom";
import { OrderStep1 } from "../../pages";

function Order() {
  const { step } = useParams();
  let stepNumber: 1 | 2 | 3 | 4;
  switch (step) {
    case '1':
      stepNumber = 1
      break
    case '2':
      stepNumber = 2
      break
    case '3':
      stepNumber = 3
      break
    case '4':
      stepNumber = 4
      break
    default:
      stepNumber = 1;
      break
  }
  return (
    <div>
            {step === '1' && <OrderStep1/>}
    </div>
  );
}

export default Order;