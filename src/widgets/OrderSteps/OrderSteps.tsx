import OrderStepElement from "shared/OrderStepElement/OrderStepElement";

interface OrderStepsProps {
  step: 1 | 2 | 3| 4
}

export default function OrderSteps(props: OrderStepsProps) {
  const { step } = props;
  const steps = [
    {number: 1, value: 'Билеты'},
    {number: 2, value: 'Пассажиры'},
    {number: 3, value: 'Оплата'},
    {number: 4, value: 'Проверка'},
  ];

  return <div className="order-steps">
    {steps.map(item => <OrderStepElement key={item.value} step={step} number={item.number} value={item.value} />)}
  </div>
}