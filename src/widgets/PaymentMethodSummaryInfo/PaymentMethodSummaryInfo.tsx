import { useAppSelector } from "app/store/hooks";
import { WidgetHeader, Panel, Button } from "shared";
import { useNavigate } from "react-router-dom";


function PaymentMethodSummaryInfo() {
  const navigate = useNavigate();
  const paymentMethod = useAppSelector(state => state.order.preOrder.user?.payment_method);
  if (paymentMethod === undefined) return (<></>);

  const className = 'payment-summary-info';
  const handleClick = () => {
    navigate('/order/step/3')
  }
  return (
    <div className={className}>
      <Panel variant='white' bemClass={className}>
        <WidgetHeader bemClass={className}>Способ оплаты</WidgetHeader>
        <div className={`${className}__wrapper`}>
          <div className={`${className}__payment-method`}>{paymentMethod === 'online' ? "Онлайн" : "Наличными"}</div>
          <div className={`${className}__change-paymetn-button-wrapper`}><Button onClick={handleClick} variant='transparent' className={className}>Изменить</Button></div>
        </div>
      </Panel>
    </div>
  );
}

export default PaymentMethodSummaryInfo;